import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import CocktailCard from "../CocktailCard";
import "./Home.css";

const Home = ({ filter }) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`;
    axios.get(url).then((response) => {
      setCocktails(response.data);
      setIsLoading(false);
    });
  }, [filter]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mainView">
          {cocktails &&
            cocktails.drinks &&
            cocktails.drinks.map((cocktail, i) => (
              <div className="eachCard">
                <Link to={`/drinks/${cocktail.idDrink}`} key={i}>
                  <CocktailCard key={cocktail.idDrink} details={cocktail} />
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
