import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/CartItems";

const inititalState = {
    cartItems: cartItems
}

export default function cartReducer(state=inititalState,{type,payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id===payload.id)
            break;
    
        default:
            break;
    }
    
}