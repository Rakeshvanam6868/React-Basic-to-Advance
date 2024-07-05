import { star_Rating } from "../utils/constants";
import { swiggyImg } from "../utils/constants";
const Cards = (props)=>{
    const {resData} = props;
    const {id,name,cloudinaryImageId,avgRating,locality,cuisines} = resData;
    return (
        <div className="card" key={id}>
            <img src={swiggyImg+cloudinaryImageId} alt="" className="card-img"/>
                <h2>{name}</h2>
                <p className="rating"><img src={star_Rating} alt="" className="card-rating" />{avgRating} </p>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{locality}</h3>
        </div>
    );
}

export default Cards;