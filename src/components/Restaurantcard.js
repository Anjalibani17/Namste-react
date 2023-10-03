import { CDN_URL } from "../utils/constant";
const Restaurantcard = (props) => {
    // console.log(props);
    const { resData } = props;
    const { name, cuisines, avgRating, sla:{deliveryTime}, costForTwo } = resData.info;
    return (
        <div className="res-card">
            <img
                alt="food"
                className="res-logo"
                src={
                    CDN_URL +
                    resData.info.cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4> {avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};
export default Restaurantcard;