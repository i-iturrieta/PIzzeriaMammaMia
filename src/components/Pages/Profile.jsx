import { Link } from 'react-router-dom';

const Profile = () => {

  const userEmail = "usuario@example.com";

  const logout = () => {
    alert('Sesión cerrada');
  };

  return (
    <div className="my-auto">
      <h2>Perfil de Usuario</h2>
      <p className="bg-dark rounded text-light p-2">Email: {userEmail}</p>
      <Link onClick={logout} className="btn btn-outline-dark" to="/">Cerrar sesión</Link>
    </div>
  );
};

export default Profile;