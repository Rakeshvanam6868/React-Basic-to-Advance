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

const Cards = (props)=>{
    const {resData} = props;
    const {img,restaurant,rating,time,place,cuisine} = resData;
    return (
        <div className="card">
            <img src={img} alt="" className="card-img"/>
                <h2>{restaurant}</h2>
                <p className="rating"><img src="https://lordicon.com/icons/wired/lineal/237-star-rating.svg" alt="" className="card-rating" />{rating} *<span>{time} mins</span> </p>
                <h3>{cuisine}</h3>
                <h3>{place}</h3>
        </div>
    );
}

const Resto=[
    {
        id:"1",
        img:"https://media.licdn.com/dms/image/D5612AQEseMQvg67Q2w/article-cover_image-shrink_720_1280/0/1690024087256?e=2147483647&v=beta&t=c78RUA5HtGEpLDYFJQfw_NECJ6bCk0V7gcMHUNixuOo",
        restaurant:"Pizza Hut",
        rating:"4.1",
        time:"30-35",
        cuisine:"Pizzas",
        place:"Tolichowki"
    },
    {
        id:"2",
        img:"https://b.zmtcdn.com/data/pictures/chains/2/19364242/652e979b87b41fe3112c41adffa572df.jpg?fit=around|750:500&crop=750:500;*,*",
        restaurant:"Chinese work",
        rating:"3.9",
        time:"50-55",
        cuisine:"Chinese,Asian,..",
        place:"Madhapur"
    },
    {
        id:"3",
        img:"https://cdn.dotpe.in/merchant/510/PHOTO-2022-01-18-15-14-01-(1).jpg",
        restaurant:"Wow! Momo",
        rating:"4.3",
        time:"35-40",
        cuisine:"Tibetan, Healthy...",
        place:"Jubilee Hills"
    },
    {
        id:"4",
        img:"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/17141049/Shah-ghouse.jpg",
        restaurant:"Shah Ghouse",
        rating:"4.1",
        time:"30-35",
        cuisine:"Biryani, Chinese,...",
        place:"Gachibowli"
    },
    {
        id:"5",
        img:"https://media.licdn.com/dms/image/D5612AQEseMQvg67Q2w/article-cover_image-shrink_720_1280/0/1690024087256?e=2147483647&v=beta&t=c78RUA5HtGEpLDYFJQfw_NECJ6bCk0V7gcMHUNixuOo",
        restaurant:"Pizza Hut",
        rating:"4.1",
        time:"30-35",
        cuisine:"Pizzas",
        place:"Tolichowki"
    },
    {
        id:"6",
        img:"https://b.zmtcdn.com/data/pictures/chains/2/19364242/652e979b87b41fe3112c41adffa572df.jpg?fit=around|750:500&crop=750:500;*,*",
        restaurant:"Chinese work",
        rating:"3.9",
        time:"50-55",
        cuisine:"Chinese,Asian,..",
        place:"Madhapur"
    },
    {
        id:"7",
        img:"https://cdn.dotpe.in/merchant/510/PHOTO-2022-01-18-15-14-01-(1).jpg",
        restaurant:"Wow! Momo",
        rating:"4.3",
        time:"35-40",
        cuisine:"Tibetan, Healthy...",
        place:"Jubilee Hills"
    },
    {
        id:"8",
        img:"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/17141049/Shah-ghouse.jpg",
        restaurant:"Shah Ghouse",
        rating:"4.1",
        time:"30-35",
        cuisine:"Biryani, Chinese,...",
        place:"Gachibowli"
    }
]

const Hero = ()=>{
    return (
        <div className="hero">
            <div className="search">
                <input type="text" name="" id="" />
                <button type="submit"></button>
            </div>
            <div className="card-grid">
            {Resto.map((restaurant)=>(<Cards key={restaurant.id} resData={restaurant}/>))}
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
