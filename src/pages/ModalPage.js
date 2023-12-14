// We are going to style our button using our reusable button that we created. Therefore we import the "button" component.
// This page is the Parent component for Modal component.

import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false); // false by default means we are not going to show the Modal at all.
    
    const handleClick = () => { // Whenever this is called we are updating our Modal by calling setShowModal and pass in "true"
        setShowModal(true);
    };

    const handleClose = () => { // Whenever this is called we are closing the Modal by calling setShowModal and pass in "false"
        setShowModal(false);
    };

    // ----- MODAL PAGE -----
    const actionBarVar = (
    <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    );

    const modal = (
    <Modal onClose={handleClose} actionBar={actionBarVar} > {/* receive the next line prop inside Modal.js */ }
        <p> Please accept the agreement bellow </p> {/* <- Our children prop to receive inside "Modal.js" and display inside modal window */ }
    </Modal>
    );
    // ----- END ------

    return (
        <div className="relative">
            <Button primary onClick={handleClick} >
                Open Modal
            </Button>
            {/* If shoeModal is true, display "<Modal>" component, if showModal is false we display nothing. */}
            {showModal && modal} 
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien. 
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien. 
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p> <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem at nisl semper finibus non eget tortor. Etiam vestibulum ultricies gravida. Nunc at sollicitudin ante. Mauris molestie pellentesque sapien vitae tristique. Suspendisse at dui vitae ligula rutrum dictum commodo nec tortor. Sed pretium elit quis nibh venenatis ultricies. Donec mi augue, elementum vel ultrices nec, luctus a nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id blandit leo. Etiam eget lorem id lectus rutrum tincidunt. Etiam dapibus velit in nunc commodo ultrices eu in sapien. Aliquam suscipit vestibulum magna ullamcorper pretium. Suspendisse potenti. Quisque fermentum dolor quis velit ultricies, vel molestie orci consequat. Pellentesque vitae tellus feugiat, tempor tellus vitae, malesuada sapien.
            </p>
        </div>
    );
};

export default ModalPage;