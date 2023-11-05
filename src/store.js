// store.js
import { createStore, combineReducers } from 'redux';

const initialState = { count: 0 };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
