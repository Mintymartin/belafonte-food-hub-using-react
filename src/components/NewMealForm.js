import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles/NewMealForm.css"


function NewMealForm({ addMeal }) {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [mealFormData, setMealFormData] = useState({
    strMeal: "",
    description: "",
    ingredients: "",
    cookTime: "",
    strInstructions: "",
    meallink: "",
  });
  
  useEffect(() => {
    return () => {}
  }, []);

  async function handleSubmit(e) {
    const form = e.currentTarget;
    if(form.checkValidity() === true) {
      e.preventDefault();
      const newMeal = await addMeal (createMealObj());
      history.push(`/meals/${newMeal.idMeal}`);
      reset();
    }
    setValidated(true);
  }

  function createMealObj() {
    return {
      strMeal: mealFormData.strMeal,
      description: mealFormData.description,
      ingredients: generateIngredientList(mealFormData.ingredients),
      cookTime: mealFormData.cookTime,
      strInstructions: stringListToArray(mealFormData.strInstructions),
      meallink: mealFormData.meallink,
    }
  }

  function stringListToArray(str) {
    return str.split(/\r?\n/).filter(line => line.trim() !== "");
  }

  function generateIngredientList(list) {
     const result = list.split(/\r?\n/).filter(line => line.trim() !== "");
     const newArray = [];
     result.map(element => newArray.push({strMeal: element}))
     return newArray;
  }

  function reset() {
    setMealFormData({
      strMeal: "",
      description: "",
      ingredients: [],
      cookTime: "",
      strInstructions: [],
      meallink: "",
    });
  }

  return (
    <Form className="formContainer" noValidate validated={validated} onSubmit={handleSubmit}>

      {/* ##### Title ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="formLabel bold">Title</Form.Label>
        <Form.Control 
          required
          type="text" 
          placeholder="Write a title for your meal. Something catchy..." 
          value={mealFormData.strMeal}
          onChange={(e) => setMealFormData({ ...mealFormData, strMeal: e.target.value })}
        />
      </Form.Group>

      {/* ##### Description ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Description</Form.Label>
        <Form.Control 
          required
          as="textarea" 
          rows={3} 
          placeholder="Write a short description..."
          value={mealFormData.description}
          onChange={(e) => setMealFormData({ ...mealFormData, description: e.target.value })}
        />
      </Form.Group>

      {/* ##### Ingredients ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Ingredients</Form.Label>
        <Form.Control 
          required
          as="textarea"
          rows={4} 
          placeholder="Lentils..."
          value={mealFormData.ingredients}
          onChange={(e) => setMealFormData({ ...mealFormData, ingredients: e.target.value })}
        />
      </Form.Group>


      {/* ##### Cook Time ##### */}
      <Form.Label className="formLabel bold">Cook Time</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          required
          placeholder="45"
          type="number"
          value={mealFormData.cookTime}
          onChange={(e) => setMealFormData({ ...mealFormData, cookTime: e.target.value })}
        />
        <InputGroup.Text id="basic-addon2">minutes</InputGroup.Text>
      </InputGroup>

      {/* ##### strInstructions ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Instructions</Form.Label>
        <Form.Control 
          required
          as="textarea" 
          rows={4} 
          placeholder="Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain,..."
          value={mealFormData.strInstructions}
          onChange={(e) => setMealFormData({ ...mealFormData, strInstructions: e.target.value })}
        />
      </Form.Group>

      {/* ##### Image upload ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Image</Form.Label>
        <Form.Control 
          required
          type="text" 
          placeholder="Enter URL for meal image..."
          value={mealFormData.meallink}
          onChange={(e) => setMealFormData({ ...mealFormData, meallink: e.target.value })}
        />
      </Form.Group>

      <Button type="submit" className="btn-custom btn">
        Submit
      </Button>
    </Form>
  );
}

export default NewMealForm;