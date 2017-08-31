import React from 'react';

const Recipe = props => {
    return (
        <div className="recipe">
            <span className="name">{props.name}</span>
            <div className="btns-wrapper">
                <button className="btn details-btn" onClick={props.handleOpen}>View Recipe</button>
                <button className="btn delete-btn" onClick={props.handleDelete}>&times;</button>
            </div>
        </div>
    );
}

export default Recipe;