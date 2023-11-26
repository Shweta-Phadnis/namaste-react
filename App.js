//how to create tree/nested structure using react
const parent = React.createElement(
    "div",
    {id : 'parent'},
    React.createElement(
        "div",
        {id : 'child'},
        [ //if we want to create sibling elements, we can use an array
            React.createElement("h1",{},"Nested Tree"),
            React.createElement("h2",{},"Nested Tree")
        ]
    )
);

const heading = React.createElement(
    "h1",
    {id : "heading1"},
    "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)