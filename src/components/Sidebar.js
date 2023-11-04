// Here we be showing a list of links to the user.
// One way to create a sidebar is to return a div that has a bunch of link components listed all out one by one.
// But that would get a little bit tedious because if we ever want to make a change or maybe add some CSS or className 
// to these different link things right here, we would have to go through and update every single one. instead we do the following:


import Link from "./Link";

function Sidebar () {
    // We create an array of objects that are going to represent the individual links that we want to show to the user.
    const links = [
        { label: "Dropdown", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Button", path: "/button" },
        // { label: "Flex", path: "/flex" },
        // { label: "Table", path: "/table" },
        // { label: "Search", path: "/search" }
    ];

    const renderedLinks = links.map((link) => {
        return (
        <Link 
        key={link.label} 
        to={link.path} 
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        > 
        
        {link.label} 
        </Link>
        );
    }); 

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    );
};

export default Sidebar;