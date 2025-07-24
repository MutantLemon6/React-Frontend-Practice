import React from "react";
import type { IBox } from "../../../interfaces/box";
import { useNavigate } from "react-router";

interface ThumbnailProps {
    box: IBox;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ box }) => {
    const navigate = useNavigate();
    return (
        <div className="card bg-secondary text-white border-0 h-100" style={{
            backgroundColor: '#424242',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            cursor: 'pointer'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }} onClick={() => navigate(`box/${box.id}`)}>
            <div className="card-img-top position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                {box.imageUrl ? (
                    <img
                        src={box.imageUrl}
                        alt={box.name}
                        className="w-100 h-100 object-fit-cover"
                    />
                ) : (
                    <div className="w-100 h-100 bg-dark d-flex align-items-center justify-content-center">
                        <span className="text-muted">No Image Available</span>
                    </div>
                )
                }
            </div>
            <div className="card-body">
                <h5 className="card-title text-white fw-bold">{box.name}</h5>
                <div className="text-light">
                    <div className="mb-1">
                        <span className="fw-bold">Created:</span> {new Date(box.createdDate).toLocaleDateString()}
                    </div>
                    <div className="mb-1">
                        <span className="fw-bold">Updated:</span> {
                            box.updatedDate === new Date().toISOString().split('T')[0] + 'T' + new Date().toISOString().split('T')[1]
                                ? 'Today'
                                : new Date(box.updatedDate).toLocaleDateString()
                        }
                    </div>
                    <div>
                        <span className="fw-bold">Card Count:</span> {box.cardCount}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Thumbnail;