import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'; REDUX TOOLKIT
import thunk from 'redux-thunk';
import { reducers } from './reducers';
// import fetchPosts from './reducers/posts';  REDUX TOOLKIT

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const store = configureStore({ REDUX TOOLKIT
//     reducer: {
//         posts: fetchPosts,
//     }
// });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
