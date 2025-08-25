import { useEffect, useState } from "react";
import type { ICard } from "../interfaces/card";
import { fetchCardsfromScryfall } from "../services/cardService";

interface AddCardModalProps {
    show: boolean;
    onClose: () => void;
    rowId: number | null;
    onSave: (rowId: number, cardData: ICard[]) => void;
}

export default function AddCardModal({ show, onClose, rowId, onSave }: AddCardModalProps) {
    const [cards, setCards] = useState<ICard[]>([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState<ICard[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if (search.trim() === "") {
            setSearchResults([]);
            return;
        }
        setIsFetching(true);
        const timeout = setTimeout(async () => {
            await fetchCardsfromScryfall(search).then(data => {
                setSearchResults(data || []);
                setIsFetching(false);
            });

        }, 400);
        return () => clearTimeout(timeout);
    }, [search]);

    if (!show || rowId === null) return null;

    const handleAddCardRow = () => {
        setCards([...cards, { id: 0, name: "", count: 1, imageUrl: "", color: [], colorIdentity: [], rowId }]);
    };

    const handleSelectCard = (index: number, card: ICard) => {
        const updated = [...cards];
        updated[index] = { ...card, rowId };
        setCards(updated);
        setSearch("");
        setSearchResults([]);
    }

    const handleCardChange = (index: number, field: "name" | "count", value: string | number) => {
        const updated = [...cards];
        updated[index] = { ...updated[index], [field]: value }
        setCards(updated);
    };

    const handleSave = () => {
        const filteredCards = cards.filter(card => card.name.trim() !== "");
        onSave(rowId, filteredCards);
        onClose();
        setCards([{ id: 0, name: "", count: 1, imageUrl: "", color: [], colorIdentity: [], rowId }]);
    };

    return (
        <>
            <div className="modal fade show d-block">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Add Cards to Row {rowId}
                                <button className="btn-close" onClick={onClose}></button>
                            </div>
                            <div className="modal-body">
                                {cards.map((card, index) => (
                                    <div className="row mb-3" key={index}>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Card Name"
                                                value={card.name}
                                                onChange={(e) => {
                                                    handleCardChange(index, "name", e.target.value);
                                                    setSearch(e.target.value);
                                                }} />
                                            {search && (
                                                <div className="search-results">
                                                    {isFetching && <div>Searching...</div>}
                                                    {!isFetching && searchResults.map((result) => (
                                                        <div
                                                            key={result.id}
                                                            className="search-result"
                                                            onClick={() => handleSelectCard(index, result)}
                                                        >
                                                            {result.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Card Count"
                                                min={1}
                                                value={card.count}
                                                onChange={(e) => handleCardChange(index, "count", Number(e.target.value))} />
                                        </div>
                                        <div className="col-auto">
                                            {cards.length > 1 && (
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={() => setCards(cards.filter((_, i) => i !== index))}>
                                                    ✕
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-secondary" onClick={handleAddCardRow}>
                                    + Add Another Card
                                </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>
                                    Save Cards
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}