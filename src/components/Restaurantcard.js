import { CDN_URL } from "../utils/constant";
const Restaurantcard = (props) => {
    // console.log(props);
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        sla: { deliveryTime },
        costForTwo,
    } = resData.info;
    return (
        <div className="w-[200px] bg-amber-100 p-4 rounded-lg m-2">
            <img
                alt="food"
                className="res-logo w-40 rounded-lg "
                src={CDN_URL + resData.info.cloudinaryImageId}
            />
            <div className="">
                <h3>{name}</h3>
                <h4>{cuisines.join(" , ")}</h4>
                <h4> {avgRating}</h4>
                <h4>{deliveryTime} minutes</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

//higher ordre component take rescard component as input and return component which  return jsx
//input => Restaurantcard => withpromtedlabel
 export const withLabelResCard=(Restaurantcard)=>{
    
    return (props)=>{
        return(<>
            <label className="bg-red-700">label </label>
            <Restaurantcard {...props}/> 
        </>)
    }
}
export default Restaurantcard;
