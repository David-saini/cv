import React from 'react'
import { Link } from 'react-router-dom'
import { Close, Manu } from './Icon'
import { useState } from 'react'
import logo from '../assets/images/webp/Logo.webp'
import header_gradient from '../assets/images/webp/Header-gradient.webp'

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='overflow-hidden pt-2'>

            {/* nav */}
            <div className='my_container pb-5'>
                <div className='d-flex align-items-center justify-content-between pb-5'>
                    <img src={logo} alt="Logo" />

                    <div className='d-lg-none d-block'>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100 position-relative'
                                onClick={() => setMenu(false)}>
                                <div className='absolute-cross'>
                                    <Link><Close /></Link>
                                </div>
                            </div>
                        </div>

                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100'
                                onClick={() => setMenu(false)}>
                                <div className='absolute-cross'>
                                    <Link><Close /></Link>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-5'>
                                <ul className='d-flex align-items-center gap-5 mb-0'>
                                    <li><a href='#destination' className='text_white ff-montserrat fs-16px fw-600'>All Flight</a></li>
                                    <li><a href='#schedule' className='text_white ff-montserrat fs-16px fw-600'>Schedule</a></li>
                                    <li><a href='#passengers' className='text_white ff-montserrat fs-16px fw-600'>Passengers</a></li>
                                    <li><a href='#your_order' className='text_white ff-montserrat fs-16px fw-600'>Your Orders</a></li>
                                </ul>
                                <Link className='btn_1 ff_Lato fs_16px fw-500 ff-montserrat'>Let’s Fly</Link>
                            </div>
                        </div>
                    </div>
                    <div className='d-lg-block d-none'>
                        <ul className='d-flex align-items-center gap_40 mb-0'>
                            <li><a className='black ff_rubik fs_16 fw_400' href='#Home'>Home</a></li>
                            <li><a href='#About' className='black ff_rubik fs_16 fw_400'>About</a></li>
                            <li><a className='black ff_rubik fs_16 fw_400' href='#help'>We’ll help you</a></li>
                            <li><a href='#Testimonials' className='black ff_rubik fs_16 fw-400'>Testimonials</a></li>
                        </ul>

                        <Link className='btn_1 ff-montserrat fw-600'>Let’s Fly</Link>

                    </div>
                    <div className='d-lg-none z-1'>
                        <Link onClick={() => setMenu(true)}>
                            <Manu /></Link>
                    </div>
                </div>



















                <div className='d-flex align-items-center justify-content-center text-center pt-5 mt-5'>
                    <h1 className='ff_rubik fw-600 fs_52 text-black max_760px'>Unlock Your Potential with a Professional CV Builder</h1>
                </div>
                <div className='d-flex align-items-center justify-content-center text-center'>
                    <h1 className='ff_rubik fw_400 fs_16 text-black max_560px pt-2'>Our user-friendly platform guides you through the process, allowing you to customize every section to align with your unique career goals.</h1>
                </div>

                <div className='d-flex align-items-center justify-content-center pt-4 pb-5 mb-5 mt-2 gap-2'>
                    <Link className='btn_1 ff_rubik fw_600'>Get Started</Link>
                    <Link className='btn_1 ff_rubik fw_600'>Watch Demo</Link>
                </div>


            </div>
            {/* nav */}

        </div>
    )
}

export default Header