import Restaurantcard from "./Restaurantcard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [listRes, setListRes] = useState([]);
    //here we are passing reslist mock data into use state and then update it
    useEffect(() => {
        fetchData();
    }, []);
        console.log("body");
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=22.3189294&lng=73.1669011"
        );
        // console.log(data)
        const jsonD = await data.json();
        console.log(jsonD);
        console.log(
            jsonD.data.success.cards[4].gridWidget.gridElements.infoWithStyle
                .restaurants
        );
        //optional chaining 
        const finalData =
            jsonD?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

        setListRes(finalData);
    };
    if(listRes.length==0)
    {
        return <h2>loading...</h2>;
    }
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filterbtn"
                    onClick={() => {
                        const filresList = listRes.filter(
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
