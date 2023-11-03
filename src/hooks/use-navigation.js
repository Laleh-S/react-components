import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation () { //And anytime we call this function, we are going to return use context, with navigation context.
    return useContext(NavigationContext);
}

export default useNavigation;