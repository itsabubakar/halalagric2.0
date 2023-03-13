import { useLocation, useParams } from "react-router-dom"
import Tomato from '../assets/tomato.jpg'
import Product from "../components/Product"
import { useEffect, useState } from "react"
import Minus from "../assets/icons/Minus"
import Add from "../assets/icons/Add"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import api from "../components/AxiosBase"


const ItemDetails = () => {
    const { itemId } = useParams()
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const dummmyCart = useSelector((state) => state.cart.dummyData)
    const [item, setItem] = useState()

    // const item = dummmyCart.filter((item) => item.id == itemId)
    // // console.log(item)


    const findItem = async () => {
        try {
            const { data } = await api.get(`/api/allitems/oneitem?itemId=${itemId}`)
            console.log(data)
            setItem(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findItem()
    }, [])

    const addTo = () => {
        console.log('cart', cart)
        dispatch(addToCart({ item: { ...item, count } }))
    }

    return (
        <div className="my-20">
            <div className="flex flex-wrap mx-5 gap-10 xl:px-20">
                <div className="w-full lg:w-auto flex justify-center sm:block">
                    <img className="w-60 h-40" src={item?.img} alt="tomato" />
                </div>

                <div className="max-w-lg">
                    <h3 className="font-bold mb-2">Halal {item?.name}</h3>
                    <p className="font-semibold mb-2">NGN {item?.price}</p>
                    <p className="text-gray-700">
                        You save more by buying online from Halal Agric Online Supermarket.
                        It's always easy to shop here because you can browse multiple food items and compare prices .

                    </p>
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
        </div>
    )
}
export default ItemDetails