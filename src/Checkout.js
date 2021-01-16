import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                {basket?.length === 0 ? (
                    <div>
                        <center><svg className="checkout_svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="140" height="140" width="140" xmlns="http://www.w3.org/2000/svg"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></svg></center>
                        <h2>Your Shopping Cart is empty</h2>
                        <center><p>You have no items in your cart.</p></center>
                        <center><Link to="/"><button className="checkout_button">Continue Shopping</button></Link></center>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout_title">Your Shopping Basket</h2>
                            {basket?.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
