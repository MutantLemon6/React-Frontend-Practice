import { useEffect, useState } from "react";
import type { ICard } from "../../../interfaces/card";
import CardListItem from "./CardListItem";

interface CardListProps {
    cards: ICard[];
    onCardUpdate?: (cardId: string | number, newCount: number) => void;
    onCardDelete?: (cardId: string | number) => void;
}
export default function CardList({ cards, onCardUpdate, onCardDelete }: CardListProps) {
    const [cardList, setCardList] = useState(cards);

    useEffect(() => {
        setCardList(cards);
    }, [cards]);

    const handleCardDelete = async (cardId: string | number) => {
        setCardList(prevCards => prevCards.filter(card => card.id !== cardId));

        if (onCardDelete) {
            onCardDelete(cardId);
        }
    }
    const handleCardUpdate = async (cardId: string | number, newCount: number) => {
        setCardList(prevCards =>
            prevCards.map(card =>
                card.id === cardId ? { ...card, count: newCount } : card
            )
        );

        if (onCardUpdate) {
            onCardUpdate(cardId, newCount);
        }
    };
    return (
        <ul className="col mb-5 list-unstyled">
            {cardList.length === 0 ? (
                <li>No cards available</li>
            ) : (
                cardList.map((card: ICard) => (
                    <li key={card.id}>
                        <CardListItem
                            key={card.name}
                            card={card}
                            onDelete={handleCardDelete}
                            onUpdate={handleCardUpdate}
                        />
                    </li>
                ))
            )}
        </ul>
    );
};