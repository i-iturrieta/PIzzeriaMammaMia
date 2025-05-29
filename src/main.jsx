import { StrictMode } from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(

  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider> 
    </BrowserRouter>
    
  </StrictMode>,
)
