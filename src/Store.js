import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Modules/AuthSlice';
import OpenBankingSlice from './Modules/OpenBankingSlice';
import CardSlice from './Modules/CardSlice';


//새로고침해도 state 값이 사라지지 않도록, localstorage에 reducer를 저장
// const persistedState = localStorage.getItem('reduxState')
const persistedState = sessionStorage.getItem('reduxState')
    ? JSON.parse(sessionStorage.getItem('reduxState'))
    : {};

const store = configureStore({
    reducer: {
        auth: authReducer,
        OB: OpenBankingSlice,
        CardInfo: CardSlice,
    },
    preloadedState: persistedState, // Set initial state from localStorage
    middleware: [thunkMiddleware]
});

store.subscribe(() => {
    sessionStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;