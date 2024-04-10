import dishesData from "../../data/dishesData"

export const CartItem = ({cartItem}) =>{
    console.log(cartItem);

    const dishes = dishesData.find(item => item.id === cartItem.dishId);
    console.log(dishes);
    return(<div>
        <p>{dishes.name}</p>
        <p> {cartItem.quantity} portion(s)</p>
    </div>)
}