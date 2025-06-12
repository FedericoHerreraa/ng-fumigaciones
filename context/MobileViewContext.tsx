'use client'

import { createContext, useContext, useEffect, useState } from "react";


const MobileViewContext = createContext<boolean>(false);

export const MobileViewProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return (
        <MobileViewContext.Provider value={isMobile}>
            {children}
        </MobileViewContext.Provider>
    )
}

export const useMobileView = () => useContext(MobileViewContext);