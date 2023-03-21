import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setIsCartOpen, setItems } from "../redux/cartSlice"
import { useEffect, useState } from "react"
import api from './AxiosBase'

const Navbar = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)
    const cart = useSelector((state) => state.cart.cart)
    const items = useSelector((state) => state.cart.items)
    const [loggedIn, setLoggedIn] = useState(false)
    const [search, setSearch] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        console.log(userInfo);
        if (userInfo) {
            setLoggedIn(true)
        }


    }, [navigate])

    const logoutHandler = () => {
        setLoggedIn(false)
        localStorage.removeItem("userInfrso");
        navigate("/")
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log(search)
        try {
            const { data } = await api.get(`/api/allitems/search?search=${search}`)
            console.log(data)
            navigate('searchResults')
            dispatch(setItems(data))

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="navbar bg-base-100 border-b mb-8">
            <div className="flex-1">
                <Link to={'/'} className="hover:rounded-none btn btn-ghost normal-case text-xl text-green-500 rounded-none">Halal<span className="text-green-500">Agric</span></Link>
            </div>
            <div className="flex-none">

                <form onSubmit={handleSearch} className="flex items-center gap-1">
                    <input placeholder="Search food items" onChange={(e) => setSearch(e.target.value)} type="text" className="rounded h-10 w-[150px] border outline-none ring-green-500 focus:ring-2 px-2" />
                    <button onClick={handleSearch} className="btn btn-ghost btn-circle hover:bg-green-500 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>

                <div className="dropdown dropdown-end mr-2">

                    <label onClick={() => dispatch(setIsCartOpen({}))} tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item bg-green-500 border-none text-white">{cart.length}</span>
                        </div>
                    </label>
                </div>

                {
                    loggedIn ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li> <Link to="/profile">Profile</Link></li>
                            <li><Link to="/orders">Orders</Link></li> */}

                            <li onClick={logoutHandler}><a>Logout</a></li>
                        </ul>
                    </div> : <div className="flex justify-between gap-4">
                        <Link className="border-green-500 rounded-md border-2 py-2 hover:border-gray-400 px-3" to='/signin'>Sign Up</Link>
                        <Link className="border-green-500 rounded-md border-2 py-2 hover:border-gray-400 px-3" to='/login'>Log in</Link>
                    </div>
                }




            </div>
        </div>
    )
}
export default Navbar