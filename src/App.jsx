import { Navigate, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useContext } from 'react';
import {UserContext} from './context/UserContext';

import Home from './components/Pages/Home';
import Pizza from './components/Pages/Pizza';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';
import Cart from './components/Pages/Cart';
import Profile from './components/Pages/Profile';
import NotFound from './components/NotFound';
import PizzasList from './components/Pages/PizzasList';


function App() {
  const {token} = useContext(UserContext);
  return (
    <div className='appContainer'>
      <Navbar />


      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/register"
          element={!token ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route 
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route 
          path="/cart"
          element={<Cart />}
        />
        <Route 
          path="/pizzas"
          element={<PizzasList />}
        />
        <Route 
          path="/pizza/:id"
          element={<Pizza />}
        />
        <Route 
          path="/profile"
          element={token ? <Profile /> : <Navigate to ="/login" />}
        />
        <Route 
          path="/*"
          element={<NotFound />}
        />



      



      </Routes>

      <Footer />
     
    </div>
  );
};

export default App;