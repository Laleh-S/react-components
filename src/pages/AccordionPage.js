import Accordion from "../components/Accordion";

function AccordionPage(){
    const flowers = [
        {
            id: 1,
            label: "Where do Roses originate from?",
            content: "Roses are thought to have first been cultivated in China, where they were grown in the imperial gardens of the Chou dynasty as described by Confucius (551-479 BC). Many of the cultivated roses we grow today are hybrids and selections from species native to China."
        },
        {
            id: 2,
            label: "Where do Tulips originate from?",
            content: "Tulip cultivation likely began in Persia (Iran) in the 10th century, and it eventually became a symbol of the Ottoman Empire."
        }, 
        {
            id: 3,
            label: "Where do Lilies originate from?",
            content: "Lilies are among the oldest cultivated plants. In Asia Minor during the 2nd millennium BCE the bulb of the Madonna lily was cultivated for use in a medicinal ointment; the ancients raised the bulbs of this species for food."
        }
    ];




    return (
        <div>
            <Accordion flowers={flowers} /> {/* passing flowers function as a prop to <Accordion /> */} 
        </div>
    )
};

export default AccordionPage;