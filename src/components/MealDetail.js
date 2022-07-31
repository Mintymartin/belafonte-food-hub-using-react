import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons';
import NotFound from "./NotFound"
import "../styles/MealDetail.css";

const mealAPI = "/";

function MealDetail() {
    const [meal, setMeal] = useState({});
    const match = useParams();

    useEffect(() => {
    fetch(`${mealAPI}${match.idMeal}`)
        .then(res => res.json())
        .then(data => setMeal(data))
    }, []);
