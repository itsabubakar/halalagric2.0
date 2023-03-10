import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ItemDetails from "./pages/ItemDetails"
import Confirmation from "./pages/Confirmation"
import CartMenu from "./components/CartMenu"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </div>
      <Footer />
    </BrowserRouter>
  )
}
export default App