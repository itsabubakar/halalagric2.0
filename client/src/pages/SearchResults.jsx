import { useSelector } from 'react-redux'
import Product from '../components/Product'


const SearchResults = () => {
    const items = useSelector((state) => state.cart.items)


    return (
        <div className="container mt-12 mb-20">
            <div className="max-w-5xl mx-auto">
                <h2 className='my-10 text-xl'>Search results </h2>
                <div className='justify-center flex flex-wrap gap-12'>
                    {
                        items.map(({ _id, price, name, img, category }) => (
                            <Product
                                category={category}
                                id={_id}
                                price={price}
                                name={name}
                                img={img}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
export default SearchResults