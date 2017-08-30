import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <div className="recipe-wrapper">
                <span className="name">{this.props.name}</span>
                <div className="btns-wrapper">
                    <button className="btn details-btn" onClick={this.props.handleOpen}>View Recipe</button>
                    <button className="btn delete-btn" onClick={this.props.handleDelete}>&times;</button>
                </div>
            </div>
        );
    }
}

export default Recipe;