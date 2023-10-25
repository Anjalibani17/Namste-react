import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
import React from "react";
//this is component which fetch menu data 
const useResMenu = (resId) => {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setMenu(json);
    };
    return menu;
};
export default useResMenu;
