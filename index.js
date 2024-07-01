/* <div id="parent">
    <div id="child">
        <h1>This is h1 tag</h1>
    </div>
</div> */

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement( "h1", {}, "this is h1 tag",),React.createElement("h2",{},"this is h2 tag")]
    ),React.createElement("div",{id:"child2"},
        [React.createElement( "h1", {}, "this is h1 tag",),React.createElement("h2",{},"this is h2 tag")]
    )]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// 1)const header=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Creating the react app");