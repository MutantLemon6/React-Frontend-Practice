import { useState } from "react";
import type { IRow } from "../../../interfaces/row";
import { addCards, deleteCard, updateCard } from "../../../services/cardService";
import CardList from "../CardList/CardList";
import AddCardModal from "../../AddCardModal";
import type { ICard } from "../../../interfaces/card";
import { useCardCount } from "./BoxDetails/useCardCount";

export default function BoxRow({ rows }: { rows: IRow[] }) {
    const [showModal, setShowModal] = useState(false);
    const [rowList, setRowList] = useState<IRow[]>(rows);
    const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
    const { cardCount, setCardCount } = useCardCount();

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
        setCardCount(cardCount + newCards.reduce((acc, card) => acc + card.count, 0));
        console.log("Adding cards to Row", rowId);
        console.log("new Cards", newCards);
        setRowList(prevRows =>
            prevRows.map(row =>
                row.id === rowId
                    ? { ...row, cards: [...row.cards, ...newCards] }
                    : row
            )
            
        );
        console.log("Updated Rows:", rowList);
        handleCloseModal();
    };

    return (
        <>
            <div className="row">
                {rowList.map((row: IRow) => (
                    <div key={row.id} className="col-lg-3 col-md-6 col-sm-12">
                        <CardList
                            cards={row.cards}
                            onCardUpdate={async (cardId, newCount) => {
                                const cardToUpdate = row.cards.find(c => c.id === cardId);
                                if(!cardToUpdate) return;
                                const updatedCard = { ...cardToUpdate, count: newCount};
                                await updateCard(cardId, updatedCard);
                            }}
                            onCardDelete={async (cardId) => {
                                await deleteCard(cardId);
                            }}
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