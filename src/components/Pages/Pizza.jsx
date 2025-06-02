import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
const Pizza = () => {
    const {id} = useParams();

    const [pizza, setPizza] = useState(null);


    useEffect(() => {

        
        const fetchPizza = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                const data = await res.json();
                setPizza(data);
            } catch (error) {
                console.error("Error cargando la pizza.", error);
            }
        };

        fetchPizza();
    }, [id]);

    if (!pizza) return <p>Cargando PIzza...</p>

    

    return (

        <div className="container my-4">
            <h2 className="mb-3">Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h2>
            <img src={pizza.img} alt={pizza.name} className="img-fluid mb-3" />
            <p><strong>Descripción:</strong> {pizza.desc}</p>
            <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
            <p><strong>Precio:</strong> {formatPrice(pizza.price)}</p>
        </div>        

    )
}


export default Pizza;