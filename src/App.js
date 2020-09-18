import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
import Form from "./components/form";
import "./SCSS/App.scss";

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
                "x-rapidapi-key":
                    "8750813670msh7a45263a61ba284p1f704fjsn55e012f4d785",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return setRecipes(data.hits);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [query]);

    const updateSearch = (event) => {
        setSearch(event.target.value);
    };

    const updateQuery = (event) => {
        event.preventDefault();
        setQuery(search);
    };

    return (
        <div>
            <h2 className="heading">Recipies Online</h2>
            <Form
                search={search}
                onChange={updateSearch}
                onSubmit={updateQuery}
            />
            <div className="recipeContainer">
                {recipes.map((recipe) => (
                    <Recipe
                        key={recipe.recipe.calories}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        url={recipe.recipe.url}
                        ingredients={recipe.recipe.ingredientLines}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
