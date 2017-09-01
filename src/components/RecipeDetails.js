import React, {Component} from 'react';

class RecipeDetails extends Component {
    constructor() {
        super();

        this.state = {
            editing: false
        };
    }

    componentDidMount() {
        this.detailsWrapper.classList.add('active');
    }

    editRecipe() {
        this.setState({editing: true});
    }

    render() {
        const editingContainer = (
            <div className="editing-wrapper">
                <input type="text" defaultValue={this.props.recipe.name} ref={ref => this.nameInput = ref} />
                <textarea defaultValue={this.props.recipe.ingredients} ref={ref => this.ingredientInput = ref}></textarea>
                <button className="btn save">Save</button>
            </div>
        );
        const currentContainer = (
            <div>
                <div className="flex-wrapper">
                    <h3>{this.props.recipe.name}</h3>
                    <button className="btn edit" onClick={() => this.editRecipe()}>Edit</button>
                </div>
                <ul>
                    <p>Ingredients:</p>
                    {
                        this.props.recipe.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
                        })
                    }
                </ul>
            </div>
        );
        return (
            <div className="details-wrapper" ref={ref => this.detailsWrapper = ref}>
                <h1>Recipe Details</h1>
                <button className="btn close-btn" onClick={this.props.handleClose}>&times;</button>
                {this.state.editing ? editingContainer : currentContainer}
            </div>
        );
    }
}

export default RecipeDetails;