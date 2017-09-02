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

    saveRecipe() {
        const recipes = JSON.parse(localStorage.getItem('recipes'));
        const ingredients = this.ingredientInput.value.split(',');
        
        recipes.forEach(recipe => {
            if (recipe.name === this.props.recipe.name) {
                recipe.name =  this.nameInput.value;
                recipe.ingredients = ingredients;

                this.props.recipe.name = recipe.name;
                this.props.recipe.ingredients = recipe.ingredients;
            }
        });

        localStorage.setItem('recipes', JSON.stringify(recipes));
        this.setState({editing: false});
    }

    render() {
        const editingContainer = (
            <div className="editing-wrapper">
                <label>Name: </label>
                <input type="text" defaultValue={this.props.recipe.name} ref={ref => this.nameInput = ref} />
                <label>Ingredients: </label>
                <textarea defaultValue={this.props.recipe.ingredients} ref={ref => this.ingredientInput = ref}></textarea>
                <button className="btn save" onClick={() => this.saveRecipe()}>Save</button>
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
                <h1>{this.state.editing ? 'Edit Recipe' : 'Recipe Details'}</h1>
                <button className="btn close-btn" onClick={this.props.handleClose}>&times;</button>
                {this.state.editing ? editingContainer : currentContainer}
            </div>
        );
    }
}

export default RecipeDetails;