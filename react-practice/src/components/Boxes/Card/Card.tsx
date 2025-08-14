import { Link } from "react-router-dom";
import type { CardProps } from "./CardProps";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

export default function Card({ box }: CardProps) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Link to={`/box/${box.id}`} className="card text-decoration-none">
                <CardImage box={box} />
                <CardBody box={box} />
            </Link>
        </div>

    );
};