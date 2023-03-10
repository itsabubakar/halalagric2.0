import { useParams } from "react-router-dom"

const ItemDetails = () => {
    const { itemId } = useParams()
    console.log(itemId)
    return (
        <div>
            Fuck
        </div>
    )
}
export default ItemDetails