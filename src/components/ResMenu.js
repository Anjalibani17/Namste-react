import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResMenu = () => {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.195343&lng=72.885865&restaurantId=766449&catalog_qa=undefined&submitAction=ENTER"
        );
        const menuData = await data.json();
        console.log(menuData);
        console.log(menuData.data.cards[0].card.card.info.id);
        // const filterMenu=
        setMenu(menuData);
    };
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
        <div className="menu">
            <h2>{name}</h2>
            <h3>
                {cuisines.join(" , ")} - {costForTwoMessage}
            </h3>
            <ul>
                {itemCards.map((item, index) => (
                    <li key={index}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default ResMenu;
