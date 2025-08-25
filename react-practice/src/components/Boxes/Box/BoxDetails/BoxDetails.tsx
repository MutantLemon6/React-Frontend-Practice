import { useEffect } from "react";
import { useTimeAgo } from "../../../../hooks/useTimeAgo";
import type { IBox } from "../../../../interfaces/box"
import { useCardCount } from "./useCardCount";

export default function BoxDetails({ box }: { box: IBox }) {
    const timeAgo = useTimeAgo(box?.updatedDate);
    const {cardCount, setCardCount} = useCardCount();

    useEffect(() => {
        setCardCount(box.cardCount);
    }, [box.cardCount, setCardCount]);
    return (
        <section className="mb-3">
            <div className="d-flex">
                <p className="p-2">Card Count: {cardCount}</p>
                <p className="p-2">Created: {new Date(box.createdDate).toLocaleDateString()}</p>
                <p className="p-2"> Last Updated: {timeAgo}</p>
            </div>
        </section>
    )
}