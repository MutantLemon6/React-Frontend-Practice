import { Link } from "react-router-dom";
import type { CardProps } from "./CardProps";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

export default function Card({ box }: CardProps) {
    return (
        <Link to={`/box/${box.id}`} className="card text-white border-0 h-100 bg-gray hover-effect text-decoration-none">
            <CardImage box={box} />
            <CardBody box={box} />
        </Link>
    );
};