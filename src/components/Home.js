import "./Home.css";
import Product from "./Product";

const Home = () => {
    return (
        <div className="home__container">
            <img className="home__image" alt="prime-banner" src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/the-boys-amazon-original-banner-2.jpg?itok=mr64n-yN" />
            <div className="home__row">
                <Product />
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
    )
}

export default Home
