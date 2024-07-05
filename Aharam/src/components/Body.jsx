import { useEffect, useState } from "react";
import Cards from "./Card";
import Shimmer from "./Shimmer";

const Hero = () => {
    const [resData, setresData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9442309&lng=79.6023125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        console.log(data);
        const restaurants = data?.data?.cards?.flatMap(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info) ?? []);
        setresData(restaurants);
    };

    if(resData.length === 0){
        return (
            <div className="shimme">
                <Shimmer/>
            </div>
        )

    }
    
    return (
        <div className="hero">
            <div className="search">
                <input type="text" name="" id="" />
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
                {resData.map((restaurant, index) => (
                    <Cards key={`${restaurant.id}-${index}`} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Hero;
