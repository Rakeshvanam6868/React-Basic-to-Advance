import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurants = ()=>{

    const {resId} = useParams();

    const resMenuData = useRestaurantMenu(resId);
    

    const getRestaurantInfo = () => {
        if (resMenuData?.cards?.length > 2) {
          return resMenuData.cards[2]?.card?.card?.info;
        }
        return {};
      };


      const { name, cuisines } = getRestaurantInfo();
   
    return (
        <div className="restaurant_card">
            <h1>{name}</h1>
            <div className="recommended">
                <h2>Menu</h2>
                <ul>
                <li>{cuisines}</li>
                <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Restaurants;

{/* <h1>Pizza Hut</h1>
            <div className="rating-container">
                <img src="" alt="" className="rating-img" />
                <p>4.1 <span>Rs: 350 for two</span></p>
                <h6>Pizzas</h6>
                <p className="place"><b>Outlet</b>Kothawada</p>
                <p className="time"><b>40-45</b></p>
                <hr />
                <p>Order above 149 for discounted delivery free</p>
            </div> */}