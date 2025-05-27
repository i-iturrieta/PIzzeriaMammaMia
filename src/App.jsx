import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
//import RegisterPage from './components/RegisterPage';
//import LoginPage from './components/LoginPage';
{/*import Cart from './components/Cart';*/}
import './App.css';
function App() {
  return (
    <div className='appContainer'>
      <Navbar />
      {/*<Cart />*/}
      {/*<Home/>*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;