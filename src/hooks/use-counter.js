//! IMPORTANT: 
// STEPS FOR CREATING A CUSTOM HOOK:
// 1- Make a function called "useSomething"
// 2- Find all the non-JSX expresstions that refers to 1-2 piece of state and any line of code related to those states
// 3- Cut and paste them all inside the "useSomething" 
// 4- Find "not defined" errors in our component that caused by cut and pasting in the previuos step. to fix them follow step 5-7
// 5- In our hook, we return an object that contains the variable the component needs
// 6- In the component, we call our hook which is "useSomething". Destructure the properties the component needs
// 7- Find "not defined" errors in the hook. Pass the missing variables in as an arguments to the "useSomething" hook
// 8- Rename the "useSomething" hook to something meaningful 
// 9- Rename the return properties to something more descriptive 

import { useState, useEffect } from "react";

function useCounter(initialCount) {
    // Creates number state based on our initial value
    const [count, setCount] = useState(initialCount); 

    // Logs the value anytime it changes
    useEffect(() => {
        console.log(count)
    }, [count]);

    // Provides a way to change the above value
    const increment = () => { 
        setCount(count + 1); // anytime handleClick runs, we're going to increment our count piece of state,
    };
    return {
        count,
        increment,
    };
};

export default useCounter;