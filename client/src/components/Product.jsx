import { Link } from 'react-router-dom'

const Product = ({ id, img, name, price, category }) => {
    return (
        <Link key={id} to={`/item/${id}`}>
            <img className='w-48 h-48' src={img} alt={name} />
            <p className='text-sm text-gray-500 mt-2'>{category}</p>
            <p className='font-semibold'>Halal {name}</p>
            <p className='font-semibold text-sm'>NGN {price}</p>
        </Link>
    )
}
export default Product