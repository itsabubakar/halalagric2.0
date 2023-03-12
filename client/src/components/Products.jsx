import { useState } from "react"
import Product from "./Product"
import { useSelector } from "react-redux"

const Products = () => {
    const [firstTab, setfirstTab] = useState(true)
    const [secondTab, setSecondTab] = useState(false)
    const [thirdTab, setThirdTab] = useState(false)
    const [forth, setForthTab] = useState(false)

    const dummyData = useSelector((state) => state.cart.dummyData)


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
        if (e.target.classList.contains('forth')) {
            console.log('third')
            setForthTab(true)
        }

        e.target.classList.add('tab-active')
    }
    return (
        <div className="my-10 flex flex-col items-center">
            <h2 className="text-center text-2xl mb-4">Our Products</h2>
            <div className="tabs gap-5">
                <a onClick={showActive} className={`first tab tab-bordered tab-active`}>Groceries</a>
                <a onClick={showActive} className="second tab tab-bordered">Fresh food and poltry</a>
                <a onClick={showActive} className="third tab tab-bordered">Staple food</a>
                <a onClick={showActive} className="fourth tab tab-bordered">Herbs</a>
            </div>
            <div className="w-full my-10">
                <div className={`w-full justify-center flex flex-wrap gap-12  ${firstTab ? 'block' : 'hidden'}`}>
                    {
                        dummyData.map((data) => {
                            return <Product id={data.id} />
                        })
                    }

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