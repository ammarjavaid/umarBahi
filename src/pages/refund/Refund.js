import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { HiReceiptRefund } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlinePriceChange } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { FcSearch } from "react-icons/fc";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import "./Refund.scss"

const Refund = () => {

    const [click, setClick] = useState(false);
    const clicked = () => {
        setClick(!click);
    }

    return (
        <div className='container-fluid px-0 main'>
            <div className='right'>
                <div className="navbar">
                    <div className='container'>
                        <div className='icons' onClick={clicked}>
                            {click ? <FaTimes className='time' /> : <FaBars className='bar' />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <h4> ADMIN PANEL </h4>
                            <li className='nav-items'>
                                <a href='#about'><MdDashboard className='icon' /> Dashboard </a>
                            </li>
                            <li className='nav-items'>
                                <a href='#blog'><BsFillBagCheckFill className='icon' /> Order </a>
                            </li>
                            <li className='nav-items'>
                                <a href='#pricing'><HiReceiptRefund className='icon' /> Refund </a>
                            </li>
                            <li className='nav-items'>
                                <a href='#contact'><MdPayment className='icon' /> Payment </a>
                            </li>
                            <li className='nav-items'>
                                <a href='#login'><BsFillChatLeftTextFill className='icon' /> Chat </a>
                            </li>
                            <li className='nav-items'>
                                <a href='#login'><AiFillSetting className='icon' /> Setting </a>
                            </li>
                            <div className='login_side'>
                                <div className='price'> <h5><MdOutlinePriceChange style={{ fontSize: "28px", marginBottom: "4px" }} className="pri" /> 50.42$ </h5> </div>
                                <div className='login-btn'> <h5><FiLogIn /> Logout </h5> </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='left'>
                <div className='header'>
                    <div className='dash'>
                        <h4> DASHBOARD </h4>
                    </div>
                    <div className='login'>
                        <div className='price'> <h5><MdOutlinePriceChange style={{ fontSize: "28px", marginBottom: "4px" }} /> 50.42$ </h5> </div>
                        <div className='login-btn'> <h5><FiLogIn /> Logout </h5> </div>
                    </div>
                </div>
                

                <div className='left_content'>


                    <div className='box_main'>
                    <div className="box">
                        <div className='right_side'>
                            <h5> Umar Aftab </h5>
                            <h5> Order Total: <span> 25$ </span> </h5>
                            <h5> Delivery Date: <span> 25-08-2022 </span> </h5>
                        </div>
                        <div className='left_side'>
                            <div className='three'>
                                <div className='three_content'>
                                    <FcSearch className='glass' />
                                    <p> Detail </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <br />

                    <div className='box_main'>
                    <div className="box">
                        <div className='right_side'>
                            <h5> Umar Aftab </h5>
                            <h5> Order Total: <span> 25$ </span> </h5>
                            <h5> Delivery Date: <span> 25-08-2022 </span> </h5>
                        </div>
                        <div className='left_side'>
                            <div className='three'>
                                <div className='three_content'>
                                    <FcSearch className='glass' />
                                    <p> Detail </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <br />

                    <div className='box_main'>
                    <div className="box">
                        <div className='right_side'>
                            <h5> Umar Aftab </h5>
                            <h5> Order Total: <span> 25$ </span> </h5>
                            <h5> Delivery Date: <span> 25-08-2022 </span> </h5>
                        </div>
                        <div className='left_side'>
                            <div className='three'>
                                <div className='three_content'>
                                    <FcSearch className='glass' />
                                    <p> Detail </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Refund