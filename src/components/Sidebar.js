import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <h3>Add a new recipe</h3>
                <button className="btn close-btn" onClick={this.props.handleClose}>&times;</button>

                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" placeholder="Recipe Name" ref={this.props.recipeNameInput} required/>
                    <textarea rows="8" placeholder="Enter Ingredients, seperated with comma" ref={this.props.ingredientsInput} required></textarea>
                    <input type="submit" value="Add" />
                </form>
            </aside>
        );
    }
}

export default Sidebar;