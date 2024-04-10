import { useState } from "react"
import { ChangeQuantity } from "../Cart/ChangeQuantity"

export const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    return(
        <div>
            <img src={`./${dish.img}.jpg`}/>
            <h2> {dish.name} </h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button>ADD TO CART</button>
        </div>
    )
}