import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';   //creating store
import rootReducer from './reducers';                 //creating root reducer
const store = applyMiddleware(ReduxPromise)(createStore);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store(rootReducer)}>     
    <App></App>
  </Provider>
 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
