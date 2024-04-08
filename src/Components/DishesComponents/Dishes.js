import { Dish } from "./Dish"
import dishesData from "../../data/dishesData"

export const Dishes = () =>{
    return(<div>
    
        {dishesData.map(dish => 
            <Dish dish={dish}/>
        )}

    </div>)
}