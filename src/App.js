import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Cart from "./pages/cart.jsx";
import Home from "./pages/home.jsx";
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
