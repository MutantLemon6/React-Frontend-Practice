import { Link} from "react-router-dom";
import type { ThumbnailProps } from "./ThumbnailProps";
import ThumbnailBody from "./ThumbnailBody";
import ThumbnailImage from "./ThumbnailImage";



export default function Thumbnail({box}: ThumbnailProps ){
    return (
        <Link to={`/box/${box.id}`} className="card text-white border-0 h-100 bg-gray hover-effect text-decoration-none">
            <ThumbnailImage box={box} />
            <ThumbnailBody box={box}/>
        </Link>
    );
};