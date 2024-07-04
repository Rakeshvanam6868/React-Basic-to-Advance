import { star_Rating } from "../utils/constants";
const Cards = (props)=>{
    const {resData} = props;
    const {img,restaurant,rating,time,place,cuisine} = resData;
    return (
        <div className="card">
            <img src={img} alt="" className="card-img"/>
                <h2>{restaurant}</h2>
                <p className="rating"><img src={star_Rating} alt="" className="card-rating" />{rating} *<span>{time} mins</span> </p>
                <h3>{cuisine}</h3>
                <h3>{place}</h3>
        </div>
    );
}

export default Cards;