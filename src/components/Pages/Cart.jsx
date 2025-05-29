import pizzas from "../../data/pizzas";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {

    const {cart, increaseQty, decreaseQty, totalPrice} = useCart()
    if (cart.length === 0) {
        return (
            <div className="container mt-5 text-center mb-auto">
                <h3>No hay pizzas en tu carrito 😢</h3>
                <Link to="/" className="btn btn-success mt-3">
                Volver al menú 🍕
                </Link>
            </div>
                );
    }


    return (
        <div className="container mt-4 mb-auto m">
            <h3>Detalles del pedido:</h3>
            <div className="border rounded p-3 mb-3 col-10">
                {cart.map(pizza => 
                    <div
                    className="d-flex align-items-center justify-content-between mb-3"
                    key={pizza.id} >
                        <div className="d-flex align-items-center gap-5">
                            <img src={pizza.img} alt={pizza.name}
                            className="w-25 rounded"/>
                            <h5 style={{marginBottom: 0, fontSize: "2rem"}}>{pizza.name}</h5> 
                        </div>
                        <div className="d-flex align-items-center gap-5">
                            <h5 style={{marginBottom: 0, fontSize: "2rem"}}>{formatPrice(pizza.price)}</h5>
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-outline-danger" 
                                    onClick={() => decreaseQty(pizza.id)}
                                >-</button>
                                <p className="" style={{marginBottom: 0, fontSize: "2rem"}}>{pizza.quantity}</p>
                                <button className="btn btn-outline-primary"
                                    onClick={() => increaseQty(pizza.id)}>+</button>
                            </div>
                        </div>
                        

                    </div>
                )}
            </div>
            <h2>Total: {formatPrice(totalPrice)}</h2>
            <button className="btn btn-dark">Pagar</button>
        
        
        
        </div>
    );

};

export default Cart;