import { useState } from "react";

const RegisterPage = () =>{
    
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [confirmarContrasena, setConfirmarContrasena] = useState("")
    const [error, setError] = useState("")

    const validarDatos = (e) => {
        e.preventDefault();

        setError(false);

        if(!email.trim() || !contrasena.trim() || !confirmarContrasena.trim()) {
            alert("Por favor, ingresar todos los datos.");
            setError(true);
            return;
        } else if (contrasena.length <= 5) {
            alert("Ingresar contraseña de al menos 6 caracteres.");
            setError(true);
            return;
        } else if (contrasena !== confirmarContrasena) {
            alert("Verificar confirmación de contraseña.");
            setError(true);
            return;
        }
        
        setEmail("")
        setContrasena("")
        setConfirmarContrasena("")
        alert("Datos ingresados exitosamente.")
    }


    return(
        <div className="w-75 my-5">
            <h1>Register</h1>
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