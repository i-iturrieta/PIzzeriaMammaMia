import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';

const Profile = () => {

  const {getProfile, logout, email} = useUser();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile();
      setLoading(false);
    };
    fetchProfile();
  }, [])
  if (loading) return <p>Cargando...</p>;

  return (
    <div className="my-auto">
      <h2>Perfil de Usuario</h2>
      <p className="bg-dark rounded text-light p-2">Email: {email || "No disponible"}</p>
      <Link
        onClick={() => {
          logout();
          alert("Seción cerrada");
        }}
        className="btn btn-outline-dark"
        to="/"
        >Cerrar sesión</Link>
    </div>
  );
};

export default Profile;