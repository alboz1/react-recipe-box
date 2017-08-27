import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <h3>Add a new recipe</h3>

                <form>
                    <input type="text" placeholder="Recipe Name" />
                    <textarea rows="4" placeholder="Enter Ingredients"></textarea>
                    <input type="submit" value="Add" />
                </form>
            </aside>
        );
    }
}

export default Sidebar;