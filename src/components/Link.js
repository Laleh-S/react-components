
//! IMPORTANT 
// WHY WE CREATE LINK FUNCTION ??? 
// The goal of the link component is to make sure that clicking on the anchor element DOES NOT trigger a total page refresh.
// We are going to stop that normal behavior by calling event.preventDefault inside of the click event handler.

//! IMPORTANT 
// Need "a" element that goes to a path in our app?? Use the link component below.
// Need "a" element that goes to another domain?? use a normal <a> element.

//! IMPORTANT 
// ① - on any browsere if we hold command key and click on any link the link will open in a new window. to do this, we go to our 
// <a> element and will give it an "href" property with a value of "to". Then inside our "handleClick" function, we only want to prevent 
// the default behaviour if user does not have the command key held down. we have to detect that somehow. To detect this,
// we console log the event object. Then back inside the browser we do a command and click on one of our links. When we click on it,
// we expand the log and if we scroll down we notice that there is a ctrlKey: false and further down metaKey: true 
// on Mac OS, meta key will be set to true and on Windows control key will be set to true
// So we could do a little check inside of our handle click function. We can say if the user is holding down meta key or control key,
// then we don't want to go through this behavior. Instead we want to allow the browser to handle the navigation event as usual 
// and attempt to open up a new tab.

//! IMPORTANT 
// Inside navigation.js we created a "navigate" function inside our "NavigationProvider" to allow us to programmatically navigate arround
// the application. We need to access to "navigate" function. Then, whenever a user clicks on our link, we're going to stop the normal 
// navigation by adding "event.preventDefault()" and programmatically navigate to wherever we had wanted a user to go to. So to reach into 
// context, We use our "useNavigation" custom hook by importing it from our use-navigation.js. we then, inside our "Link" component, we  
// call "useNavigation". That's gives us back the entire object that we are sharing, which are "navigate" and "currentPath". Then inside 
// handle click, we call navigate and pass in the "to" prop like so: "navigate(to)".

//! IMPORTANT 
// And so right now, yeah, we always want to have our links with additional spacing underneath. But eventually we might use our link 
// component in some other location inside of our app. And in those other locations, we would not want to have this hard-coded className
// here because then all of our different links would have margin on the bottom which is not ideal. To fix this:
// Whenever we show our link component, we're going to allow other developers to give us a className prop and customise our link. 
// We'll then take that className and we're going to add it in to our list of classNames.

import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";


// "to" describes the path that the user will go to if they click on this.
// "children" will be some text that we want to show inside of the anker element.
// "activeClassName" we created this className in our "<Link>" component inside "sidebar.js"
function Link({ to, children, className,  activeClassName}){
    // That's gonna give us back the entire object that we are sharing.
    const { navigate, currentPath } = useNavigation();
    
    
    //? ◈◈◈◈◈◈◈◈◈◈ Styling ◈◈◈◈◈◈◈◈◈◈ 
    const classes = classNames(
        "text-blue-500", 
        className, 
        // if "currentPath" === "to" prop, then we want to add a className of "activeClassName" 
        (currentPath === to && activeClassName)
        );
    //? ◈◈◈◈◈◈◈◈◈◈◈◈ End ◈◈◈◈◈◈◈◈◈◈ 


    const handleClick = (event) => {
        console.log(event) // KEEP THIS for testing the code bellow on console  //! ① 
        
         //? ◈◈◈◈◈◈◈◈◈◈ Enables our links to open in a new browser tab when hold command and click on the link ◈◈◈◈◈◈◈◈◈◈ 
         if (event.metaKey || event.ctrlKey){ // if event.metaKey or event.ctrlKey //! ①
            return; // then just go ahead and return and let the browser just do it's thing.
        }
        //? ◈◈◈◈◈◈◈◈◈◈◈◈ End ◈◈◈◈◈◈◈◈◈◈ 

        event.preventDefault(); // stops the standard navigation

        navigate(to);
    };
    // Our href prop value is "to" because that's where this link is ultimately trying to go to.
    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>  // <- Whenver user clicks on it we run "handleClick" handles the click.
    );
};

export default Link;

