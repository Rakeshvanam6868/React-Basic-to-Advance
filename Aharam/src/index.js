import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar";
import Hero from "./components/Body";
/**
 *  Navbar
 *    -logo
 *    -Menu items
 *    -icon 
 *  Hero 
 *    -search
 *    //-TopRestaurant
 *    -Resto Cards
 * Footer
 *    -details
 */


const App = () =>{
    return (
        <div className="app">
            <Navbar/>
            <Hero/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
