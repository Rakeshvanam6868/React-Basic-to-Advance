import { useEffect, useState } from "react";
import Cards from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Hero = () => {

    const [searchInput, setSearchInput] = useState("");
    
    const {resData,filterResData}=useRestaurantData();

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
           <div className="online_status">
            <h1>Please check your Internet connection Your in offline</h1>
           </div>
        );
    }

    return resData.length === 0 ? <Shimmer/> : (
        <div className="hero">
            <div className="search">
                <input type="text" name="" id="" value={searchInput} 
                    onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={()=>{
                    console.log(searchInput);
                     const filterSearch = resData.filter((res)=>res.name.toLowerCase().includes(searchInput.toLowerCase()));
                       setFilterResData(filterSearch);
                }}>Search</button>
            </div>
            <div className="buttons">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterData = resData.filter((res) => res.avgRating >= 4);
                        setresData(filterData);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="card-grid">
                {filterResData.map((restaurant) => (
                    <Link key={restaurant.id} to={"/restaurants/"+restaurant.id}><Cards  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Hero;
