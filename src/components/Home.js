import "./Home.css";
import Product from "./Product/Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt="prime-banner" src="https://m.media-amazon.com/images/I/81pXJW9qztL._QL85_V1_.jpg" />
                <div className="home__row">
                    <Product 
                        title='The lean startup' 
                        price={29.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"} 
                        rating={4} 
                        />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
