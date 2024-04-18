import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { getCartItems, getTotalPrice, removeAllIems } from "../../redux/cartSlice"

export const Cart = () =>{

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();

    return(<div>
        <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
        <h2>YOUR TOTAL: ${totalPrice}</h2>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        <button onClick={()=>{dispatch(removeAllIems())}}>EMPTY YOUR CART</button>
    </div>)
}