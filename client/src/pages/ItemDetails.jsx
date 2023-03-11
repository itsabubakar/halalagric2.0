import { useParams } from "react-router-dom"
import Tomato from '../assets/tomato.jpg'
import Product from "../components/Product"
import { useState } from "react"
import Minus from "../assets/icons/Minus"
import Add from "../assets/icons/Add"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartSlice"

const ItemDetails = () => {
    const { itemId } = useParams()
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const dummmyCart = useSelector((state) => state.cart.dummyData)

    const item = dummmyCart.filter((item) => item.id == itemId)
    // console.log(item)


    const addTo = () => {
        console.log('cart', cart)
        dispatch(addToCart({ item: { ...item, count } }))
    }

    return (
        <div className="my-10">
            <div className="flex gap-10">
                <div className="w-full lg:w-auto">
                    <img className="w-60 h-40" src={Tomato} alt="tomato" />
                </div>

                <div className="max-w-lg">
                    <h3 className="font-bold mb-2">Halal Tomatos</h3>
                    <p className="font-semibold mb-2">600</p>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et, dolorem fugit quos rem blanditiis maxime, fuga esse dolor commodi, eius expedita vero mollitia quasi sit molestiae debitis quis facilis?</p>
                    <div className="flex gap-5 items-center">
                        <div className="flex justify-between my-3 py-1 px-2 border-2 w-24">
                            <button onClick={() => setCount(Math.max(count - 1, 0))}><Minus /></button>
                            <p className="text-gray-900">{count}</p>
                            <button onClick={() => setCount(count + 1)}><Add /></button>
                        </div>
                        <button
                            onClick={addTo}
                            className="btn rounded-none bg-green-500 text-white border-none min-h-0 h-10">Add to cart</button>
                    </div>

                </div>
            </div>
            <div className="my-14">
                <h3 className="text-center mb-8 text-xl font-semibold">Other Products</h3>
                <div className={` w-full justify-center flex flex-wrap gap-12`}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>

        </div>
    )
}
export default ItemDetails