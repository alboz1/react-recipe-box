import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <div className="recipe-wrapper">
                <span className="name">Recipe Name</span>
                <button>View Recipe</button>
            </div>
        );
    }
}

export default Recipe;