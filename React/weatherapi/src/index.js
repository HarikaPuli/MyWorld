import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import {legacy_createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers/WeatherReducer';
const store = applyMiddleware(ReduxPromise)(legacy_createStore);
const root = ReactDOM.createRoot(document.getElementById('root'));
//7. here the root reducer is globally available in store  and can access any container and it'll re render again.
root.render(
   <Provider store={store(rootReducer,composeWithDevTools())}>  
    <App />
    </Provider>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
