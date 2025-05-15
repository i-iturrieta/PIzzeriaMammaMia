import './styles/Navbar.css';
import {formatPrice} from '../utils/formatPrice';

const Navbar = () => {
    const total = 25000;
    const token = false;
    
    return (
        <nav className='navbarMain'>
            <div className='navbarLeft'>
                <div className='navbarName'>Pizzería Mamma Mía!</div>
                <div className='navbarLinks'>
                    <button className='navbarButton'>🍕 Home</button>
                    {token ? (
                        <>
                            <button className='navbarButton'>🔓 Profile</button> 
                            <button className='navbarButton'>🔒 Logout</button>
                        </>
                        
                    ) : (
                        <>
                            <button className='navbarButton'>🔐 Login</button> 
                            <button className='navbarButton'>🔐 Register</button>
                        </>
                        
                    )}
                    
                </div>
            </div>


            <div className='navbarRight'>
                    <button className='totalButton navbarButton'>🛒 Total: {formatPrice(total)}</button>
            </div>


        </nav>
    );
};

export default Navbar;