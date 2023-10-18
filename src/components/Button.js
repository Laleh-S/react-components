
// ① When we provide a "true" value for primary, secondary, success, warning, danger it comes up as true. When we dont pass 
// a value it will come up as undefined. 
// To check this, we turn the "true" and "undefined" value into numbers, add them together and total must be more than 1 less than 2
// Number(true) -> output 1
// Number(!!undefined) -> output 0

// ② Tailwind text-white overrides other colors. The solution is to:
// Install tailwind-merge library then import it to the appropriate component.

// ③ ...rest means besides the ones listed here, get all the remaining properties such as 
    //onClick or onMouseOver or className and etc out of the props object and asign them to a variable called rest.


import className from "classnames"; // changing the classname variable name to "className" to avoid mistakes.
import { twMerge } from 'tailwind-merge';

function Button({ // The list of props:
    children, 
    primary, 
    secondary, 
    success, 
    warning,
    danger, 
    outline,
    rounded,
    ...rest // ③
}) {

    const classes = twMerge( // twMerge -> ②
        // className 1st argument is a string 2nd argument is an object.
        className(rest.className, "flex item-center px-3 py-1.5 border", { // rest.className -> is className="mb-5" from App.js
        "border-blur-500 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
    })
    );

    return(
        <div>
            <button {...rest} className={classes}>{children}</button>
        </div>
    );
};

// ◈◈◈◈◈◈◈◈◈◈ CUSTOM VALIDATOR ◈◈◈◈◈◈◈◈◈◈ 

Button.propTypes = {
    variationCheck: ({ primary, secondary, success, warning, danger }) => {
        const count = 
        Number(!!primary) + // ①
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);

        if (count > 1){
            return new Error('Only one primary, secondary, success, warning, danger can be true!');
        }
    },
};

export default Button;