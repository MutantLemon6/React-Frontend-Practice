import { useTimeAgo } from "../../../hooks/useTimeAgo";
import type { CardProps } from "./CardProps";

export default function CardBody({ box }: CardProps) {
    const timeAgo = useTimeAgo(box.updatedDate);
    return (
        <div className="card-body">
            <h5 className="card-title text-white fw-bold">{box.name}</h5>
            <div className="text-light">
                <div className="mb-1">
                    <span className="fw-bold">Created:</span> {new Date(box.createdDate).toLocaleDateString()}
                </div>
                <div className="mb-1">
                    <span className="fw-bold">Updated:</span> {timeAgo}
                </div>
                <div>
                    <span className="fw-bold">Card Count:</span> {box.cardCount}
                </div>
            </div>
        </div>
    );
};