import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './styles/index.sass';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
