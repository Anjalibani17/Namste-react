import Restaurantcard, { withLabelResCard } from "./Restaurantcard";
// import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnStatus from "../utils/useOnStatus";
import userContext from "../utils/userContext";

const Body = () => {
    const [listRes, setListRes] = useState([]);
    const [filterListRes, setFilterListRes] = useState([]); //copy of first list
    /*We always change filterlist instead of listres and apply filter on list res bcz listres
       contain api data if we filter on it then we can not retive origanl data after filtering it.*/
    const [searchBtn, setSearchBtn] = useState("");
    //here we are passing reslist mock data into use state and then update it
    const {setUserName,loggedInUser}=useContext(userContext);
    //hoc
    const LabelResCard = withLabelResCard(Restaurantcard); //here we pass component to HOC
   
    useEffect(() => {
        fetchData();
        // console.log("load")
    }, []);
    // console.log("body");
    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/mapi/homepage/getCards?lat=22.3189294&lng=73.1669011",
                {
                    headers: {
                        "cache-control": "no-cache",
                    },
                }
            );

            if (!data.ok) {
                throw new Error("Network response was not ok");
            }

            
            const jsonD = await data.json();
            console.log(jsonD)

            //optional chaining
            const finalData =
                jsonD?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
                    ?.restaurants;

            setListRes(finalData);
            setFilterListRes(finalData); //here make copy of state to do filter on it
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here, e.g., show an error message to the user.
        }
    };
    const status = useOnStatus();
    if (status == false) {
        return <h2>you are offline!</h2>;
    }
    // if(listRes.length==0)
    // {
    //     // return <h2>loading...</h2>;
    //     return <Shimmer/>
    // }
    return listRes.length == 0 ? (
        <Shimmer /> //conditional rendering
    ) : (
        <div className="bg-slate-200 ">
            <div className="flex ">
                <div className="">
                    <input
                        type="text"
                        className="p-2 h-8"
                        value={searchBtn}
                        onChange={(e) => {
                            setSearchBtn(e.target.value);
                        }}
                    ></input>
                    <button
                        className="bg-orange-200 px-4 py-3 m-4 rounded-lg font-bold"
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
                    className="bg-orange-200 px-4 py-3 m-4 rounded-lg font-bold"
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
                {console.log(loggedInUser)}
                <input placeholder="username" className="p-2 h-8 m-2" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
            <div className="flex flex-wrap">
                {/* <Restaurantcard resName="krishna food" cuisine="Gujrati thali" /> */}
                {filterListRes.map((Restaurant) => (
                    <Link
                        key={Restaurant.info.id}
                        to={"/restaurant/" + Restaurant.info.id}
                    >
                        {/* write a logic that if rest promted then it goes to HOC  */}
                        {Restaurant.info.promoted ? (
                            <LabelResCard   resData={Restaurant} />
                        ) : (
                            <Restaurantcard resData={Restaurant} />
                        )}
                    </Link>
                ))}
                {/* above code is return fun */}
                {/* <Restaurantcard resData={resList[1]} /> */}
            </div>
        </div>
    );
};
export default Body;
