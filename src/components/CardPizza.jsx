import './styles/CardPizza.css';
import {formatPrice} from '../utils/formatPrice';

const CardPizza = ({name, price, ingredients, img}) => {
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
                    <button className='cardButton buttonInfo'>Ver Más 👀</button>
                    <button className='cardButton buttonAdd'>Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;