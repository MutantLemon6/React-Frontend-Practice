import type { ICard } from "../../../interfaces/card";
import CardListItem from "./CardListItem";

const CardList = ({ cards }: { cards: ICard[] }) => {
    return (
        <div className="col-md-3 col-sm-6 col-12 mb-5">
            {cards.map((card: ICard) => {
                return (
                    <CardListItem key={card.id} card={card} />
                );
            })}
        </div>
    );
};

export default CardList;