import Header from './Header';
import'./styles/Home.css';
import CardPizza from './CardPizza';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='pizzaGridContainer'>


                <CardPizza
                    name="Napolitana"
                    price={5000}
                    ingredients={['queso', 'tomate', 'aceitunas']}
                    img='public\img\pizzaImg.jpeg'
                /> 

                <CardPizza
                name="Española"
                price={6950}
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                />
                
                <CardPizza
                name="Pepperoni"
                price={6950}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/>



            </div>
        </div>
    );
};
export default Home;