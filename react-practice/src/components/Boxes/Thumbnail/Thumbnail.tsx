import React from "react";
import type { IBox } from "../../../interfaces/box";
// import { Link } from "react-router-dom";

interface ThumbnailProps {
    box: IBox;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ box }) => {
    return (
        // <Link to={`/boxes/${box.id}`} className="text-decoration-none">
        <div className="card">
            <img
                src={box.imageUrl}
                className="card-img-top"
                alt="Box"
                style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="card-body">
                <h5 className="card-title">{box.name}</h5>
                <p className="card-text mb-1">
                    <small>
                        Created: {new Date(box.createdDate).toLocaleDateString("en-US")}
                    </small>
                </p>
                <p className="card-text mb-1">
                    <small>
                        Last updated: {new Date(box.updatedDate).toLocaleDateString("en-US")}
                    </small>
                </p>
                <p className="card-text mb-0">
                    <small>
                        Card Count: {box.cardCount}
                    </small>
                </p>
            </div>
        </div>
        //</Link>
    );
};
export default Thumbnail;