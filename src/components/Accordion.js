// ① Whenever we create a list of element to show on the page, the top level element must be given a key prop. 
// usually using the object's id as a key, because we usually pulling data out of a database and these object come
// from outside API or any source it's going to have an id that we can use as our unique identifier.

// ② JavaScript boolean expressions:
// || gives back the first value that is truthy. 
// && gives back the first falsy if there is one, or the last truthy value.
// Reminder: React does not print booleans, nulls, undefined.
// If isExpanded is true, we get back the last truthy value which will be <div>{flower.label}</div> and we display the content.
// If isExpanded is false, we get back first falsy value which is going to be "isExpanded" which is false and false will not be 
// rendered on the page by React 

// ③ To avoid cluttering up our mapping function, we define our event handler outside our mapping function. 
// How to define our event handler outside mapping function and still access our ”index”.
// We create an arrow function inside onCick, whenever the arrow function runs we run handleClick and pass in the ”index”.
// Then Inside handleClick, we receive that ”index” as a parameter. Although it is the same value but technically it is a different 
// variable so I name it newIndex to avoid confusion. Every time we run our map function, we create a completely different arrow function.
//  when the arrow function get executed, it will call handleClick and pass in the current value of ”index” 


// ④ By default our state value is -1 which means none of our panels are expanded when our component first displayed on the page.
// To allow users to collapse all panels, we create a logic inside our handleClick function.compare the value of newIndex to 
// expectedIndex, if they are identical the user must have clicked on the element that already open.
// so we can update the setExpandedIndex to go back to being -1 again.

// ⑤ Functional update technique for updating states: ONLY used when the new value of our state depends on the old value.
// we could run into a bug where we are trying to deal with the outdated version of our state. 
// IMPORTANT: 
// technically only an option if the state update happens very quickly.
// I's okay even if we used the simple version of updating states.



import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

function Accordion({ flowers }){ // Recieving flowers function as a prop.
    const [expandedIndex, setExpandedIndex] = useState(-1); // Note ④

    const handleClick = (newIndex) => { 
        console.log("OLD version of expandedIndex", expandedIndex)
        
        setExpandedIndex((currentExpandedIndex) => { // here we changed expandedIndex to currentExpandedIndex to keep it up to date.
            console.log("UP TO DATE version of expandedIndex", currentExpandedIndex)
            if (currentExpandedIndex === newIndex){
        
                return -1;  // Here we have to return it for this function instead of calling setExpandedIndex(-1) when updating our state.
            }else {
                return newIndex;
            }
        });
        
        // ----- Simple version of updating our state if we didnt depend on the old value: ---- // Note ④
        
        // if(expandedIndex === newIndex){ 
        //     setExpandedIndex(-1);
        // }else {
        //     setExpandedIndex(newIndex)
        // }
        
    };
    
    const renderedFlowers = flowers.map((flower, index) => { // Using map function to display our list of flowers on the page.
        const isExpanded = index === expandedIndex;
        
        const icon = (
        <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />} 
        </span>
        );

        return (
            <div key={flower.id}> {/* Note ① */} 
                <div 
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                    onClick={()=> handleClick(index)} // Note ③ 
                >
                    {flower.label}
                    {icon}
                </div> 
                {isExpanded && <div className="border-b p-5 ">{flower.content}</div> } {/* Note ② */} 
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">
            {renderedFlowers}
        </div>
    )
}

export default Accordion;