import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
    transactionId: [],
    totalPrice: [],
    dummyData: [
        { price: 600, name: 'Tomato', id: 1, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 2, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 3, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 4, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 5, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 6, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 7, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
        { price: 600, name: 'Tomato', id: 8, desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' },
    ]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        emptyItems: (state, action) => {
            state.cart = []
        },
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item]
        },
        removeFromCart: (state, action) => {
            console.log(action.payload);
            state.cart = state.cart.filter((item) => item._id !== action.payload.id)
        },
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item._id === action.payload.id) {
                    item.count++
                }
                return item
            })
        },
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item._id === action.payload.id && item.count > 1) {
                    item.count--
                }
                return item
            })
        },
        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        totalCartPrice: (state, action) => {
            state.totalPrice = action.payload
        },
        setTransactionId: (state, action) => {
            state.transactionId = action.payload
        }
    }
})

export const {
    setItems,
    setTransactionId,
    addToCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    removeFromCart,
    totalCartPrice,
    emptyItems
} = cartSlice.actions

export default cartSlice.reducer