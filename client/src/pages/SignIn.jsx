import { useState } from "react"
import { Link } from "react-router-dom"
import api from "../components/AxiosBase"

const SignIn = () => {
    const [email, setEmail] = useState()
    const [pwd, setPwd] = useState()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, pwd);
        try {
            const { data } = await api.post('/api/auth/signup', { email, pwd })
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-2xl text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>


                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required={true}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />


                    <input
                        onChange={(e) => setPwd(e.target.value)}
                        type="password"
                        required={true}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link className="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}
export default SignIn