import React, {Component} from 'react';

class RecipeDetails extends Component {
    render() {
        return (
            <div>
                <h1>Recipe Details</h1>
                <button onClick={this.props.handleClose}>Close</button>
            </div>
        );
    }
}

export default RecipeDetails;