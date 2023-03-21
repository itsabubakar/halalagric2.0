import { Link } from 'react-router-dom'

const Product = ({ id, img, name, price, category }) => {
    console.log(id)
    return (
        <Link key={id} to={`/item/${id}`}>
            <div className='shadow-md border pb-2'>

                <img className='w-48 h-48' src={img} alt={name} />
                <p className='capitalize px-2 text-sm text-gray-500 mt-2'>{category}</p>
                <p className='px-2 font-semibold'>Halal {name}</p>
                <p className='px-2 font-semibold text-sm'>NGN {price}</p>
            </div>
        </Link>
    )
}
export default Product