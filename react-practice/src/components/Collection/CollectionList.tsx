import type { ICollectionCard } from "../../interfaces/collection-card";

export default function CollectionList({ cards }: { cards: ICollectionCard[] }) {
    return (
        <div className="row">
            <div className="col">
                {cards.map(card => (
                    <div key={card.name} className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">{card.name}</h5>
                            <p className="card-text">Count: {card.count}</p>
                            <div className="card-text">Found in:
                                {card.boxesFoundIn.map((box) => (
                                    <div className="container" key={box}>{box}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}