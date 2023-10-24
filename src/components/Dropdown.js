
// ① We want to make sure the "renderedOptions div" is hidden by default and whenever the user clicks on the "select... div", we 
// toggle the visiblity of the "renderedOptions div" so we are going to either hide or show it.

// ② JavaScript boolean expressions:
// || gives back the first value that is truthy. 
// && gives back the first falsy if there is one, or the last truthy value.
// Reminder: React does not print booleans, nulls, undefined.
// hide/show the div based on the value of isOpen so we use the JS expresstion &&. 
// If isOpen is true, we are going to get back the "div" and it will be desplayed on the page.
// If it is false the entire expression evaluate to be false and nothing will display on the page.

// ③ To know what option user clicked on, rather than passing in our handler directly to onClick,
// we're going to instead put in a wrapped version of it. So we put and arrow function and 
// then whenever this arrow function gets called by the div, when the user clicks on it eventually,
// we're going to invoke handleOptionClick and pass in the option.

// ④ So we don't always want to show Select..., we only want to show it if the value prop is null.
// The value can be either an object or null. 

// ⑤ we need to make sure that when our dropdown component is about to be removed from the screen, we don't want to listen
// for the click event anymore because we don't need to worry about the dropdown. The dropdown is not gonna be visible.
// We don't have to worry about changing the IsOpen flag or anything like that. So inside our useEffect function we are  going 
// to return a cleanup function. So we return a function here. This will be called automatically whenever our
// dropdown component is about to be removed from the screen.

// ⑥ useRef allows a component to get a reference to a DOM element that it creates.
// 95% of the time used with DOM elements , but can hold a reference to any value.
// useRef IMPLEMENTATION:
// 1- Create a ref at the top of your component by calling "useRef"
// 2- Assign a ref to a JSX element as a prop called "ref"
// 3- Access that DOM element with "ref.current"

import { useState, useEffect, useRef } from "react"; // -> see above about useRef ⑥
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }){ // -> options will be an array of diffrent options objects. 
    const [isOpen, setIsOpen] = useState(false); // by default the dropdown will start off by being closed.

    const divEl = useRef(); // reference to a div ellement "divEl"

    useEffect(() => {
        const handler = (event) => {
            console.log(divEl.current)
            if (!divEl.current){
                return;
            }
            
            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
            
        };
        
        // Setting up our event handler on the entire document. So we're gonna watch for click events anywhere on the page.
        // Whenever click occurs, handler will run. We want to watch for clicks during the capture phase. So we add third argument "true".
        document.addEventListener("click", handler, true);

        return () => { // clean up function removes the eventlistener ⑤
            document.removeEventListener("click", handler);
        }; 
    }, []);

    // whenever user clicks on "select... div", we update open by calling setIsOpen and set it to opposit of !isOpen,
    // because, this is the sign that the user wants to close the dropdown after they clicked it for the second time.
    const handleClick = () => {
        setIsOpen(!isOpen); // set it to opposite of false 
    };

    // "handleOptionClik" is for whenever user clicks/selects any of the colour options we close the dropdown.
    const handleOptionClik = (optionEvent) => {
        // close the dropdown
        setIsOpen(false) // set it to default initial value of false which will close the dropdown.

        // what option did the user clicked on?
        onChange(optionEvent);
    };

    const renderedOptions = options.map((option) => {
        return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClik(option)} key={option.value} > {/* ③ */} 
            {option.label}
        </div>
        );
    });
    
    return (
        <div ref={divEl} className="w-48 relative">
            {/*  ①  */} 
            <Panel 
                className="flex justify-between items-center cursor-pointer" onClick={handleClick}> {/* -> This div is where the user clicks to open the dropdown */}  
                {/* If value is null is evaluated to be undefined so we only get the text "Select..." otherwise if 
                value is defined, then we're going to print out its labeled property which can be the string "Red" 
                and using || operator we will get the first truthy value, which would be Red.*/} 
                    {value?.label || "Select..."}
                    <GoChevronDown className="text-lg"/>
            </Panel> 

            {isOpen && <Panel className="absolute top-full border">{renderedOptions}</Panel>}   {/*  ②, ① */} 
        </div>
        
    );
};

export default Dropdown;



