// Address dictate what we show on the page. We only care about the path to show the content to the user. 
// Path Is everything after URL/domain name and the port. to get the path from a page, type in 
// window.location.pathname in the console and it will show you the pathname.
// EXAMPLE: pathname for http://localhost:3000 is "/" or for http://localhost:3000/dropdown is "/dropdown"

// postate event listener is triggered when the browser's history navigation changes.

import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
// The only reason we have the state is to cause a re-render whenever a user clicks the forward and back buttons. That's all!!
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //◈◈◈◈◈◈◈◈◈◈ HANDLE USER CLICKING FORWARD AND BACK ◈◈◈◈◈◈◈◈◈◈//
    //◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈// 
    // ONLY gonna handle when the user is going back and forth between different addresses user went to, using push state.
    useEffect (() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        };
        // we watch for popstate event and whenever that happens, we call the handler function.
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []); // [] runs this function only one time.
    //◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ END ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈//

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
};

export { NavigationProvider }; // import "NavigationProvider" inside index.js file and wrap it around <App />
export default NavigationContext; 