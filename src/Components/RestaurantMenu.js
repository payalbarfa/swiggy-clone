import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
          fetchmenu();
    },[]);
     const fetchmenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7223889&lng=75.8872364&restaurantId=720490&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER",

        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
     };
     const{name,cuisiones,costForTwoMwssage}= resInfo?.data?.cards[0]?.card?.info
    return resInfo === null ?(
        <Shimmer/>
    ):(
     <div className="menu">
        <h2>hyyyyy</h2>
        
     </div>
    );
};
export default RestaurantMenu;