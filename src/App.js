import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MealList from '../src/components/MealList';
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import NewMealForm from "../src/components/NewMealForm";
import MealDetail from "../src/components/MealDetail";
import NotFound from "../src/components/NotFound";
import './App.css'
import "../src/components/Navbar.css";

const mealsAPI = "http://localhost:3000/meals/";


function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals/")
     .then(res => res.json())
     .then(data => setMeals(data))
  }, []);

  async function addMeal(meal) {
    const res = await fetch(mealsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
    });
    const data = await res.json();
    setMeals([...meals, data]);
    return data;
  }

  function handleCardClick(meal) {
    // console.log("Meal Name: ",Meal.name);
  }

  return (
    <div className="appContainer">
       <div className="appContentContainer">
        <Router>
          <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/idMeal" element={<MealDetail />} />
          <Route path="/create" element={<NewMealForm addMeal={addMeal}/>} />
          <Route path="/meals" element={<MealList meals={meals} handleCardClick={handleCardClick} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home meals={meals} />} />
          </Routes>
        </Router>
    </div>
    </div>
  )
}

export default App