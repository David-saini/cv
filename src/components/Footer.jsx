import React from 'react'
import { Col, Row } from 'react-bootstrap'
import fotterlogo from '../assets/images/webp/footer_logo.webp'
import Footer_line from '../assets/images/png/Footer_line.png'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, Twitter } from './Icon'
const Footer = () => {
    return (
        <div className='overflow-hidden'>
            <div className='bg-black position-relative'>
                <img className='Footer_line w-100' src={Footer_line} alt="" />
                <div className="my_container">
                    <Row className='pt_5 d-flex align-items-baseline justify-content-between'>
                        <Col md={4}>
                            <img src={fotterlogo} alt="" />
                            <p className='ff_rubik Fw_400 fs_16 text-white'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat id facilisis.</p>
                            <div className='d-flex align-items-center gap-4 pt-3 order-1'>
                                <Link><Twitter /></Link>
                                <Link><Facebook /></Link>
                                <Link><Instagram /></Link>
                            </div>
                        </Col>

                        <Col lg={6} md={8} xs={12} className='order-2'>
                            <Row>
                                <Col md={3} xs={5} className='d-flex justify-content-md-center justify-content-start px-0 pt-md-0 pt-4'>
                                    <ul>
                                        <li className='text-white ff_rubik fs_16 fw_500'>Quick Links</li>
                                        <li className='pt-3 mt-1'><Link className='white ff_rubik fs_16 fw_400'>Home</Link></li>
                                        <li className='pt-3 mt-1'><Link className='white ff_rubik fs_16 fw_400'>About</Link></li>
                                        <li className='pt-3 mt-1'><Link className='white ff_rubik fs_16 fw_400'>We’ll help you</Link></li>
                                        <li className='pt-3 mt-1'><Link className='white ff_rubik fs_16 fw_400'>Testimonials</Link></li>
                                    </ul>
                                </Col>

                                <Col md={5} xs={7} className='d-flex justify-content-md-center justify-content-start px-0 pt-md-0 pt-4'>
                                    <ul>
                                        <li className='text-white ff_rubik fs_16 fw_500'>Support</li>
                                        <li className='pt-3 mt-1'>
                                            <Link className='white ff_rubik fs_16 fw_400 d-flex align-items-baseline gap-2'>
                                                <Link><Phone /></Link>
                                                <p>+012 345 67890</p>
                                            </Link>
                                        </li>

                                        <li className='pt-3 mt-1'>
                                            <Link className='white ff_rubik fs_16 fw_400 d-flex align-items-baseline gap-2'>
                                                <Link><Mail /></Link>
                                                <p>Cvhawk@gmail.com</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>

                                <Col md={4} className='d-flex justify-content-md-center justify-content-start px-0 pt-md-0 pt-4'>
                                    <ul>
                                        <li className='text-white ff_rubik fs_16 fw_500'>Legal</li>
                                        <li className='pt-3 mt-1'><Link className='white ff_rubik fs_16 fw_400'>Privacy Policy</Link></li>
                                        <li className='pt-3 mt-1'><Link className='white ff_rubik fs_16 fw_400'>Terms & conditions</Link></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <p className='text-white d-flex align-items-center justify-content-center ff_rubik fw_500 fs_16 pb-3 mb-0'>Copyright@CVhawk2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer