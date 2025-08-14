import NavItem from './NavItem';

export default function NavBar() {
    return (
        <nav className="h-100 d-flex flex-column align-items-start py-4">
            <button 
                className="navbar-toggler d-md-none" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#sidebarNav"
                aria-controls="sidebarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse d-md-block w-100" id="sidebarNav">
                <ul className="nav flex-column w-100">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/create-box">Create Box</NavItem>
                </ul>
            </div>
        </nav>
    );
}