import { NavLink } from "react-router-dom";
import type { IBox } from "../../../interfaces/box";
import { useTimeAgo } from "../../../hooks/useTimeAgo";

export default function BoxItem({ box }: { box: IBox }) {
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