import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MealCard({meal, handleCardClick}) {
    const {strMeal, strArea, description, meallink} = meal;
