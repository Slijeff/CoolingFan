import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducer/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
