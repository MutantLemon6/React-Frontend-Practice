import type { ICard } from "../../../interfaces/card";
import CardListItem from "./CardListItem";

export default function CardList({ cards }: { cards: ICard[] }) {
    return (
        <ul className="col-md-3 col-sm-6 col-12 mb-5">
            {cards.map((card: ICard) => {
                return (
                    <li>
                        <CardListItem key={card.id} card={card} />
                    </li>
                );
            })}
        </ul>
    );
};