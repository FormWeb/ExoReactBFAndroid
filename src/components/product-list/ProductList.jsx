import ProductListItem from "./ProductListItem"

const ProductList = (props) => {

    // Props
    const {products} = props

    const productsJSX = products.map(
        p => <ProductListItem key={p.id} name={p.name} price={p.price} promo={p.promo}></ProductListItem>
    )

    return (
        <div>
            {productsJSX}
        </div>
    )
}

export default ProductList