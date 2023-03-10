import { useState } from "react"
import Product from "./Product"

const Products = () => {
    const [firstTab, setfirstTab] = useState(true)
    const [secondTab, setSecondTab] = useState(false)
    const [thirdTab, setThirdTab] = useState(false)

    const showActive = (e) => {
        setfirstTab(false)
        setSecondTab(false)
        setThirdTab(false)
        const foo = e.target.parentElement.children
        for (let item of foo) {
            item.classList.remove('tab-active')
        }
        if (e.target.classList.contains('first')) {
            console.log('first')
            setfirstTab(true)
        }
        if (e.target.classList.contains('second')) {
            console.log('second')
            setSecondTab(true)
        }
        if (e.target.classList.contains('third')) {
            console.log('third')
            setThirdTab(true)
        }
        e.target.classList.add('tab-active')
    }
    return (
        <div className="my-10 flex flex-col items-center">
            <h2 className="text-center text-2xl mb-4">Our Products</h2>
            <div className="tabs gap-5">
                <a onClick={showActive} className={`first tab tab-bordered tab-active`}>Tab 1</a>
                <a onClick={showActive} className="second tab tab-bordered">Tab 2</a>
                <a onClick={showActive} className="third tab tab-bordered">Tab 3</a>
            </div>
            <div className="w-full my-10">
                <div className={`w-full justify-center flex flex-wrap gap-12  ${firstTab ? 'block' : 'hidden'}`}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className={`w-full justify-center flex flex-wrap gap-12  ${secondTab ? 'block' : 'hidden'}`}>
                    <Product />
                    <Product />
                </div>
                <div className={`w-full justify-center flex flex-wrap gap-12  ${thirdTab ? 'block' : 'hidden'}`}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

            </div>
        </div>
    )
}
export default Products