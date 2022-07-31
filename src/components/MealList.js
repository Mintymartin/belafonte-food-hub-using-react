import React from "react";
import MealCard from "./MealCard";
import { Row } from "react-bootstrap";
import {Link} from "react-router-dom";

function MealList({meals, handleCardClick}) {
  return (
      <div className="MealListContainer">
        {meals.map((meal) => {
            return (
                <MealCard 
                    key={meal.idMeal} 
                    meal={meal} 
                    handleCardClick={handleCardClick} 
                />
            )
        })}
    </div>
  );
}

export default MealList;