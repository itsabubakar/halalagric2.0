import { Link } from 'react-router-dom'
import Tomato from '../assets/tomato.jpg'

const Product = ({ id }) => {
    return (
        <Link key={id} to={`/item/${id}`}>
            <img className='w-48 h-48' src={Tomato} alt='tomato' />
            <p className='text-sm text-gray-500 mt-2'>Vegetables</p>
            <p className='font-semibold'>Halal Tomatos</p>
            <p className='font-semibold'>600</p>
        </Link>
    )
}
export default Product