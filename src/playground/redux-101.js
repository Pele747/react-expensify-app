import { createStore } from 'redux';

const add = ({a, b}) => {
    return a + b;
};

// console.log(add({a: 1, b: 12}));


// ACTION CREATORS
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
        // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: "DECREMENT",
        decrementBy
    };
};

const reesetCount = () => {
    return {
        type: "RESET"
    }
};

const setCount = ({count} = {}) => {
    return {
        type: "SET",
        count
    };
};

// REDUCERS

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            };
        default:
          return state;
    }
};

const store = createStore(countReducer);


// SUBSCRIBE
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());   
});

// DISPATCH ACTIONS

store.dispatch(incrementCount());

// store.dispatch({ type: "INCREMENT", incrementBy: 5 });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(reesetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({ count: 101 }));

// store.dispatch({ type: "DECREMENT" });


