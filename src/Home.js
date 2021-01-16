import React from 'react';
import Product from './Product';
import './Home.css';
import Banner from './Images/banner8.jpg'
import Jac1 from './Images/jac3.png';
import Jac2 from './Images/jac6.png';
import Jac3 from './Images/jac10.png';
import Jac4 from './Images/wjac1.png';
import Jac5 from './Images/wjac2.png';
import Jac6 from './Images/wjac3.png';
import Jac7 from './Images/jac7.png';
import Jac8 from './Images/jac8.png';
import Jac9 from './Images/jac9.png';
import Jac10 from './Images/wjac6.png';
import Jac11 from './Images/wjac5.png';
import Jac12 from './Images/wjac4.png';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src={Banner} alt="" />


            <h1 className="home_h1">FEATURED PRODUCTS</h1>

            <div className="home_row">
                <Product
                    id="4903850"
                    title="Francis B-3 Distressed Black Leather Bomber Jacket"
                    price={349.99}
                    image={Jac1}
                />
                <Product
                    id="23445930"
                    title="MFrancis B-3 Brown Leather Bomber Jacket"
                    price={349.99}
                    image={Jac2}
                />
                <Product
                    id="3254354345"
                    title="Charcoal Black Suede Biker Jacket"
                    price={269.99}
                    image={Jac3}
                />
            </div>


            <div className="home_row">
                <Product
                    id="4903850"
                    title="Selina Black Leather Blazer"
                    price={261.99}
                    image={Jac4}
                />
                <Product
                    id="23445930"
                    title="County Tan Overlap Leather Jacket"
                    price={299.99}
                    image={Jac5}
                />
                <Product
                    id="3254354345"
                    title="Nexi Quilted Maroon Leather Jacket"
                    price={299.99}
                    image={Jac6}
                />
            </div>

            <h1 className="home_h1">POPULAR PRODUCTS</h1>

            <div className="home_row">
                <Product
                    id="12321341"
                    title="Rumano Jae Maroon Leather Biker Jacket"
                    price={336.99}
                    image={Jac7}
                />
                <Product
                    id="49538094"
                    title="Alberto Shearling Black Leather Jacket"
                    price={314.99}
                    image={Jac8}
                />
                <Product
                    id="5846730"
                    title="Coffner Brown Shearling Fur Jacket"
                    price={289.99}
                    image={Jac9}
                />
            </div>




            <div className="home_row">
                <Product
                    id="8765012"
                    title="Sandy Tan Dye Leather Coat"
                    price={411.99}
                    image={Jac10}
                />
                <Product
                    id="2570168"
                    title="Lana Silver Leather Bomber Jacket"
                    price={299.99}
                    image={Jac11}
                />
                <Product
                    id="3019722"
                    title="Orient Grain Quilted Black Leather Biker Jacket"
                    price={336.99}
                    image={Jac12}
                />
            </div>

        </div>
    )
}

export default Home;