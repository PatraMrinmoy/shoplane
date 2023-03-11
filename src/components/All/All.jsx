import './All.css';

import axios from "axios";
import ReactStars from "react-rating-stars-component";

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function All(props) {

  const{addToCart,addToFavorites,Favorite}=props
  const [All, setAll] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAll([...res.data]);
    });
  }, []);


  return (
    <div className="all_cards">
      {All.map((item) => {
       return(
        <>
        <div className='col-md-3 mb-4'>
        <div class="card h-100 text-center p-4" key={item.id} >
        <div>  
                    <svg onClick={()=>addToFavorites(item)} className="heart_img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${Favorite.includes(item)?'red':'currentColor'}`} class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                </div>

  <img src={item.image} class="card-img-top" alt={item.title} height="250px"/>
  <div class="card-body">
    <h5 class="card-title mb-0">{item.title.substring(0,12)}</h5>
    <ReactStars
                count={5}
                size={24}
                value={item.rating.rate}
                color2={"#ffd700"}
            
              />
    <p class="card-text lead fw-bold">${item.price}</p>
    <button onClick={()=>addToCart(item)} className="submit"> Add to cart</button>
    <hr/>
    
  </div>
</div>
        </div>
        
        </>
       )
      })}
    </div>
  );
    }


export default All;