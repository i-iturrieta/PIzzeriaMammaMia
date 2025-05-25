import pizzas from "../data/pizzas";
import { formatPrice } from "../utils/formatPrice";
import { useState } from "react";
const Cart = () => {

    const [quantity, setQuantity] = useState({});

    const addQuantity = (name) =>{
        setQuantity(prev => ({
            ...prev,
            [name]: (prev[name] || 0) + 1
        }));

    };
    const restQuantity = (name) =>{
        setQuantity(prev => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) - 1, 0)
        }));

    };
    const total = pizzas.reduce((acc, pizza) => {
        const cuantity = quantity[pizza.name] || 0;
        return acc + cuantity * pizza.price;
    }, 0);



    return (
        <div className="container mt-4 mb-4">
            <h3>Detalles del pedido:</h3>
            <div className="border rounded p-3 mb-3 col-10">
                {pizzas.map(pedido => 
                    <div
                    className="d-flex align-items-center justify-content-between mb-3"
                    key={pedido.name}>
                        <div className="d-flex align-items-center gap-5">
                            <img src={pedido.img} alt={pedido.name}
                            className="w-25"/>
                            <h5 style={{marginBottom: 0, fontSize: "2rem"}}>{pedido.name}</h5> 
                        </div>
                        <div className="d-flex align-items-center gap-5">
                            <h5 style={{marginBottom: 0, fontSize: "2rem"}}>{formatPrice(pedido.price)}</h5>
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-outline-danger" 
                                    onClick={() => restQuantity(pedido.name)}
                                >-</button>
                                <p className="" style={{marginBottom: 0, fontSize: "2rem"}}>{quantity[pedido.name] || 0}</p>
                                <button className="btn btn-outline-primary"
                                    onClick={() => addQuantity(pedido.name)}>+</button>
                            </div>
                        </div>
                        

                    </div>
                )}
            </div>
            <h2>Total: {formatPrice(total)}</h2>
            <button className="btn btn-dark">Pagar</button>
        
        
        
        </div>
    );

};

export default Cart;