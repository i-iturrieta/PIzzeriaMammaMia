import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div className='appContainer'>
      <Navbar />
      <main className='main'>
        <Home/>
      </main>
      <Footer />
    </div>
  );
}

export default App;