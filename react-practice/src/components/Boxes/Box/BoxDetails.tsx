import { useTimeAgo } from "../../../hooks/useTimeAgo";
import type { IBox } from "../../../interfaces/box"

export default function BoxDetails({ box }: { box: IBox }) {
    const timeAgo = useTimeAgo(box?.updatedDate);
    return (
        <section className=" bg-gray text-white mb-3">
            <img src={box.imageUrl} alt={box.name} className="mb-3 w-100 h-25 overflow-y-hidden" />
            <div className="d-flex">
                <p className="border-end p-2">Card Count: {box.cardCount}</p>
                <p className="border-end p-2">Created: {new Date(box.createdDate).toLocaleDateString()}</p>
                <p className="p-2"> Last Updated: {timeAgo}</p>
            </div>
        </section>
    )
}