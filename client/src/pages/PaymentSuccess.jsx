import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const PaymentSuccess = () => {
    const transactionId = useSelector((state) => state.cart.transactionId)

    console.log(transactionId);

    return (
        <div>
            <div className="my-32">
                <p className="text-2xl text-center mb-4">Thank you for shopping with Halal Agric</p>
                <p className="text-2xl text-center mb-4">Payment was successful. Contact 08109680683 for more information regarding your order and delivery</p>
                <p className="text-2xl text-center mb-4">Your payment reference is: {transactionId}</p>
                <div className="flex justify-center">

                    <Link to={'/'} className="bg-green-500 border-none text-white rounded-none btn mt-6 flex justify-center w-[250px]">Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}
export default PaymentSuccess