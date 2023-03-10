import { useParams } from "react-router-dom"
import Tomato from '../assets/tomato.jpg'
import Product from "../components/Product"

const ItemDetails = () => {
    const { itemId } = useParams()
    console.log(itemId)
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