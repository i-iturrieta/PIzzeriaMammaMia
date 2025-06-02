import './styles/Navbar.css';
import { formatPrice } from '../utils/formatPrice';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {totalPrice} = useCart();
    const {token, logout} = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    return (
        <nav className='navbarMain'>
            <div className='navbarLeft'>
                <Link className='navbarName' to="/">Pizzería Mamma Mía!</Link>
                <div className='navbarLinks'>
                    <Link className='navbarButton' to="/">Home</Link>
                    {token ? (
                        <>
                            <Link className='navbarButton' to="/profile">🔓 Profile</Link> 
                            <Link className='navbarButton' to="/" onClick={handleLogout}>🔒 Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link className='navbarButton' to="/login">🔐 Login</Link> 
                            <Link className='navbarButton' to="/register">🔐 Register</Link>
                        </>
                    )}
                    <Link className='navbarButton' to="/pizzas">🍕 Pizzas</Link>
                </div>
            </div>

            <div className='navbarRight'>
                <Link className='totalButton navbarButton' to="/cart">🛒 Total: {formatPrice(totalPrice)}</Link>
            </div>
        </nav>
    );
};

export default Navbar;
