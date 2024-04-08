import { Dish } from "./Dish"
import dishesData from "../../data/DataDishes"

export const Dishes = () =>{
    return(<div>
        Dishes!
    
        {dishesData.map(dish => <Dish dish={dish}/>)}

    </div>)
}