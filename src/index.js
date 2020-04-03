import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import CreateTodo from './Containers/CreateTodo';
import MainReducer from './Reducers/MainReducer';
import Table from './Containers/Table';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
f)(createStore)(MainReducer)


ReactDOM.render(<Provider store = {store}>
  <App />
  <CreateTodo />
  <Table />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
