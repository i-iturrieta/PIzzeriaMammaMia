import { useState, useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
const Pizza = () => {
    const [lasPizzas, setLasPizzas] = useState([]);
    useEffect(() => {

        
        const fetchPizzas = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/pizzas');
                const data = await res.json();
                setLasPizzas(data);
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
                {lasPizzas.map(rowPizza => <tr key={rowPizza.id}>
                    <td ><img className="w-100" src={rowPizza.img} alt={rowPizza.name}/></td>
                    <td>{rowPizza.name}</td>
                    <td>{rowPizza.ingredients.join(", ")}</td>
                    <td>{rowPizza.desc}</td>
                    <td>{formatPrice(rowPizza.price)}</td>

                </tr>)}
            </tbody>
        </table>

    )
}


export default Pizza