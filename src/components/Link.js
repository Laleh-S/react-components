
// to -> is the path that we are going to navigate to whenever user clicks on it.
// children -> is some text that we want to show inside of the anchor element.

//* WHY WE CREATE LINK FUNCTION ??? 
// The goal of the link function is to make sure that clicking on an anchor element DOES NOT trigger a total page refresh.
// We are going to stop that normal behavior by calling event.preventDefault inside of the click event handler.

// ① - on any browsere if we hold command key and click on any link the link will open in a new window.
// Here, we only want to prevent the default behavior if the user does not have that command or control key held down.
// to detect this, we console log the event object. Then back inside the browser we do a command and click on one of our links.
// When we click on it, we expand the console log. And if we scroll down we notice that there is a 
// ctrlKey: false and further down metaKey: true 
// on Mac OS, meta key will be set to true and on Windows control key will be set to true
// So we could do a little check inside of our handle click function. We can say if the user is holding down meta key or control key,
// then we don't want to go through this behavior. Instead we want to allow the browser to handle the navigation event as usual 
// and attempt to open up a new tab.

import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";


function Link({ to, children, className }){
    // That's gonna give us back the entire object that we are sharing.
    const { navigate } = useNavigation();
    
    const classes = classNames("text-blue-500", className);

    const handleClick = (event) => {
        console.log(event) //keep for testing the code bellow on console  //! ① 
        
         //◈◈◈◈◈◈◈◈◈◈ Enabling our links to open in a new browser tab when hold command and click on the link ◈◈◈◈◈◈◈◈◈◈//
        if (event.metaKey || event.ctrlKey){ // if event.metaKey or event.ctrlKey //! ①
            return; // then just go ahead and return and let the browser just do its thing.
        }
        //◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ End ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈//

        event.preventDefault();

        navigate(to);
    };
    // Our href prop value is "to" because that's where this link is ultimately trying to go to.
    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>  // <- Whenver user clicks on it we run "handleClick".
    );
};

export default Link;

