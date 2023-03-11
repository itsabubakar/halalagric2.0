import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setIsCartOpen } from "../redux/cartSlice"

const Navbar = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)
    const cart = useSelector((state) => state.cart.cart)


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'} className="hover:rounded-none btn btn-ghost normal-case text-xl text-green-500 rounded-none">Halal<span className="text-green-500">Agric</span></Link>
            </div>
            <div className="flex-none ">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <div className="dropdown dropdown-end mr-2">
                    <label onClick={() => dispatch(setIsCartOpen({}))} tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item bg-green-500 border-none text-white">{cart.length}</span>
                        </div>
                    </label>

                </div>

            </div>
        </div>
    )
}
export default Navbar