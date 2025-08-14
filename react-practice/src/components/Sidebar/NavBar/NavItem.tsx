import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
    href: string;
    children: ReactNode;
}
export default function NavItem({href, children} : NavItemProps) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link text-white" to={href}>{children}</NavLink>
        </li>
    );
}