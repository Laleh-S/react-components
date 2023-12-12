// Here we are going to show a list of links to the user, so we import Link.js right away. 

// One way to create a sidebar is to return a div that has a bunch of link components listed one, but if we ever want to make a change 
// or add claaName, we would have to go through and update every single one. instead:
// We create an array of objects that are going to represent the individual links that we want to show to the user. We then make another
// variable called "renderedLinks" and map over this list of objects. For each object, going to recieve it  into our mapping funtion as 
// a "link" and will return "<Link>"" component. The text we want to show inside the "<Link>" component is {link.label} which wiil be  
// our "key" prop. Also have to provide a "to" prop which will be where we navigate to when a user clicks on the link which would be 
// "link.path".

// label: is the text we showing on our likk 


import Link from "./Link";

function Sidebar () {
    const links = [
        { label: "Dropdown", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Button", path: "/button" },
        { label: "Modal", path: "/modal" },
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
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
};

export default Sidebar; 