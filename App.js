import React from "react";
import  ReactDOM  from "react-dom/client";

//Functional Component
const ComponentInsideElement = () => {
    return(
        <>
            <div>This is Component inside an element</div>
        </>
    )
}

//React Element
const whoHere = (
    <div>
        <ComponentInsideElement />
        <h1>Who is here??</h1>
    </div>
)

//React Element
const title = (
    <h1>
        {/* Element inside element */}
        {whoHere}
        Shweta is here!!!
    </h1>
)

//Functional Component
const F1 = ()=> {
    return(
        <>
        {title}
        <div>This is f1</div>
        </>
    )
}

//Functional Component
const F2 = () => {
    return(
        <>
            <F1 />

            {/* same thing!! */}
            <F1></F1>

            {/* F1 is just a normal JS function... so same thing */}
            {F1()}
            <div>This is f2</div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<F2 />)