import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
    const [listRes,setListRes]=useState(resList);
    //here we are passing reslist mock data into use state and then update it

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filterbtn"
                    onClick={() => {
                        const filresList = resList.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        console.log(filresList);
                        setListRes(filresList);
   
                    }}
                >
                    Top rated restaurant{" "}
                </button>
            </div>
            <div className="res-container">
                {/* <Restaurantcard resName="krishna food" cuisine="Gujrati thali" /> */}
                {listRes.map((Restaurant) => (
                    <Restaurantcard key={Restaurant.info.id} resData={Restaurant} />
                ))}
                {/* above code is return fun */}
                {/* <Restaurantcard resData={resList[1]} /> */}
            </div>
        </div>
    );
};
export default Body;
