import type { ICollectionCard } from "../../interfaces/collection-card"

interface CollectionDetailsProps {
    cards: ICollectionCard[];
}

export default function CollectionDetails({ cards }: CollectionDetailsProps) {
    const totalCards = cards.reduce((sum, card) => sum + card.count, 0);
    const uniqueCards = cards.length;
    const colorCounts = cards.reduce((acc, card) => {
        card.colorIdentity.forEach(color => {
            acc[color] = (acc[color] || 0) + card.count;
        });
        return acc;
    }, {} as Record<string, number>);

    return <div className="row border-bottom mb-3">
        <div className="col-md-3">
            <p className="mb-1">
                <strong>Card Count:</strong> {totalCards}
            </p>
        </div>
        <div className="col-md-3">
            <p className="mb-1">
                <strong>Unique Cards:</strong> {uniqueCards}
            </p>
        </div>
        <div className="col-md-3">
            <p className="mb-1">
                <strong>Boxes:</strong> {new Set(cards.flatMap(card => card.boxesFoundIn)).size}
            </p>
        </div>
        <div className="col-md-3">
            <p className="mb-1">
                <strong>Most Common Color:</strong> {
                    Object.entries(colorCounts).length > 0
                        ? Object.entries(colorCounts).sort(([, a], [, b]) => b - a)[0][0]
                        : 'None'
                }
            </p>
        </div>
    </div>
}