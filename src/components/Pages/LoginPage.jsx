import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {login} = useUser();
    const navigate = useNavigate();

    const validarDatos = async (e) => {

        e.preventDefault();

        setError("");

        if(!email.trim() || !password.trim()) {
            alert("Ingresar todos los datos");
            setError("Ingresar todos los datos");
            return;
        } else if (password.length <= 5) {
            setError("La contraseña debe ser de al menos 6 caracteres.");
            alert("La contraseña debe ser de al menos 6 caracteres.");
            return;
        }
        const success = await login(email, password);
        if (success) {
            alert("Se ha ingresado exitosamente.")
            navigate("/profile");
        } else {
            setError("Email o contraseña incorrectos. Intente nuevamente.");
            alert("Email o contraseña incorrectos. Intente nuevamente.");
            setEmail("");
            setPassword("");
        }

    };

    return (
        <>
            <div className="w-75 my-5">
                <h1>Login</h1>
                <form onSubmit={validarDatos}>
                    <div className="form-group my-3">
                        <label>Email</label>
                        <input type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>

                    <div className="form-group my-3">
                        <label>Contraseña</label>
                        <input type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3 mt-2">Enviar</button>

                </form>
            </div>
        </>
    );
};

export default LoginPage;