import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const validarDatos = (e) => {

        e.preventDefault();

        setError(false);

        if(!email.trim() || !password.trim()) {
            alert("Ingresar todos los datos");
            setError(true);
            return;
        } else if (password.length <= 5) {
            setError(true);
            alert("La contraseña debe ser de al menos 6 caracteres.");
            return;
        }

        setEmail("");
        setPassword("");
        alert("Ingreso exitoso.");
    }

    return (
        <>
            <div className="w-75 my-5">
                <h1>Login</h1>
                <form onSubmit={validarDatos}>
                    <div className="form-group my-3">
                        <label>Email</label>
                        <input type="text"
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

export default LoginPage