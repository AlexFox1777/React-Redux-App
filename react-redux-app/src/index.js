import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
//Thunk
import thunk from 'redux-thunk';
//Reducers
import { randomResultReducer} from './reducers';

const store = createStore(randomResultReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
