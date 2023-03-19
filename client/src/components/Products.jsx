import { useEffect, useState } from "react"
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux"
import api from "./AxiosBase"
import { setItems } from '../redux/cartSlice'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    const [firstTab, setfirstTab] = useState(true)
    const [secondTab, setSecondTab] = useState(false)
    const [thirdTab, setThirdTab] = useState(false)
    const [forthTab, setForthTab] = useState(false)
    const [loading, setLoading] = useState(false)

    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const fetchItem = async () => {
        setLoading(true)
        try {
            const { data } = await api.get('/api/allitems')
            dispatch(setItems(data))
            setLoading(false)

            console.log(herbs)

        } catch (error) {
            setLoading(false)

            console.log(error)
        }
    }

    useEffect(() => {
        fetchItem()
    }, [dispatch])

    const freshFoodAndPoltry = items.filter(
        (item) => item.category === "Fresh food and poltry"
    )

    const groceries = items.filter(
        (item) => item.category === "groceries"
    )

    const stapleFood = items.filter(
        (item) => item.category === "staple food"
    )

    const herbs = items.filter(
        (item) => item.category === "herbs"
    )




    const showActive = (e) => {
        setfirstTab(false)
        setSecondTab(false)
        setThirdTab(false)
        setForthTab(false)
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
            console.log('forthTab')
            setForthTab(true)
        }

        e.target.classList.add('tab-active')
    }
    return (
        <div className="my-10 flex flex-col items-center">
            <h2 className="text-center text-2xl mb-4 ">Our Products</h2>
            <div className="tabs justify-center gap-5">
                <a onClick={showActive} className={`first tab tab-bordered tab-active`}>Fresh food and poltry</a>
                <a onClick={showActive} className="second tab tab-bordered">Groceries</a>
                <a onClick={showActive} className="third tab tab-bordered">Staple food</a>
                <a onClick={showActive} className="forth tab tab-bordered">Herbs</a>
            </div>
            <div className="w-full my-10">
                <div className={`w-full justify-center flex flex-wrap gap-12  ${firstTab ? 'block' : 'hidden'}`}>

                    {loading ? freshFoodAndPoltry.map(({ _id, price, name, img, category }) => {
                        return <SkeletonTheme baseColor="#d5dfd8" highlightColor="#dcf8dc">
                            <div className="flex flex-col">
                                <div className="">
                                    <Skeleton width={200} height={192} />
                                </div>
                                <div className="mt-1">
                                    <Skeleton height={5} width={100} count={1} />
                                </div>
                                <div className="mt-[-15px]">
                                    <Skeleton height={8} width={200} count={1} />
                                </div>
                                <div className="mt-[-10px]">
                                    <Skeleton height={5} width={200} count={1} />
                                </div>

                            </div>
                        </SkeletonTheme>
                    }) : freshFoodAndPoltry.map(({ _id, price, name, img, category }) => {
                        return <div key={_id}><Product
                            category={category}
                            id={_id}
                            price={price}
                            name={name}
                            img={img}
                        />
                        </div>
                    })}

                </div>

                <div className={`w-full justify-center flex flex-wrap gap-12  ${secondTab ? 'block' : 'hidden'}`}>
                    {loading ? groceries.map(({ _id, price, name, img, category }) => {
                        return <SkeletonTheme baseColor="#d5dfd8" highlightColor="#dcf8dc">
                            <div className="flex flex-col">
                                <div className="">
                                    <Skeleton width={200} height={192} />
                                </div>
                                <div className="mt-1">
                                    <Skeleton height={5} width={100} count={1} />
                                </div>
                                <div className="mt-[-15px]">
                                    <Skeleton height={8} width={200} count={1} />
                                </div>
                                <div className="mt-[-10px]">
                                    <Skeleton height={5} width={200} count={1} />
                                </div>

                            </div>
                        </SkeletonTheme>
                    }) : groceries.map(({ _id, price, name, img, category }) => {
                        return <div key={_id}><Product
                            category={category}
                            id={_id}
                            price={price}
                            name={name}
                            img={img}
                        />
                        </div>
                    })}
                </div>
                <div className={`w-full justify-center flex flex-wrap gap-12  ${thirdTab ? 'block' : 'hidden'}`}>
                    {loading ? stapleFood.map(({ _id, price, name, img, category }) => {
                        return <SkeletonTheme baseColor="#d5dfd8" highlightColor="#dcf8dc">
                            <div className="flex flex-col">
                                <div className="">
                                    <Skeleton width={200} height={192} />
                                </div>
                                <div className="mt-1">
                                    <Skeleton height={5} width={100} count={1} />
                                </div>
                                <div className="mt-[-15px]">
                                    <Skeleton height={8} width={200} count={1} />
                                </div>
                                <div className="mt-[-10px]">
                                    <Skeleton height={5} width={200} count={1} />
                                </div>

                            </div>
                        </SkeletonTheme>
                    }) : stapleFood.map(({ _id, price, name, img, category }) => {
                        return <div key={_id}><Product
                            category={category}
                            id={_id}
                            price={price}
                            name={name}
                            img={img}
                        />
                        </div>
                    })}
                </div>

                <div className={`w-full justify-center flex flex-wrap gap-12  ${forthTab ? 'block' : 'hidden'}`}>
                    {loading ? herbs.map(({ _id, price, name, img, category }) => {
                        return <SkeletonTheme baseColor="#d5dfd8" highlightColor="#dcf8dc">
                            <div className="flex flex-col">
                                <div className="">
                                    <Skeleton width={200} height={192} />
                                </div>
                                <div className="mt-1">
                                    <Skeleton height={5} width={100} count={1} />
                                </div>
                                <div className="mt-[-15px]">
                                    <Skeleton height={8} width={200} count={1} />
                                </div>
                                <div className="mt-[-10px]">
                                    <Skeleton height={5} width={200} count={1} />
                                </div>

                            </div>
                        </SkeletonTheme>
                    }) : herbs.map(({ _id, price, name, img, category }) => {
                        return <div key={_id}><Product
                            category={category}
                            id={_id}
                            price={price}
                            name={name}
                            img={img}
                        />
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}
export default Products