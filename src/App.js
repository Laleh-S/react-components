import Dropdown from "./components/Dropdown"
import { useState } from "react";


function App(){
    const [selection, setSelection] = useState(null); // null by default to indicate nothing has been selected.

    const handleSelect = (option) => {
        setSelection(option);
    };


    const options = [
        // label -> is what text the user sees, value -> is how we figure out what the user has selected.
        {label: 'RED', value: 'red'}, 
        {label: 'GREEN', value: 'green'},
        {label: 'BLUE', value: 'blue'},
    ]

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
        
    )
};

export default App;


// Document-wide click eventhandler