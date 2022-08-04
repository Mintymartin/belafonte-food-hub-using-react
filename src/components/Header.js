import React from 'react'
import { Navbar, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/NewMealForm.css"



function Header() {
  return (
    <Navbar className="header">
        <Container>
            <Link to={"/"}>
                <Navbar.Brand>Belafonooote-Food-Hub
</Navbar.Brand>
            </Link>

            <Link to={"/meals"}>
                <Navbar.Text>Meals</Navbar.Text>
            </Link>

            <Link to={"/create"}>
                <Button className="btn-custom" > Add Meal </Button>
            </Link>
        </Container>
    </Navbar>
  )
}

export default Header