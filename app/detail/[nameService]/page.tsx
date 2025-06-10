


export default async function DetailPage({ params }: { params: Promise<{ nameService: string }> }) {
    const { nameService } = await params;
    
    return (
        <div>
            <h1>{nameService}</h1>
        </div>
    )
}