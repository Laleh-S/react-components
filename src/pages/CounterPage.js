
//! ①  
// I we put our cursor to the right hand side of the zero inside our input box and then press delete, we get "NAN". That is what 
// happens when we try to call parseInt() and pass in an empty string. When we hit the delete key, we are attempting to set the 
// value of the input to be an empty string. We then call parseInt() on an empty string and we end up getting back "NAN". If we
// tried to add "NAN" to our count piece of state then count is also gonna turn into "NAN". We solve this by addin "|| 0" to the
// end of parseInt(). This means if we get back "NAN" that is a falsey value and instead of NAN we will asign zero to eventValue.

//! ② NOTE:
// Whenever we submit a form, the browser by default is going to try to submit the form to a backend server and we usually 
// never want that default behavior. To avoid this we call "event.preventDefault()"

//! useReducer:
// useReducer is an alternative to useState. useReducer is most useful whenever we have multiple pieces of state that are very 
// closely related to each other. It's also useful whenever we have some state where the future value of that state depends upon 
// the current state. Example: We have both these cases in "Countepage" component.
// In "useReducer", all states needed for the whole component are combined together and defined in a single object.

//! Reducer:
// First argument: called "state". It is going to be whatever the current state of our component is that is being maintained by
// that reducer.

// Second argument: by convention called "action". The value of "action" is whatever we passed into dispatch as a first argument 
// only. we call dispatch anytime we want to update our state.

//! What happens when we call dispatch() to update our state ??? 
// When we call dispatch(), React is going to find the "reducer" function that we defined and passed as a first argument inside 
// "useReducer". So whenever we call dispatch React will find the reducer function and run it. When reducer function is executed, 
// the first argument refered to as "state" is going to be whatever the current state of your component is that is being maintained 
// by that reducer. so in our case here is going to be an object with "count" and "valueToAdd". 
// Second argument: by convention is usually called "action". The value of "action" is going to be whatever we passed into dispatch.
// When you call dispatch, you can pass in no arguments, If we provide no argument, then the "action" is gonna be undefined. 
// If we ever want to pass something into "dispatch" we have to always pass it in as the first argument otherwise 
// is completely ignored.

//! IMPORTANT NOTE about updating our state inside an "eventHandler":
// Whenever we want to update our states. We're going to "dispatch()" an object that has a "type" that is gonna be a string, and if
// we need to communicate any data along, we're going to place it in the "payload" property.

//! Modifying states 
// When we want to modify state, we will call dispatch and ALWAYS pass in an "action" object.
// The "action" object will always have a "type" that is a string. This tells the "reducer" what state update it needs to make.
// If we need to comunicate some data to the "reducer", it will be placed on the "playload" property of the action object.

//! IMMER:
// Immer is a library that allows us to change how we write our reducers. It allows us to write out codes that directly modifies 
// our state object. Normally this would be a huge problem. We normally absolutely do not do this whatsoever. But the Immer Library 
// is going to allow us to break that rule and directly modify state.
// We no longer need to create a new object and use "...state" to copy paste all the values from the current state.

//! REDUCER VS IMMER
// In a normal "reducer", we do not directly change our state. We use "...state" and copy and paste all the properties into a new 
// object then modify that object. Inside of our reducer, we absolutely always must return the new value that we want to use for our 
// state.

// When using "immer" however, we can now directly modify state without using of "...state" and copy and pasting. Also when using 
// immer we no longer have to return a value from the reducer function. It is not required and it is not being used if we did return.
// Instead, immer is going to watch for whatever changes you make to that state object. And it's going to automatically take care
// of creating a new state object for you and then passing that back into the world of react. However, we have to add in a return 
// statement in each of our cases of a switch statement, because otherwise switch statements work in a kind of undesirable fashion, 
// kind of. It's kind of debatable whether we want them to work like this or not.

import { produce } from "immer"; // after importing produce, we then wrap our reducer function in produce().
import { useReducer } from "react";
import Button from "../components/Button"
import Panel from "../components/Panel"

// Prevents typos and error will be thrown if we made a typo. All caps is a comunity convention indicating these are action types.
const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

// Whatever we return insie reducer will be our new state. if we return nothing, then our state will be undefined.
// to update our state, create and obj and copy paste all the keys and values using ...state then update everyting inside the obj
const reducer = (state, action) => {
    switch (action.type) { 
        case INCREMENT_COUNT: // if action.type is === IINCREMENT_COUNT then run the following code
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case ADD_VALUE_TO_COUNT: // if action.type is === SET_VALUE_TO_ADD then run the following code 
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0; // reset valueToAdd back to 0
            return;
        case SET_VALUE_TO_ADD: // if action.type is === SET_VALUE_TO_ADD then run the following code 
            state.valueToAdd = action.payload
            return;
        default: 
            return;  
    };
};


function CounterPage ({ initialCount }) {
    // if we add any argument to "dispatch" it will show up as a second argument in "reducer".
    const [state, dispatch] = useReducer(produce(reducer), { // <- we add "reducer" function as our first argument.
        count: initialCount, // initial value for count
        valueToAdd: 0 // initial value for valueToAdd
    });
    console.log(state)

    // ☵☵☵☵☵☵☵ INCREMENT ☵☵☵☵☵☵☵
    // ☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵
    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });
    };

    // ☵☵☵☵☵☵☵ DECREMENT ☵☵☵☵☵☵☵
    // ☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    };


    // ☵☵☵☵☵☵☵ Handle Change When user types inside input ☵☵☵☵☵☵☵
    // ☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵
    // Whenever the "handleChange" is called it is called with an "event" object.
    // "event.target.value" will tell us what the current value or whatever a user just typed into that input is.
    // Turn our event into an integer by wrapping it with parseInt(), for decimal use parseFloat()
    const handleChange = (event) => {
        const eventValue = parseInt(event.target.value) || 0 ;  //! ① 
        // Whenever user types inside the input, we need to change our state.
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: eventValue
        });
    };


    // ☵☵☵☵☵☵☵ Form Submition event handler ☵☵☵☵☵☵☵
    // ☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch ({
            type: ADD_VALUE_TO_COUNT, 
        });
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}> Increment </Button>
                <Button onClick={decrement}> Decrement </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Value to add</label>
                {/* type="number" -> makes sure the user can only type numbers into the input */}
                <input 
                    value={state.valueToAdd || ""} // Means dont use the default 0 value of our state and use "" instead.
                    onChange={handleChange}
                    type="number" // <- Make sure that a user can only type numbers into this input.
                    className="p-1 m-3 bg-gray-50 border border-gray-300" 
                />
                <Button> Add up </Button>
            </form>
        </Panel>
    );
};

export default CounterPage;





