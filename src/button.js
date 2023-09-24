
// ① When we provide a "true" value for primary, secondary, success, warning, danger it comes up as true. When we dont pass 
// a value it will come up as undefined. 
// To check this, we turn the "true" and "undefined" value into numbers, add them together and total must be more than 1 less than 2

// Number(true) -> output 1
// Number(!!undefined) -> output 0


import PropTypes from "prop-types";

function Button({ 
    children,
    primary, 
    secondary, 
    success, 
    warning,
    danger, 
    outline,
    rounded
}) {

    return(
        <div>
            <button>{children}</button>
            
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