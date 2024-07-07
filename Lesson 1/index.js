import React from "react";
import ReactDOM from "react-dom/client"

const HeadComponent= ()=> <h1 className="heading">Hey this is arrow using function component but, without return type and parenthesis</h1>;

const ComponentComposition = ()=>{
    return <h1 className="heading">Hey this is using arrow function component by using return type and no parenthesis</h1>
}

const NormalFunction = function (){
    return <h1 className="heading">Hey this is using normal function component by using return</h1>
}

const Heading = ()=>{
    return (
        <div className="container">
            <HeadComponent/>
            <ComponentComposition/>
            <NormalFunction/>
            <h1 className="heading">Hey above functions wrapped up on above so this is called Component Composition and made with return to parenthesis</h1>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);


// 1)const header=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Creating the react app");


/* <div id="parent">
    <div id="child">
        <h1>This is h1 tag</h1>
    </div>
</div> */