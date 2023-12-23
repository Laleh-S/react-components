// This page is the Parent component for Table component.

//! NOTE
// data -> The table component recieves an array of obj called and renders it on the screen.
// config -> The table component also recieves an array of obj called "config". Each object inside of here describes
// how to display a different column inside the table. 

//! NOTE 
// If we want to add in additional columns to the table, all we have to do is to add in an additional config object here.
// The array of config objects below describe the different columns we want to have inside of our table.

// label -> is used to decide what text to put inside the header.
// render -> is a function that is being used to decide what values to put inside of every cell inside that column.
// header -> is an optional property that is going to decide what we should display in the "score" header. So if there is 
// a header function provided on a given config object, we're gonna use that function to decide what to show right here. 
// Otherwise, we're going to just show the label.
// sortValur -> This is our getSortValue function is an optional function to describe how to extract values for sorting when 
// the "Score" or "Name" column is clicked. 

// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() { 
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Cherry", color: "bg-red-500", score: 3 },
        { name: "Banana", color: "bg-yellow-500", score: 1 },
        { name: "Kiwi", color: "bg-green-500", score: 4 },
    ];


    const config = [ 
        {
            label: "Name",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: "Score",
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        },
        {
            label: "Sqrt Score",
            render: (fruit) => fruit.score * fruit.score,
            sortValue: (fruit) => fruit.score * fruit.score
        },
    ];

    // This is a function that we can use to get a key to use for each individual row inside of our table.
    const keyFunc = (fruit) => {
        return fruit.name;
    };

    return (
        // We can show both sortable and unsortable table by uncomenting the Table bellow after importing it at the top of this page
        <div>
            {/*  <Table data={data} config={config} keyFunc={keyFunc}/>  */}
            <SortableTable data={data} config={config} keyFunc={keyFunc}/>
        </div>
    );
}; 

export default TablePage; 