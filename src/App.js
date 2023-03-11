// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router';
import { useState } from 'react';
import React from 'react';
import All from './components/All/All';
import Header from './components/header/Header';
import Electronics from './components/Electronics/Electronics';
import Jewelery from './components/Jewelery/Jewelery';
import MensClothing from './components/MensClothing/MensClothing';
import WomensClothing from './components/WomensClothing/WomensClothing';
import Cart from './components/Cart/Cart';
import Favourite from './components/Favourite/Favourite';
import Login from './components/LoginPage/Login'
import Signup from './components/Signup/Signup';
import Productdetails from './components/Productdetails/Productdetails';

function App() {

  const [Favorite,setFavorites] = useState([]);
  const [cart,setCart] = useState([]);
  // const [heart, setHeart] = useState(false);
  
  function addToCart(params){
     
        if(cart.includes(params)){
          cart.splice(cart.indexOf(params),1)
        }else{
          cart.push(params)
        }
        
        setCart([...cart])
        console.log(cart)

  }
   
  function addToFavorites(params){
       
    if(Favorite.includes(params)){
      Favorite.splice(Favorite.indexOf(params),1)
    }else{
      Favorite.push(params)
    }
    setFavorites([...Favorite])
    
}


  return (
    <>
    <Header count={cart.length}/>
  <Routes>

   <Route path="/" element={<All Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/electronics" element={<Electronics Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/jewelery" element={<Jewelery Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/menclothing" element={<MensClothing Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/womenclothing" element={<WomensClothing Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/favorites" element={<Favourite Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/login" element={<Login/>} ></Route>
   <Route path="/signup" element={<Signup/>} ></Route>
   <Route path="/signup" element={<Productdetails/>} ></Route>
   
</Routes>

    </>
  );
}


export default App;
