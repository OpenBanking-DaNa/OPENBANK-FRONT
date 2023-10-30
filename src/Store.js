import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Modules/AuthSlice';


//새로고침해도 state 값이 사라지지 않도록, localstorage에 reducer를 저장
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: persistedState, // Set initial state from localStorage
    middleware: [thunkMiddleware]
});

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;