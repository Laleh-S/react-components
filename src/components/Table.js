
// In React we cannot create a <div> inside a <table> element, we get an error if we do.
// <tr> represents one row of headers. 
// <th> Each individual header column. Example: fruit name, color, score

//! NOTE
// The goal of our "Table.js" component is to be reusable and able to receive any kind of data and render it out as a table.

//! NOTE: ① 
// The column object is going to be each of the config objects in "TablePage.js". 

// Instead of writing out each individual <td> one by one, we are produce them by mapping over our config array. Inside "renderedCells" 
// going to return a <td> where we call the "column" object's render function and pass in function and pass in the current "rowData" 
// that we are mapping over. 

// The <td> also must have a key value because we are building up a list of elements here. We give it column object's 
// label property because its unique and consistent.

// We map over the config array because we always want to have a number of columns or number of TDs equal to the number of objects 
// inside of this array. So if we have three objects in "config" inside "TablePage.js", it means we want to have three columns. Which
// means we want to have three <td> elements inside of each row.
//! -----

// Fragment is a react frature that allows you to return multiple elements from a React component by allowing you to group a 
// list of children without adding extra nodes to the DOM. 
import { Fragment } from "react";

function Table( {data, config, keyFunc} ) {
    //*  ◈◈◈◈◈◈◈◈◈◈ LIST OF OUR HEADERS ◈◈◈◈◈◈◈◈◈◈
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            // we call the header function we created inside our "config" obj "score label" in our TablePage.js
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return (
            <th key={column.label}>{column.label}</th>
        );
    });

    // We're taking the "rowData" object that we are mapping over inside "Table.js" and pass it into the "render" function inside 
    // "TablePage.js" and get back exactly the rowData's name. this is what is going to be displayed inside the first <td>. Then we
    // repeat the process with other <td>s
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => { // ① 
            return <td className="p-2" key={column.label}>
                {column.render(rowData)}</td>
        })
        return(
            <tr className="border-b" key={keyFunc(rowData)}>
                {renderedCells}
            </tr>
        );
    });
    
    
    return (
        <table className="table-auto border-spacing-2">
            <thead> 
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    )
}; 

export default Table;