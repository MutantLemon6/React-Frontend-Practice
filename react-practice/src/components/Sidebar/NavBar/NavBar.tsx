import NavItem from './NavItem';

export default function NavBar() {
    return (
        <nav className="d-flex flex-column align-items-start py-4">
            <ul className="nav flex-column w-100">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/create-box">Create Box</NavItem>
                <NavItem href="/collection">Collection</NavItem>
            </ul>
        </nav>
    );
}