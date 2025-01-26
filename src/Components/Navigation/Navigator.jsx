import { Link } from 'react-router';

const Navigator = () => {
    return (
        <nav className='navbar'>
                <Link to="/" className='nav-Link'>Home</Link>
                <Link to="/counter"  className='nav-Link'>Counter</Link>
                <Link to="/think"  className='nav-Link'>Think</Link>
                <Link to="/products"  className='nav-Link'>Products</Link>
                <Link to="/about"  className='nav-Link'>About</Link>
        </nav>
    );
}

export default Navigator;