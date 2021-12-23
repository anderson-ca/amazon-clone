import "./Product.css"

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__info">
                    The lean startup
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                </div>
            </div>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg" 
                alt=""
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
