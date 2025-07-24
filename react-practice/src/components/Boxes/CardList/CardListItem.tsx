import type { ICard } from "../../../interfaces/card";

const CardListItem = ({ card }: { card: ICard }) => {
    return (
        <div className="card mb-1" key={card.id}>
            <img src={card.imageUrl} alt={card.name} className="card-img-top" />
            <h4>{card.name}</h4>
            <p>Count: {card.count}</p>
        </div>
    );
};

export default CardListItem;