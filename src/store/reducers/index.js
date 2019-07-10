import { combineReducers } from 'redux';
import shoppingData from '../../data/products_data';
import { SET_DATA_BY_CATEGORY_PENDING, SET_DATA_BY_CATEGORY_FULFILLED, SET_DATA_BY_CATEGORY_REJECTED } from '../action-types';

const initialDataState = {
    shoppingData: shoppingData
};

const initialMetaState = {
    SET_DATA_BY_CATEGORY_STATUS: 'DEFAULT'
};

const getMetaReducer = (state = initialMetaState, action) => {
    switch (action.type) {
        case 'SET_DATA_BY_CATEGORY_PENDING':
            return { ...state, SET_DATA_BY_CATEGORY_STATUS: 'PENDING' }
        case 'SET_DATA_BY_CATEGORY_FULFILLED':
            return { ...state, SET_DATA_BY_CATEGORY_STATUS: 'FULFILLED' }
        case 'SET_DATA_BY_CATEGORY_REJECTED':
            return { ...state, SET_DATA_BY_CATEGORY_STATUS: 'REJECTED' }
        default:
            return state;
    }
};

const getDataReducer = (state = initialDataState, action) => {
    switch (action.type) {
        case 'SET_DATA_BY_CATEGORY':
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }

}


export default combineReducers({
    data: getDataReducer,
    meta: getMetaReducer
});


