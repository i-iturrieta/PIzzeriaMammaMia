import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="my-auto">
            <p className="fs-1">La ruta que intentas consultar no existe</p>
            <p className="fs-1">ERROR 404</p>
            <Link to="/" className="btn btn-dark">Volver al inicio</Link>
        </div>
    )
}

export default NotFound;