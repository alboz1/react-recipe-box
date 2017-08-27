import React, {Component} from 'react';
import Sidebar from './Sidebar';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    toggleSidebar() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div className={this.state.isOpen ? 'container toggled' : 'container'}>
                <Sidebar />
                <header className="main-header">
                    <button className="btn" onClick={() => this.toggleSidebar()} >New Recipe</button>
                    <h1 className="title"><span>RECIPE</span> BOX</h1>
                </header>
            </div>
        );
    }
}

export default App;