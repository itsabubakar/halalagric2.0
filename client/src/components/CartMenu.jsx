import { useDispatch, useSelector } from "react-redux"
import { setIsCartOpen } from "../redux/cartSlice"

const CartMenu = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)


    return (
        <div className={`${isCartOpen ? 'block' : 'hidden'} absolute top-0 right-0 bg-[rgb(0,0,0,0.5)] h-full w-full z-10 flex justify-end`}>
            <div className="bg-white h-full w-80 py-10 px-5">
                <div className="flex justify-between">
                    <h2>Shopping Cart</h2>
                    <button onClick={() => dispatch(setIsCartOpen({}))}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default CartMenu