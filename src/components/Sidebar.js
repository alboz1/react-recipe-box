import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <h3>Add a new recipe</h3>
                <button className="close-btn" onClick={this.props.handleClose}>&times;</button>
                <form>
                    <input type="text" placeholder="Recipe Name" />
                    <textarea rows="8" placeholder="Enter Ingredients"></textarea>
                    <input type="submit" value="Add" />
                </form>
            </aside>
        );
    }
}

export default Sidebar;