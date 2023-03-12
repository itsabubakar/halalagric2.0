import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ItemDetails from "./pages/ItemDetails"
import Confirmation from "./pages/Confirmation"
import CartMenu from "./components/CartMenu"
import Footer from "./components/Footer"
import Paystack from "./pages/Paystack"
import PaymentSuccess from "./pages/PaymentSuccess"



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <div className="container mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="checkout" element={<Confirmation />} />
            <Route path="payment" element={<Paystack />} />
            <Route path="payment/success" element={<PaymentSuccess />} />
          </Routes>
        </div>
        <CartMenu />
        <Footer />
      </div>

    </BrowserRouter>
  )
}
export default App