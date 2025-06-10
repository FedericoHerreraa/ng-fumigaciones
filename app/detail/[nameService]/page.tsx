


export default function DetailPage({ params }: { params: { nameService: string } }) {
    const { nameService } = params;
    
    return (
        <div>
            <h1>{nameService}</h1>
        </div>
    )
}