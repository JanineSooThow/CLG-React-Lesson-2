import data from "../../data/food.json";
import ListItem from "../ListItem/ListItem";

function italianFood() {
    return data.food.map((food) => {
      return <ListItem foodData = {food} />
    });
}

export default italianFood;