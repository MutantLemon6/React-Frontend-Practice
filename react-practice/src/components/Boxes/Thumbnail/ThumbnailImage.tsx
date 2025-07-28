import type { ThumbnailProps } from "./ThumbnailProps";

export default function ThumbnailImage({ box}: ThumbnailProps){
    return (
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
    );
};