'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
    from?: number;
    to: number;
    className?: string;
    plus?: boolean;
}

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return inView;
}

export const Counter = ({
    from = 0,
    to,
    className = "md:text-5xl text-3xl font-bold text-green-800",
    plus = false
}: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, 0.3);
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(from);

    useEffect(() => {
        let controls: ReturnType<typeof animate> | undefined;
        if (isInView) {
            controls = animate(count, to, {
                duration: 1.5,
                ease: "easeOut",
            });
        } else {
            count.set(from);
        }
        return () => controls?.stop();
    }, [isInView, to, from, count]);

    useEffect(() => {
        return rounded.on("change", (v) => setDisplay(v));
    }, [rounded]);

    return (
        <motion.span
            ref={ref}
            className={className}
        >
            {plus ? "+" : ""}
            {display}
        </motion.span>
    );
}; 