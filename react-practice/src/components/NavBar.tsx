import { Link } from 'react-router';

const NavBar: React.FC = () => {
    return (
        <header style={{ backgroundColor: '#424242' }}>
            <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <div className='navbar-nav'>
                        <Link className="nav-link text-white fw-bold px-3" to="/" style={{ backgroundColor: '#d84315' }}>MTG Card Organizer</Link>
                        <Link className="nav-link active text-white px-3" to="/">Home</Link>
                        <Link className="nav-link text-white px-3" to="/create-box">Create Box</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;