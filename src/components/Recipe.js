import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <div className="recipe-wrapper">
                <span className="name">{this.props.name}</span>
                <button className="btn details-btn">View Recipe</button>
                <button className="btn delete-btn">&times;</button>
            </div>
        );
    }
}

export default Recipe;