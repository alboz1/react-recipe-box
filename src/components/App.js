import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Recipe from './Recipe';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
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

    deleteRecipe(e) {
        const recipeArr = JSON.parse(localStorage.getItem('recipes'));
        const recipeName = e.target.parentNode.parentNode.childNodes[0].textContent;

        const newRecipeArr = recipeArr.filter(recipe => {
            return recipe.name !== recipeName;
        });

        localStorage.setItem('recipes', JSON.stringify(newRecipeArr));
        this.setState({
            recipes: newRecipeArr
        });
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
                            this.state.recipes.map((recipe, index) => {
                                return <Recipe key={index} name={recipe.name} handleClick={(e) => this.deleteRecipe(e)} />
                            })
                        }
                    </main>
                </div>
            </div>
        );
    }
}

export default App;