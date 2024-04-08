
export const Dish = ({dish}) => {
    return(
        <div>
            <img src={`./${dish.img}.jpg`}/>
            <h2> {dish.name} </h2>
            <p>$ {dish.price}</p>
{/* TO FIX LATER */}
            <button>HOW MANY PORTIONS?</button>
            <button>ADD TO CART</button>
        </div>
    )
}