import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from '../../context/CartContext';

const PizzasList = () => {
  const {addToCart} = useCart();

  const [pizzas, setPizzas] = useState([]);

   useEffect(() => {

    const fetchPizzas = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/pizzas');
                const data = await res.json();
                setPizzas(data);
            } catch (error) {
                console.error("Error cargando pizzas.", error);
            }
        };

        fetchPizzas();
    }, []);

  return (
    <table className="table table-striped table-hover my-4 w-75">
            <thead>
                <tr>
                    <th>Imágen referencial</th>
                    <th>Nombres</th>
                    <th>Ingredientes</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {pizzas.map(rowPizza => <tr key={rowPizza.id}>
                    <td ><img className="w-100" src={rowPizza.img} alt={rowPizza.name}/></td>
                    <td>{rowPizza.name}</td>
                    <td>{rowPizza.ingredients.join(", ")}</td>
                    <td>{rowPizza.desc}</td>
                    <td><button className="btn btn-success" onClick={() => addToCart({
                      id: rowPizza.id,
                      name: rowPizza.name,
                      price: rowPizza.price,
                      img: rowPizza.img
                    })}>{formatPrice(rowPizza.price)}</button></td>

                </tr>)}
            </tbody>
        </table>
  );
};

export default PizzasList;