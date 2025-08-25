import { useState } from "react";
import type { IRow } from "../../../interfaces/row";
import { addCards, deleteCard, updateCard } from "../../../services/cardService";
import CardList from "../CardList/CardList";
import AddCardModal from "../../AddCardModal";
import type { ICard } from "../../../interfaces/card";
import { useBoxes } from "./context/useBoxes";

interface BoxRowProps {
    rows: IRow[];
    onCardUpdate?: (cardId: string | number, newCount: number) => void;
    onCardDelete?: (cardId: string | number) => void;
}

export default function BoxRows({ rows, onCardUpdate, onCardDelete }: BoxRowProps) {
    const [showModal, setShowModal] = useState(false);
    const [rowList, setRowList] = useState<IRow[]>(rows);
    const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
    const { updateBoxCardCount } = useBoxes();

    const handleOpenModal = (rowId: number) => {
        setSelectedRowId(rowId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRowId(null);
    };

    const handleSaveCards = async (rowId: number, newCards: ICard[]) => {
        await addCards(newCards);

        //get boxId from the rowId
        const boxId = rowList.find(row => row.id === rowId)?.boxId;

        //update box card count
        if (boxId) {
            updateBoxCardCount(boxId, newCards.reduce((acc, card) => acc + card.count, 0));
        }

        setRowList(prevRows =>
            prevRows.map(row =>
                row.id === rowId
                    ? { ...row, cards: [...row.cards, ...newCards] }
                    : row
            )
            
        );
        handleCloseModal();

        if(onCardUpdate && newCards.length > 0) {
            onCardUpdate(newCards[0].id, newCards[0].count);
        }
    };

    const handleCardUpdate = async (cardId: string | number, newCount: number) => {
        // Find the card across all rows
        let cardToUpdate: ICard | undefined;
        let targetRowId: number | undefined;
        
        for (const row of rowList) {
            const foundCard = row.cards.find(c => c.id === cardId);
            if (foundCard) {
                cardToUpdate = foundCard;
                targetRowId = row.id;
                break;
            }
        }
        
        if (!cardToUpdate || targetRowId === undefined) return;
        
        const updatedCard = { ...cardToUpdate, count: newCount };
        await updateCard(cardId, updatedCard);
        
        // Update local state
        setRowList(prevRows =>
            prevRows.map(row =>
                row.id === targetRowId
                    ? {
                        ...row,
                        cards: row.cards.map(card =>
                            card.id === cardId ? updatedCard : card
                        )
                      }
                    : row
            )
        );
        
        // Notify parent component
        onCardUpdate?.(cardId, newCount);
    };

    const handleCardDelete = async (cardId: string | number) => {
        await deleteCard(cardId);
        
        // Update local state by removing the card
        setRowList(prevRows =>
            prevRows.map(row => ({
                ...row,
                cards: row.cards.filter(card => card.id !== cardId)
            }))
        );
        
        // Notify parent component
        onCardDelete?.(cardId);
    };

    return (
        <>
            <div className="row">
                {rowList.map((row: IRow) => (
                    <div key={row.id} className="col-lg-3 col-md-6 col-sm-12">
                        <CardList
                            cards={row.cards}
                            onCardUpdate={handleCardUpdate}
                            onCardDelete={handleCardDelete}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                if (row.id != null) {
                                    handleOpenModal(row.id)
                                }
                            }}
                        >
                            Add cards
                        </button>
                    </div>
                ))}
            </div>

            <AddCardModal
                show={showModal}
                onClose={handleCloseModal}
                rowId={selectedRowId}
                onSave={handleSaveCards}
            />
        </>
    );
};