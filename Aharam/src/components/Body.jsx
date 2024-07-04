import { useState } from "react";
import Resto from "../utils/Resto";
import Cards from "./Card";

const Hero = ()=>{
    const [resData, setresData] =useState(Resto)
    return (
        <div className="hero">
            <div className="search">
                <input type="text" name="" id="" />
            </div>
            <div className="buttons">
                 <button className="filter-btn" onClick={() =>{
                  const filterData=(resData.filter((res)=>res.rating > 4));
                  setresData(filterData);
                 }}>
                 Top Rated
                 </button>
            </div>
            <div className="card-grid">
            {resData.map((restaurant)=>(<Cards key={restaurant.id} resData={restaurant}/>))}
            </div>
        </div>
    );
}

export default Hero;