import './styles/CardPizza.css';
import {formatPrice} from '../utils/formatPrice';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CardPizza = ({id, name, price, ingredients, img}) => {

    const {addToCart} = useCart();

    return (
        <div className='cardPizza'>
            <img src={img} alt={name} className='cardPizzaImg' />
            <div className='cardPizzaBody'>
                <h3 className='cardPizzaTitle'>Pizza {name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <hr />
                <div className='ingredientsContainer'>
                    <h4>Ingredientes:</h4>
                    <ul className='cardPizzaIngredients'> 🍕
                      {ingredients.map((ingredient, index) => (
                         <li key={index}>
                                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <p className='cardPizzaPrice'>Precio: {formatPrice(price)}</p>
                <div className='cardPizzaActions'>
                    <Link to="/pizza" className='cardButton buttonInfo'>Ver Más 👀</Link>
                    <button className='cardButton buttonAdd' onClick={() => addToCart({id, name, price, img})}>Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;