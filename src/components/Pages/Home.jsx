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

                
                {lasPizzas.map(pizzaCard => <CardPizza
                key={pizzaCard.id}
                name={pizzaCard.name}
                price={pizzaCard.price}
                ingredients={pizzaCard.ingredients}
                img={pizzaCard.img}>
                    </CardPizza>)}



            </div>
        </div>
    );
};
export default Home;