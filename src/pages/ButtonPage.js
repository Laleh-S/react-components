// This page is a backup of what we created inside the App.js before creating ButtonPage.js

import Button from "../components/Button";
import { FaFireFlameCurved, FaKey } from "react-icons/fa6";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";


function ButtonPage(){
    const handleClick = () => {
        console.log("click!!")
    };

    return(
        <div>
            <div>
                <Button success rounded outline 
                    className="mb-5" 
                    onClick={handleClick}>
                    <HiCursorClick />
                    Click Me!
                </Button>
            </div>

            <div>
                <Button danger outline 
                    className="mb-5 ml-5" 
                    onMouseEnter={handleClick}>
                    <FaFireFlameCurved />
                    Buy Now!
                </Button>
            </div>

            <div>
                <Button warning>
                    See Deal!
                </Button>
            </div>

            <div>
                <Button secondary outline>
                    <FaKey/>
                    Password!
                </Button>
            </div>

            <div>
                <Button primary rounded>
                    <BsFillCaretRightSquareFill />
                    Play Now!
                </Button>
            </div>
        </div>
        
    );
};

export default ButtonPage;

