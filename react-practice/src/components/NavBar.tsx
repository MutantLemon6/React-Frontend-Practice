import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className='bg-gray'>
            <nav className='navbar navbar-expand-lg'>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <Link className="nav-link text-white fw-bold bg-orange" to="/">MTG Card Organizer</Link>    
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link text-white" to="/">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link text-white" to="/create-box">Create Box</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}