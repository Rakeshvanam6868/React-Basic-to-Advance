import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./assets/logo.png";
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
const Navbar = ()=>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
                <h1>AHARAM</h1>
            </div>
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="nav-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="icon-img" />
            </div>
        </div>
    )
}

const Cards = ()=>{
    return (
        <div className="card">
            <img src="https://media.licdn.com/dms/image/D5612AQEseMQvg67Q2w/article-cover_image-shrink_720_1280/0/1690024087256?e=2147483647&v=beta&t=c78RUA5HtGEpLDYFJQfw_NECJ6bCk0V7gcMHUNixuOo" alt="" className="card-img"/>
                <h2>Pizza Hut</h2>
                <p className="rating"><img src="https://lordicon.com/icons/wired/lineal/237-star-rating.svg" alt="" className="card-rating" />4.1 *<span>30-35 mins</span> </p>
                <h3>Pizzas</h3>
                <h3>Tolichowki</h3>
        </div>
    );
}

const Hero = ()=>{
    return (
        <div className="hero">
            <div className="search">
                <input type="text" name="" id="" />
                <button type="submit"></button>
            </div>
            <div className="card-grid">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
        </div>
    );
}

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
