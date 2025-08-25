import { NavLink } from "react-router-dom";
import type { IBox } from "../../../interfaces/box";
import { useTimeAgo } from "../../../hooks/useTimeAgo";

interface RecentBoxesProps {
    boxes?: IBox[] | null;
    maxItems?: number;
}

export default function RecentBoxes({ boxes = [], maxItems = 5 }: RecentBoxesProps) {
    const recentBoxes = boxes?.sort((a, b) => {
        const dateA = new Date(a.updatedDate);
        const dateB = new Date(b.updatedDate);
        return dateB.getTime() - dateA.getTime();
    })
        .slice(0, maxItems);

    if (recentBoxes?.length === 0) {
        return <div className="mt-3">
            <small className=" d-block mb-2">Recent Boxes</small>
            <small>No boxes accessed recently</small>
        </div>
    }

    return (
        <div className="mt-3">
            <small className="d-block mb-2">Recent Boxes</small>
            <div className="list-group-flush">
                {recentBoxes?.map((box) => <BoxItem key={box.id} box={box} />)}
            </div>
        </div>
    );
}

function BoxItem({ box }: { box: IBox }) {
    const timeAgo = useTimeAgo(box.updatedDate)
    return (
        <NavLink
            key={box.id}
            to={`/box/${box.id}`}
            className="d-block py-2 px-2 small text-decoration-none text-light rounded mb-1 sidebar-link"
        >
            <div className="d-flex justify-content-between align-items-center">
                <div className="text-truncate">
                    <div className="fw-medium">{box.name}</div>
                    <small>{box.cardCount} cards</small>
                </div>
                <small className="ms-2">
                    {timeAgo}
                </small>
            </div>
        </NavLink>
    )
}