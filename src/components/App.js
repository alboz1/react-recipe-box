import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Recipe from './Recipe';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    openSidebar() {
        this.setState({isOpen: true});
    }

    closeSidebar() {
        this.setState({isOpen: false});
    }

    render() {
        return (
            <div className="outer-wrapper">
                <div className={this.state.isOpen ? 'container toggled' : 'container'}>
                    <Sidebar handleClose={() => this.closeSidebar()} />
                    <header className="main-header">
                        <button className="btn" onClick={() => this.openSidebar()} >New Recipe</button>
                        <h1 className="title"><span>RECIPE</span> BOX</h1>
                    </header>

                    <main>
                        <Recipe />
                        <Recipe />
                        <Recipe />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;