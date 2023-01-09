import React from "react";
import Logo from "./images/electon-logo.png"
import { Google, Facebook, Whatsapp } from "react-bootstrap-icons";

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-sub-container">
                <h2>Subscribe newsletter</h2>
                <div className="footer-input-flex">
                    <input type="text" />
                    <div className="footer-input-rest">

                    </div>

                </div>
            </div>
            <div className="footer-rest-container">
                <div className="footer-left">
                    <img src={Logo} alt="" />
                    <p>64 st james boulevard hoswick , ze2 7zj</p>
                    <hr />
                    <div className="footer-icons">
                       <Google/>
                       <Facebook/>
                       <Whatsapp/>

                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <h2>Find Product</h2>
                        <ul className="footer-ul">
                            <li className="footer-li">Brownze arnold</li>
                            <li className="footer-li">Smart Phone</li>
                            <li className="footer-li">Laptop</li>
                            <li className="footer-li">Pizza</li>
                            <li className="footer-li">Cakes</li>
                            <li className="footer-li">Brownies</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Find Product</h2>
                        <ul className="footer-ul">
                            <li className="footer-li">Brownze arnold</li>
                            <li className="footer-li">Smart Phone</li>
                            <li className="footer-li">Laptop</li>
                            <li className="footer-li">Pizza</li>
                            <li className="footer-li">Cakes</li>
                            <li className="footer-li">Brownies</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Find Product</h2>   
                        <ul className="footer-ul">
                            <li className="footer-li">Brownze arnold</li>
                            <li className="footer-li">Smart Phone</li>
                            <li className="footer-li">Laptop</li>
                            <li className="footer-li">Pizza</li>
                            <li className="footer-li">Cakes</li>
                            <li className="footer-li">Brownies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer