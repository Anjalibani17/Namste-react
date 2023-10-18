import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {

    const { resId } = useParams();
       // ****here we create custom hooks for api call ****
    const menu = useResMenu(resId);
    //second option 

    // const [menu, setMenu] = useState(null);
    // useEffect(() => {
    //     fetchData();
    // }, []);
    // const fetchData = async () => {
    //     const data = await fetch(MENU_URL+resId);
    //     const menuData = await data.json();
    //     console.log(menuData);
    //     console.log(menuData.data.cards[0].card.card.info.id);
    //     setMenu(menuData);
    // }
    if (menu == null) {
        return <Shimmer />;
    } //here we can use ternary operator with compo return but it gives you error bcz initially
    //your menu is null so we try to destructure name of null hence we put if condition first
    const { name, cuisines, costForTwoMessage } =
        menu?.data?.cards[0]?.card?.card?.info;
    const { itemCards } =
        menu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;
    console.log(
        menu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card
    );
    return (
        <div className="justify-center text-lg">
        <div className="font-bold text-3xl">
        <h2>{name}</h2>
        </div>
            <h3>
                {cuisines.join(" , ")} - {costForTwoMessage}
            </h3>
            <ul>
                {itemCards.map((item) => (
                    <li className="p-2 text-xl justify-center" key={item.card.info.id}>
                        {item.card.info.name} -{"  Rs-"}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ResMenu;
