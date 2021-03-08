import React from "react";
import { Card } from "react-bootstrap";

const CocktailCard = ({ details }) => {
  return (
    <Card>
      <Card.Img variant="top" src={details.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{details.strDrink}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CocktailCard;
