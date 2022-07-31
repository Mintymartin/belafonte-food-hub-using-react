import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MealCard({meal, handleCardClick}) {
    const {strMeal, strArea, description, meallink} = meal;

    return (
        <Col>
        <Link to={`/meals/${meal.idMeal}`} >
            <Card
                border="light" 
                style={{ width: "20rem" }} 
                className="mealCard" 
                onClick={() => handleCardClick(meal)}
            >
                <Card.Img variant="top" src={meallink} />
                <Card.Body>
                    <Card.Title className="mealCardTitle">{strMeal}</Card.Title>
                    <h4 class="card-title">{strArea}</h4>
                    
                    <Card.Text className="italicize xs line-clamp3">
                        {description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Link>
        </Col>
    );
}

export default MealCard;
