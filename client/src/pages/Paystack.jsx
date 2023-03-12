import PaystackPop from '@paystack/inline-js'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { emptyItems, setTransactionId } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Paystack = () => {
    const price = useSelector((state) => state.cart.totalPrice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // formik logic
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            phone: "",
            amount: price,
        },

        // submit form
        onSubmit: (values) => {
            console.log(values)

            const paystack = new PaystackPop()
            paystack.newTransaction({
                key: 'pk_test_886a2504096c40d75a18f0da8efa0866801730a1',
                amount: price * 100,
                email: values.email,
                firstname: values.firstname,
                lastname: values.lastname,
                onSuccess(transaction) {
                    dispatch(emptyItems())
                    dispatch(setTransactionId(transaction.reference))
                    navigate('/payment/success')
                    console.log('Payment success ' + transaction.reference);
                },
                onCancel() {
                    console.log('Payment failed');

                }
            })
        }
    })

    return (
        // < !--component -- >
        <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold">Please fill in your information to continue</h1>

                <form onSubmit={formik.handleSubmit} className="mt-6">

                    {/* Names */}
                    <div className="flex justify-between gap-3 mb-4">
                        <span className="w-1/2">
                            <label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                            <input
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                id="firstname" type="text" name="firstname" placeholder="Hauwa" autocomplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        </span>
                        <span className="w-1/2">
                            <label for="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                            <input
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="lastname" type="text" name="lastname" placeholder="Hyatudeen" autocomplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        </span>
                    </div>

                    {/* Email */}
                    <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email" type="email" name="email" placeholder="Hauwa.Hyatudeen@abc.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />

                    {/* Amount */}
                    <label for="amount" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Amount</label>
                    <input
                        readOnly value={price} id="amount" type="text" name="amount" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />

                    {/* Phone number */}
                    <label for="phone" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</label>
                    <input
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="phone" type="text" name="phone" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />

                    {/* Shipping address */}
                    <label for="address" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Shipping Address</label>
                    <input
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="address" type="text" name="address" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />

                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-500 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none mb-4">
                        Pay NGN {price}
                    </button>

                </form>
            </div>
        </div>

    )
}
export default Paystack