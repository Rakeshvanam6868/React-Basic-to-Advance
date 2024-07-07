import { useEffect, useState } from "react"
import { Main_API } from "./constants";

const useRestaurantData =()=>{
    const [resData,setResData]=useState([]);
    const [filterResData,setResFilterData]=useState([]);

    useEffect(()=>{
        fetchFilterData();
    },[]);

    const fetchFilterData = async()=>{
        const data=await fetch(Main_API);
        const json=await data.json();
        const restaurants = json?.data?.cards?.flatMap(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info) ?? []);
        setResData(restaurants);
        setResFilterData(restaurants);
    }

    return {resData,filterResData};
}

export default useRestaurantData;