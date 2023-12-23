
// current "sortByOrder" -> is going to modify or change how we update our state.
// current "sortByHeader" -> is going to keep track of what column we are currently sorting by.

import { useState } from "react";
import Table from "./Table";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";


function SortableTable (props) { // Note we are going to take the entier props object, so we dont put "props" in curly braces.
    const [sortByOrder, setSortByOrder] = useState(null);
    const [sortByHeader, setSortByHeader] = useState(null);
    
    const { config, data } = props;
    
    const handleClick = (label) => { 
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
    
    

    const updatedConfig = config.map((column) => { // column is a single config obj that we defined back inside TablePage.js
        if (!column.sortValue){ // if this column does not have a "sortValue" property then just return it.
            return column;
        } else { // but if it has "sortValue" propery, 
            return {
                ...column, // then we want to return a brand new object that has all the properties of the column object, 
                header: () => (
                    <th className="cursor-pointer hover:bg-gray-100" 
                        onClick={() => handleClick(column.label)}
                    >
                        <div className="flex item-center">
                            {getIcons(column.label, sortByHeader, sortByOrder)}
                            {column.label} 
                        </div>
                    </th> // as well as a header function to customise the header 
                ),
            }
        }
    }); 

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
    

    return (
        // We tell our table component to use "sortedDate" as our data  
        // We pass all the properties in the props object by using ... 
        <Table {...props} data={sortedData} config={updatedConfig} /> 
    );
};


// "column.label" -> is the column that we're trying to create the icons for
// "sortByHeader" -> is label of the column we're currently trying to sort our data by. 

// So inside of getIcons: 
// Ckeck if "label" and "sortByHeader" are not equal?, which means that we want to show both of the up and down icons,
// because we're currently not sorting by this column. 
// if "column.label" and "sortByHeader" are equal?, then we're check the "sortByOrder" and if "sortByOrder" is null, means we are
// going to show both icons. if "sortByOrder" is ascending, we're show only the up icon, and if it is descending, we're gonna show 
// the down icon.

function getIcons(label, sortByHeader, sortByOrder) {
    if (label !== sortByHeader){
        return <div>
            <BiSolidUpArrowAlt />
            <BiSolidDownArrowAlt />
        </div>
    }

    if (sortByOrder === null) {
        return <div>
        <BiSolidUpArrowAlt />
        <BiSolidDownArrowAlt />
    </div>
    } else if (sortByOrder === "asc") {
        return <div>
        <BiSolidUpArrowAlt />
    </div>
    } else if (sortByOrder === "desc"){
        return <div>
        <BiSolidDownArrowAlt />
    </div>
    }
    
}

export default SortableTable;






