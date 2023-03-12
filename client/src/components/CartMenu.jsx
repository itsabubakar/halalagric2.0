import { useDispatch, useSelector } from "react-redux"
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen, totalCartPrice } from "../redux/cartSlice"
import Close from "../assets/icons/Close"
import Tomato from '../assets/tomato.jpg'
import Minus from "../assets/icons/Minus"
import Add from "../assets/icons/Add"
import { useNavigate } from 'react-router-dom'

const CartMenu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)
    const cart = useSelector((state) => state.cart.cart)
    const price = useSelector((state) => state.cart.totalPrice)


    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item[0].price;
    }, 0);
    dispatch(totalCartPrice(totalPrice))

    return (
        <div className={`${isCartOpen ? 'block' : 'hidden'} absolute top-0 right-0 bg-[rgb(0,0,0,0.5)] h-full w-full z-20 flex justify-end`}>
            <div className="bg-white h-full w-80 py-10 px-5">
                <div className="flex justify-between">
                    <h2>Shopping Cart {cart.length > 0 && cart.length}</h2>
                    <button onClick={() => dispatch(setIsCartOpen({}))}><Close /></button>
                </div>

                {/* Shopping cart items */}
                <div className="my-10">
                    {
                        cart.map((item) => (
                            <div className="flex gap-5 my-4">
                                <div>
                                    <img className="w-24 h-24" src={Tomato} alt="tomato" />
                                </div>
                                <div key={item.id}>
                                    <div className="flex justify-between w-full gap-8">
                                        <h3 className="font-semibold">Halal {item[0].name}</h3>
                                        <button onClick={() => dispatch(removeFromCart({ id: item[0].id }))}><Close /></button>
                                    </div>
                                    <p className="font-medium">{item.count * item[0].price}</p>
                                    <div className="flex justify-between my-3 py-1 px-2 border-2 w-24">
                                        <button onClick={() =>
                                            dispatch(decreaseCount({ id: item[0].id }))
                                        }><Minus /></button>
                                        <p className="text-gray-900">{item.count}</p>
                                        <button onClick={() =>
                                            dispatch(increaseCount({ id: item[0].id }))
                                        }><Add /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* subtotal */}
                <div className="flex justify-between my-4">
                    <p className="text-gray-900 text-2xl">Subtotal</p>
                    <p className="text-gray-900 text-2xl">{price}</p>
                </div>
                <div className="">
                    <button onClick={() => {
                        navigate(`/checkout`)
                        dispatch(setIsCartOpen({}))
                    }
                    } className="btn rounded-none bg-green-500 text-white border-none w-full">Check out</button>
                </div>
            </div>
        </div>
    )
}
export default CartMenu