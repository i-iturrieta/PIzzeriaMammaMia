import { useState, useEffect } from 'react';
import Header from '../Header';
import'../styles/Home.css';
import CardPizza from '../CardPizza';

const Home = () => {

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

    const [lasPizzas, setLasPizzas] = useState([]);

    return (




        <div>
            <Header />
            <div className='pizzaGridContainer'>

                
                {lasPizzas.map(pizza => <CardPizza
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}>
                    </CardPizza>)}



            </div>
        </div>
    );
};
export default Home;