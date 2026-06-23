import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};



const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Se Agrega una función reductora para agregar item al carrito
        addItemToCart(state, action) {
            // Verifica si el item existe y le suma uno a la cantidad o lo agrega
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        // función reductora para remover un item del carro
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        // función que limpia el carrito de compras
        clearCart(state) {
            state.cartItems = [];
        },
        // función para aumentar la cantidad del item seleccionado
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        // función para disminuir la cantidad del item seleccionado  
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
    }
});


export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;



