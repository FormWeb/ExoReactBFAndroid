const ProductListItem = (props) => {

    // Props
    const {name, price, promo} = props

    return (
        <div>
            <h4>{name}</h4>
            <p className={promo && "red"}>{price}</p>
            <p className={promo ? "red" : "blue"}>{price}</p>
        </div>
    )
}

export default ProductListItem