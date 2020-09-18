import React from "react";

const Recipe = ({ title, image, url, ingredients }) => {
    return (
        <div className="recipe">
            <img className="recipe__image" src={image} alt={title} />
            <div className="recipe__content">
                <h2 className="recipe__content__title">{title}</h2>
                <ul className="recipe__content__list">
                    {ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recipe__content__link"
                >
                    More Details
                </a>
            </div>
        </div>
    );
};

export default Recipe;
