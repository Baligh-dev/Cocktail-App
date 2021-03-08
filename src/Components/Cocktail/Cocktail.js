import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./Cocktail.css";

const Cocktail = ({ match, history }) => {
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    const secondUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.idDrink}`;
    // axios.get(url).then((response) => setCocktail(response.data));
    axios.get(secondUrl).then((response) => setCocktail(response.data));
  }, [match.params.idDrink]);

  const items = [];
  if (cocktail && cocktail.drinks) {
    Object.values(cocktail.drinks[0]).forEach((val, i) =>
      items.push(
        <p key={i} className="detailsOfDetails">
          {val}
        </p>
      )
    );
  }

  return (
    <div className="details">
      <p>{items}</p>
      <div>
        <Button variant="info" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Cocktail;
