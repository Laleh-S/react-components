//! IMPORTANT: 
// How to create a Modal component:
// 1- Create a coomponent called Modal
// 2- Create a ModalPage component
// 3- Add routs to App.js to show ModalPage, when the user goes to "/modal"
// 4- Add a link to the "Sidbar" component

//! IMPORTANT:
// tailwind clasNames: 
// absolute = position:absolute
// absolute puts the element -> at the top left corner of the closest parent with a position other than "static". If there is no parent 
// element, it will be displayed on the top left corner of the entire html document.

// inset-0 = top: 0; left: 0; right: 0; Bottom: 0;
// inset-0 if the element is position: absolute -> the element will expand to fill he height and width of the closest parent with a 
// non-static position. If there is no parent element, it will be displayed on the top left corner of the entire html document and it 
// is going to expand to fill up the entire html document.

// None of our parents element have a position other than the default of "static". It means that our gray background is gonna be 
// positioned at the top left corner of the entire HTML document. And because it has an inset of zero, it's going to expand to fill 
// fill that entire element. So it's gonna expand to the entire height and the width of the entire HTML document. This is what we 
// are seeing when we click on "Open Modal" button. Our gray background is positioned at the top left corner of the entire document
// and is expanding to fill the entire screen. Right now, our gray background and little white box inside of it is only working correctly
// because there is no parent positioned element. If the modal happened to have a positioned parent then the modal would not fill up the 
// entire screen. 

//! IMPORTANT:
// How to Create our Modal to avoid issues if the parent element is positioned?
// Inside our "Public" directory and inside "index.html" file. At the bottom of the page on top of the closing "<body>"" element, 
// we add a "<div>" with a class of modal container. like so: <div class="modal-container"></div> then save and do a full reload of 
// the page back inside of the browser. We want to take our "Modal" and render it inside this <div>. to do this, we import "ReactDOM"
// from react-dom and return ReactDOM as below. first argument is all the JSX we want to show then add a coma and the second argument 
// is going to be a referrence to that <div> we just created inside our "index.html" file. Now we can go to our "ModalPage" and add 
// a className to our parent <div> without breaking our code.


import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    
    // ----- STOPS SCROLLING WHEN MODAL IS ACTIVE -----
    useEffect(() => { 
        document.body.classList.add("overflow-hidden"); // Adding JavaScript class with a Talewind css className "overflow-hidden"

        // Whenever our modal component is about to be remove from the dom, we're going to want to remove that class.
        return () => { // we can return a cleanup function, which will be called whenever our modal is about to be removed.
            document.body.classList.remove("overflow-hidden");
        }
    }, []); // [] -> runs a useEffect function only one time when the Modal component first displayed.
        // ----- END -----
    
        return ReactDOM.createPortal(
        <div>
            {/* Whenever the user clicks on this <div>, we will call "onClose" */}
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div> 
            <div className="fixed inset-40 p-10 bg-white"> 
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
    </div>, 
    document.querySelector(".modal-container")
    ); 
};

export default Modal;