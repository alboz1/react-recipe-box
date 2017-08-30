import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
            openRecipe: false,
            recipes: []
        };
    }

    componentDidMount() {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        this.setState({
            recipes: recipes
        });
    }

    openSidebar() {
        this.setState({isOpen: true});
    }

    closeSidebar() {
        this.setState({isOpen: false});
    }

    submitRecipe(e) {
        e.preventDefault();

        const recipeName = this.name;
        const ingrediends = this.ingredients;
        const newRecipesArr = Array.from(this.state.recipes);

        const newRecipe = {
            name: recipeName.value,
            ingrediends: ingrediends.value.split(',')
        };
        newRecipesArr.push(newRecipe);

        localStorage.setItem('recipes', JSON.stringify(newRecipesArr));
        this.setState({
            recipes: newRecipesArr
        });

        recipeName.value = '';
        ingrediends.value = '';
    }

    deleteRecipe(recipeName) {
        const recipeArr = JSON.parse(localStorage.getItem('recipes'));

        const newRecipeArr = recipeArr.filter(recipe => {
            return recipe.name !== recipeName;
        });

        localStorage.setItem('recipes', JSON.stringify(newRecipeArr));
        this.setState({
            recipes: newRecipeArr
        });
    }

    openRecipe() {
        this.setState({openRecipe: true});
    }

    closeRecipe() {
        this.setState({openRecipe: false});
    }

    render() {
        return (
            <div className="outer-wrapper">
                <div className={this.state.isOpen ? 'container toggled' : 'container'}>
                    <Sidebar
                        handleClose={() => this.closeSidebar()}
                        recipeNameInput={ref => this.name = ref}
                        ingredientsInput={ref => this.ingredients = ref}
                        handleSubmit={(e) => this.submitRecipe(e)}
                    />
                    <header className="main-header">
                        <button className="btn new-recipe-btn" onClick={() => this.openSidebar()} >New Recipe</button>
                        <h1 className="title"><span>RECIPE</span> BOX</h1>
                    </header>

                    <main>
                        {
                            (function() {
                                if (this.state.openRecipe) {
                                    return <RecipeDetails
                                        handleClose={() => this.closeRecipe()}
                                    />
                                } else {
                                    return this.state.recipes.map((recipe, index) => {
                                        return <Recipe
                                            key={index}
                                            name={recipe.name}
                                            handleDelete={() => this.deleteRecipe(recipe.name)}
                                            handleOpen={() => this.openRecipe(recipe.name)}
                                        />
                                    })

                                }
                            }.bind(this))()
                        }
                    </main>
                </div>
            </div>
        );
    }
}

export default App;