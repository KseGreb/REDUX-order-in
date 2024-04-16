import dishesData from "../../data/dishesData"

export const CartItem = ({cartItem}) =>{
    console.log(cartItem);

    const dishes = dishesData.find(item => item.id === cartItem.dishId);
    console.log(dishes);

    return(<div>
        <p>{dishes.name}</p>
        <p> {cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price * cartItem.quantity}</p>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
    </div>)
}