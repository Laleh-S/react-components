// ① - We want to show the dropdown page whenever a user is at our root route whis is localhost:3000. 

// Here, we deciding what content we are showing on the screen using the "currentpath" by We're gonna add in a new component called a 
// "Route" component. The app component is gonna show a couple of different route components. Each route component is going to be given
// a different set of props. a "path" prop and a "children" prop. 

import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";



function App(){

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/"> {/* ① */}
                    <DropdownPage />
                </Route>
                <Route path="/button"> 
                    <ButtonPage />
                </Route>
                <Route path="/modal"> {/* Whenever user is in this path, we want to show our Modal component */}
                    <ModalPage />
                </Route>
                <Route path="/table"> {/* Whenever user is in this path, we want to show our TablePage component */}
                    <TablePage />
                </Route>
            </div>
        </div>
    );
};

export default App;


