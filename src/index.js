import React from 'react';
import ReactDOM from 'react-dom/client';
import logger from "redux-logger"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducer";
import routes from "./routes";
import {BrowserRouter as Router}from "react-router-dom"
import "./index.css"
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

localStorage.setItem("logined",false);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className="main">
        <Provider store={store}>
            <Router routes={routes}>
                {routes}
            </Router>
        </Provider>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

