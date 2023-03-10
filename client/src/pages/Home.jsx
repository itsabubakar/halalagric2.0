import { Link } from "react-router-dom"
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {

    return (
        <div className="container mx-auto">
            <Hero />
            <Products />
        </div>
    )
}
export default Home