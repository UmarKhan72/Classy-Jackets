import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import logo from './Images/logo.png';

function Header() {

    const [{ basket }] = useStateValue();

    return (
        <div className="header">

            <center>
                <Link to="/"><img className="header_logo" src={logo} alt="" /></Link>
            </center>

            <div className="header_nav">

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="36" color="#111" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    );
}

export default Header;
