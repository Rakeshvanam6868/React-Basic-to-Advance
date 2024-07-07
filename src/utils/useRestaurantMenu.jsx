import { useEffect, useState } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resMenuData,setResMenuData]=useState(null);
    
    useEffect(()=>{
        fetchResData();
    },[]);

    const fetchResData=async()=>{
        const data=await fetch(Menu_API+resId);
        const json=await data.json();
        setResMenuData(json.data);
    }

    return resMenuData;
}

export default useRestaurantMenu;