// This page is the Parent component for Table component.




import Table from "../components/Table";

function TablePage() {

    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Cherry", color: "bg-red-500", score: 3 },
        { name: "Banana", color: "bg-yellow-500", score: 1 },
        { name: "Kiwi", color: "bg-green-500", score: 4 },
    ];

    // If we want to add in additional columns to the table, all we have to do is to add in an additional config object here.
    const config = [ 
        {
            label: "Name",
            render: (fruit) => fruit.name
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: "Score",
            render: (fruit) => fruit.score
        },
    ];

    // This is a function that we can use to get a key to use for each individual row inside of our table.
    const keyFunc = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <Table data={data} config={config} keyFunc={keyFunc}/>
        </div>
    );
}; 

export default TablePage; 