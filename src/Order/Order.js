import React, { useEffect, useState } from 'react';
import './Order.css'
import {   BsYoutube } from 'react-icons/bs';

import { useParams } from 'react-router-dom';
const Order = () => {
    
    let {id} = useParams()
    const[meals, setMeals] =useState([]);
    useEffect(()=>
       { const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
       console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then(data=> setMeals(data.meals[0]))
    },[id])
    console.log(meals)
    const {strMealThumb, strMeal, strCategory, strYoutube, strInstructions} =meals || {}
    return (

        <div >
        
            <h2>This is Your Order</h2>
            <div className='order-container'>
            
            <div>
                <h3>{strMeal}</h3>
                <h5>{strCategory}</h5>
                <p>{strInstructions}</p>
                <button ><a className='order-btn' href={strYoutube}><BsYoutube></BsYoutube>  </a> </button>
                </div>
                <div>
                <img src={strMealThumb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Order;