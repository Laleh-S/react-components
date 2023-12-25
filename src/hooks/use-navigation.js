
// As well as being a good practice the goal of this custom hook is just to make it a little easier for other engineers to 
// use our navigation system. 

// We can make a use of this custom hook inside of our "Route.js" and "Link.js"

import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation () { // Anytime we call this function, we are going to return "useContext", with "NavigationContext".
    return useContext(NavigationContext);
}

export default useNavigation;