import { useEffect, useState } from "react";
import type { ICard } from "../../../interfaces/card";
import { useCardCount } from "../Box/BoxDetails/useCardCount";

interface CardListIemProps {
    card: ICard;
    onDelete?: (cardId: string | number) => void;
    onUpdate?: (cardId: string | number, newCount: number) => void;
}

export default function CardListItem({ card, onDelete, onUpdate }: CardListIemProps) {
    const [count, setCount] = useState(card.count);
    const [isDeleting, setIsDeleting] = useState(false);
    const {cardCount, setCardCount} = useCardCount();

    useEffect(() => {
        setCount(card.count);
    }, [card.count]);
    
    const handleIncrement = async () => {
        const newCount = count + 1;
        setCount(newCount);
        setCardCount(cardCount + 1);
        if (onUpdate) {
            onUpdate(card.id, newCount);
        }
    };

    const handleDecrement = async () => {
        const newCount = count - 1;
        setCardCount(cardCount - 1);
        if (newCount <= 0) {
            setIsDeleting(true);
            if (onDelete) {
                onDelete(card.id);
            }
        } else {
            setCount(newCount);
            if (onUpdate) {
                onUpdate(card.id, newCount);
            }
        }
    }

    if (isDeleting) {
        return null;
    }
    return (
        <div className="card mb-3" key={card.id}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={card.imageUrl} alt={card.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{card.name}</h4>
                        <p className="card-text">Count: {card.count}</p>
                        <div className="d-flex align-items-center gap-2">
                            <button
                                className="btn btn-outline-danger btn-sm"
                                type="button"
                                onClick={handleDecrement}
                                disabled={count <= 0}>
                                -
                            </button>
                            <button
                                className="btn btn-outline-success btn-sm"
                                type="button"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};