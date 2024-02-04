// src/reducers.js
const initialState = {
    counter: 0,
    toggle:false,
    scroll:""
  };
  
  const rootReducer = (state = initialState, action) => {
    console.log(action,"action")
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
        case 'scroll':
        return { ...state, scroll:action.payload };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
        case 'Toggle':
            return { ...state, toggle:action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  