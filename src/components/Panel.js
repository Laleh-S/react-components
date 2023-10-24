// reusable presentation components: 
// 1- Create a new component that shows a handful of JSX elements.
// 2- Make sure the component accepts + uses the "children" prop.
// 3- Allow extra classNames to be passed in + merge them.
// 4- Take extra props, pass them through too root element.

import classNames from "classnames";

function Panel({ children, className, ...rest }) { // ...rest means all the additional props.
    const finalClassNames = classNames(
        "border rounded p-3 shadow bg-white w-full",
        className
        );

    return (
        <div {...rest} className={finalClassNames}>{children}</div>
    );

}
export default Panel;