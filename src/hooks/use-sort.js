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

import { useState } from "react";

function useSort ({ data, config }) {
    const [sortByOrder, setSortByOrder] = useState(null);
    const [sortByHeader, setSortByHeader] = useState(null);

    const sortColumnLabel = (label) => { 
        if (sortByHeader && label !== sortByHeader) { // if by one column and label is not equal to sortByHeader,
            setSortByOrder("asc"); // then we are going to "setSortByOrder" to ascenting and
            setSortByHeader(label); // set sortByHeader to the new label, the one that the user just clicked on.
            return; // then we return here and won't go through any of the other checks down below.
        }

        if(sortByOrder === null) { // if null ?
            setSortByOrder("asc"); // we want to setSortOrder to be ascending
            setSortByHeader(label);
        }else if (sortByOrder === "asc"){  // if accending ?
            setSortByOrder("desc"); // we want to setSortOrder to be descending
            setSortByHeader(label);
        } else if (sortByOrder === "desc"){ // if descending ?
            setSortByOrder(null); // we want to setSortOrder to be descending
            setSortByHeader(null)
        }
    };

        //* IMPORTANT:
    // 1- Only sort data if sortByOrder && sortByHeader are not null. Means we should display our data in an unsorted order.
    // 2- If not null, make a copy of the "data" prop
    // 3- Find the correct sortValue function and use it for sorting
    
    let sortedData = data; // by default "sortedData" will be our default "date" prop
    if (sortByOrder && sortByHeader) { // if "sortByOrder" and "sortByHeader" are not null, means we need to do the sorting operation.
        // To find a correct sortValue going to do find operation on config and for everyone of those columns obj
        // we are going to find a column obj with a lable that === to sortByHeader
        const { sortValue } = config.find ((column) => column.label === sortByHeader);
          //  update our "sortedDate" variable with "...data". going to make a new array and copy all the elements from data into it.
          // Now we can modify the new array insted of modyfing the prop.
            sortedData = [...data].sort((a, b) => {
                const valueA = sortValue(a);
                const valueB = sortValue(b);

                const reverseOrder = sortByOrder === "asc" ? 1 : -1;
                if (typeof valueA === "string") {
                    return valueA.localeCompare(valueB) * reverseOrder
                } else {
                    return (valueA - valueB) * reverseOrder;
                }
            });  
        } 
    //* ---- END ----
        return {
            sortByHeader,
            sortByOrder,
            sortedData,
            sortColumnLabel
        };
};

export default useSort;