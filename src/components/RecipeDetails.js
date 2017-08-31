import React, {Component} from 'react';

class RecipeDetails extends Component {
    componentDidMount() {
        this.detailsWrapper.classList.add('active');
    }

    render() {
        return (
            <div className="details-wrapper" ref={ref => this.detailsWrapper = ref}>
                <h1>Recipe Details</h1>
                <h3>{this.props.recipe.name}</h3>
                <ul>
                    {
                        this.props.recipe.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
                        })
                    }
                </ul>
                <button onClick={this.props.handleClose}>Close</button>
            </div>
        );
    }
}

export default RecipeDetails;