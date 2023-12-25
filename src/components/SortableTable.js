// A custom hook is a function that is going to contain some reusable amount of logic. We can create a custom hook one time
// and then reuse it inside of several different components anytime we need to reuse that logic.

//! IMPORTANT:
// It is recommended to always work on a feature first, get it working to some degree, and then try to extract some logic into a 
// custom hook rather than making a custom hook first.

// current "sortByOrder" -> is going to modify or change how we update our state.
// current "sortByHeader" -> is going to keep track of what column we are currently sorting by.

import Table from "./Table";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
import useSort from "../hooks/use-sort";

function SortableTable (props) { // Note we are going to take the entier props object, so we dont put "props" in curly braces.
    const { config, data } = props;
    const { 
        sortByHeader, 
        sortByOrder, 
        sortedData, 
        sortColumnLabel } = useSort(data, config);

    const updatedConfig = config.map((column) => { // column is a single config obj that we defined back inside TablePage.js
        if (!column.sortValue){ // if this column does not have a "sortValue" property then just return it.
            return column;
        } else { // but if it has "sortValue" propery, 
            return {
                ...column, // then we want to return a brand new object that has all the properties of the column object, 
                header: () => (
                    <th className="cursor-pointer hover:bg-gray-100" 
                        onClick={() => sortColumnLabel(column.label)}
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






