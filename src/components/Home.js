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
                        rating={2}
                    />
                    <Product
                        title='Official The Big Bang Theory Christmas Jumper / Ugly Sweater'
                        price={35.99}
                        image={"https://cdn.shopify.com/s/files/1/0030/4227/9494/products/big-bang-theory-xmas-jumper-1_1000x.progressive.jpg?v=1611163132"}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title='Lord Of The Rings Lurtz TUBBZ Cosplaying Duck Collectible'
                        price={69.89}
                        image={"https://cdn.shopify.com/s/files/1/0030/4227/9494/products/lurtz-lotr-tubbz-1_800x.progressive.jpg?v=1631761217"}
                        rating={4}
                    />
                    <Product
                        title='Ghostbusters CosCups - Ray Stantz'
                        price={79.19}
                        image={"https://cdn.shopify.com/s/files/1/0030/4227/9494/products/ghostbusters-stantz-coscup-1_800x.progressive.jpg?v=1635193418"}
                        rating={5}
                    />

                    <Product
                        title='Official Jurassic Park 3D Desk Lamp / Wall Light'
                        price={19.99}
                        image={"https://cdn.shopify.com/s/files/1/0030/4227/9494/products/jurassic-park-lamp-upd-1_800x.progressive.jpg?v=1631761519"}
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title='Official Friends Central Perk 3D Desk Lamp / Wall Light'
                        price={29.99}
                        image={"https://cdn.shopify.com/s/files/1/0030/4227/9494/products/friends-central-perk-lamp-1_800x.progressive.jpg?v=1631761503"}
                        rating={2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
