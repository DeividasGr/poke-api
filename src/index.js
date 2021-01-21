import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector('#root')
);
