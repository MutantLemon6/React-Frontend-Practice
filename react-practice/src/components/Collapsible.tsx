import type { ReactNode } from "react";

interface CollapsibleProps {
    children: ReactNode;
    className?: string;
    togglerClassName?: string;
    collapseId?: string;
    ariaLabel?: string;
}

export default function Collapsible({
    children,
    className = "sidebar-translucent",
    togglerClassName = "",
    collapseId = "collapse",
    ariaLabel = "Toggle navigation"
} : CollapsibleProps) {
    return (
        <div className={`col-md-2 ${className}`}>
            <button
                className={`navbar-toggler d-md-none ${togglerClassName}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-controls={collapseId}
                aria-expanded="false"
                aria-label={ariaLabel}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse d-md-block w-100`} id={collapseId}>
                {children}
            </div>
        </div>
    );
}