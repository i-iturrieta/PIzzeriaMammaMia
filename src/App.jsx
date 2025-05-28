import { Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Pages/Home';
import Pizza from './components/Pages/Pizza';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';
import Cart from './components/Pages/Cart';
import Profile from './components/Pages/Profile';
import NotFound from './components/NotFound';


function App() {
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
          element={<RegisterPage />}
        />
        <Route 
          path="/login"
          element={<LoginPage />}
        />
        <Route 
          path="/cart"
          element={<Cart />}
        />
        <Route 
          path="/pizza"
          element={<Pizza />}
        />
        <Route 
          path="/pizza/p001"
          element={<Pizza />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
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