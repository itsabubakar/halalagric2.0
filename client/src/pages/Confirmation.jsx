import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Confirmation = () => {
    const cart = useSelector((state) => state.cart.cart)
    const price = useSelector((state) => state.cart.totalPrice)


    return (
        <div className="xl:px-5">
            <h2 className="text-xl font-semibold mx-5">Shopping Cart</h2>
            <div className="overflow-x-auto mt-8">
                <div className="mx-5">
                    <Link to={'/'} className="btn bg-green-500 text-white border-none rounded-none">Continue Shopping</Link>
                </div>
                <table className="table w-full mt-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart.map((item, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{item[0].name}</td>
                                <td>{item[0].price * item.count} NGN</td>
                                <td>{item.count}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="mx-5 my-10">
                    <Link to={'/payment'} className="btn w-28 bg-green-500 text-white border-none rounded-none">Pay {price}</Link>
                </div>
            </div>
        </div>
    )
}
export default Confirmation