import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({meal, handleToAdd}) => {

    const {strMealThumb, strMeal, strCategory, strYoutube, idMeal} =meal
    return (
        <div className='meal'>
            <div>
            <img src={strMealThumb} alt="" />
            </div>
            <h3>{strMeal}</h3>
            <p>{strCategory}</p>
            <button onClick={()=>handleToAdd(meal)}>add</button>
            <Link to={`/product/${idMeal}`}><button>Show Detail</button></Link>
        </div>
    );
};

export default Meal;