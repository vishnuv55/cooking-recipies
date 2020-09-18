import React from "react";
import "../SCSS/form.scss";

const Form = ({ search, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="search">
            <input
                type="text"
                name="search"
                value={search}
                onChange={onChange}
                autoComplete="off"
                placeholder="Enter the ingredient"
                className="search__input"
            />
            <button className="search__btn" type="submit">
                search
            </button>
        </form>
    );
};

export default Form;
