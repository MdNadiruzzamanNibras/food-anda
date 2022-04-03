import React, { useEffect, useState } from 'react';
import Order from '../../Order/Order';
import Meal from '../Meal/Meal';
import './Resturant.css'
const Resturant = () => {
    const[searchText, setSearchText]= useState('')
    const[meals, setMeals] =useState([]);
    useEffect(()=>
       { const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
       console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then(data=> setMeals(data.meals))
    },[searchText])
    
    const searchBar =e =>{
        setSearchText(e.target.value)
    }
    const [orders, setOrders]= useState([])
    const handleToAdd = (meal)=>{
        const newOrder = [...orders, meal]
      setOrders(newOrder)
      console.log(newOrder)
    }

    return (
        <div>
            <h2>Find Your Food</h2>
            <input onChange={searchBar} type="text" />
           <br />
           <h3>{meals.length}</h3>
            <div className='meal-container'>
            {
                meals.map(meal=> <Meal key={meal.id} meal={meal}
                handleToAdd={handleToAdd}></Meal> )
            }
            </div>
            <div className='hideDiv'>
               {
                   orders.map(order=><Order order={order}></Order>)
               }

            </div>
        </div>
    );
};

export default Resturant;