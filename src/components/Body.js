import Restaurantcard from "./Restaurantcard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listRes, setListRes] = useState([]);
    const [filterListRes, setFilterListRes] = useState([]); //copy of first list
    /*We always change filterlist instead of listres and apply filter on list res bcz listres
     contain api data if we filter on it then we can not retive origanl data after filtering it.*/
    const [searchBtn, setSearchBtn] = useState("");
    //here we are passing reslist mock data into use state and then update it

    useEffect(() => {
        fetchData();
        console.log("load")
    },[]);
    console.log("body");
    const fetchData = async () => {
        try{const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=22.3189294&lng=73.1669011"
        );
        if (!data.ok) {
            throw new Error("Network response was not ok");
        }
        
        // console.log(data)
        const jsonD = await data.json();
        // console.log(jsonD);
        // console.log(
        //     jsonD.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        //         .restaurants
        // );
        //optional chaining
        const finalData =
            jsonD?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
                ?.restaurants;

        setListRes(finalData);
        setFilterListRes(finalData); //here make copy of state to do filter on it
    }catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here, e.g., show an error message to the user.
    }
    };
    // if(listRes.length==0)
    // {
    //     // return <h2>loading...</h2>;
    //     return <Shimmer/>
    // }
    return listRes.length == 0 ? (
        <Shimmer /> //conditional rendering
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="inp"
                        value={searchBtn}
                        onChange={(e) => {
                            setSearchBtn(e.target.value);
                        }}
                    ></input>
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filterList = listRes.filter((res) =>
                                res.info.name.toLowerCase().includes(searchBtn.toLowerCase())
                            );
                            setFilterListRes(filterList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filterbtn"
                    onClick={() => {
                        const filresList = listRes.filter(
                            (res) => res.info.avgRating > 4.4
                        );
                        console.log(filresList);
                        setFilterListRes(filresList);
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="res-container">
                {/* <Restaurantcard resName="krishna food" cuisine="Gujrati thali" /> */}
                {filterListRes.map((Restaurant) => (
                    <Restaurantcard key={Restaurant.info.id} resData={Restaurant} />
                ))}
                {/* above code is return fun */}
                {/* <Restaurantcard resData={resList[1]} /> */}
            </div>
        </div>
    );
};
export default Body;
