
import useNavigation from "../hooks/use-navigation";

function Route ({ path, children }) {
    const { currentPath } = useNavigation();

    // Checking to see if "currentPath" is equal to "path" prop.
    if (path === currentPath){ // If path is equal to currentPath, then I want to show whatever was provided
        return children; // to us as the children prop, so we return children.
        // if they are not equal, we don't render anything at all and can indicate that by returning null.
    } else {
        return null
    }
    

}

export default Route