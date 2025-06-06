import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () =>{
    
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [error, setError] = useState("");
    const {register} = useUser();
    const navigate = useNavigate();

    const validarDatos = async (e) => {
        e.preventDefault();

        setError("");

        if(!email.trim() || !contrasena.trim() || !confirmarContrasena.trim()) {
            alert("Por favor, ingresar todos los datos.");
            setError("Por favor, ingresar todos los datos.");
            return;
        } else if (contrasena.length <= 5) {
            alert("Ingresar contraseña de al menos 6 caracteres.");
            setError("Ingresar contraseña de al menos 6 caracteres.");
            return;
        } else if (contrasena !== confirmarContrasena) {
            alert("Verificar confirmación de contraseña.");
            setError("Verificar confirmación de contraseña.");
            return;
        }

        const success = await register(email, contrasena);
        if (success) {
            alert("Registro exitoso.");
            setEmail("");
            setContrasena("");
            setConfirmarContrasena("");
            navigate("/login")

        } else {
            alert("Error en el registro. Intentar de nuevo.");
            setError("Error en el registro. Intentar de nuevo");
        }
    };


    return(
        <div className="w-75 my-5">
            <h1>Register</h1>
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
                    name="contrasena" 
                    className="form-control"
                    onChange={(e) => setContrasena(e.target.value)}
                    value={contrasena}
                    />
                </div>
                <div className="form-group my-3">
                    <label>Confirmar contraseña</label>
                    <input type="password" 
                    name="confirmarContrasena" 
                    className="form-control"
                    onChange={(e) => setConfirmarContrasena(e.target.value)}
                    value={confirmarContrasena}
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-3 mt-2">Enviar</button>
            </form>
        </div>
    );






};

export default RegisterPage