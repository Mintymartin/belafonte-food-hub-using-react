import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons';
import NotFound from "./NotFound"
import "../styles/MealDetail.css";

const mealAPI = "http://localhost:3000/meals/";

function MealDetail() {
    const [meal, setMeal] = useState({});
    const match = useParams();

    useEffect(() => {
    fetch(`${mealAPI}${match.idMeal}`)
        .then(res => res.json())
        .then(data => setMeal(data))
    }, []);

    function renderDetails() {
        if (Object.keys(meal).length !== 0) {
            return (
                <div className="mealDetailContainer">
                    <div className="detail-summary">
                        <div className="detailImage">
                            <Image src={meal.meallink}/>
                        </div>
                        <h1 className="mealDetailName">{meal.strMeal}</h1>
                    </div>
                    <div className="meal-info">
                        <h3 className="bold">Ingredients</h3>
                        <div className="ingredientsList">
                            {meal.description.map(ing => {
                                return (
                                    <div key={ing.strMeal} className="listItem" >
                                        <PlusCircleFill/>
                                        {` ${!ing.strSource? "" : ing.strSource} 
                                        ${!ing.strMeal ? "" : ing.strMeal}`}
                                    </div>
                                )}
                            )}
                        </div>

                        <h3 className="bold">Instructions</h3>
                        <div className="ingredientsList">
                            {meal.description.map(step => {
                                return (
                                    <div key={step} className="listItem" >
                                        <PlusCircleFill/>
                                        {` ${!step ? "" : step}`}
                                    </div>
                                )}
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <NotFound />
        }
    }
    
    return (
        renderDetails()
    )
}

export default MealDetail


