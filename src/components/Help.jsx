import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Help_img from '../assets/images/webp/Help_img.webp'
import Ellipse_9 from '../assets/images/webp/Ellipse 9.webp'
import Ellipse_10 from '../assets/images/webp/Ellipse 10.png'
import { Link } from 'react-router-dom'

const Help = () => {
    return (
        <div className='overflow-hidden bg_color_1 position-relative'>
            <img className='Ellipse_9 d-none d-md-block' src={Ellipse_9} alt="" />
            <img className='Ellipse_10 d-none d-md-block' src={Ellipse_10} alt="" />
            <div className="py-5 my_container my-5">
                <Row className='py-5 d-flex align-items-center justify-content-center flex-column-reverse flex-md-row'>
                    <Col lg={6} md={5} sm={9} className='pt-5 pt-md-0' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear" >
                        <img className='w-100' src={Help_img} alt="" />
                    </Col>
                    <Col lg={6} md={7} data-aos="fade-left" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear" >
                        <h3 className='fs_40 ff_rubik fw_500'>We’ll help you</h3>
                        <p className='fs_16 ff_rubik opacity pt-2'>Once you've booked a session, a confirmation email will be sent to the provided email address, containing all the necessary details, including the date, time, and instructions for the session.</p>

                        <div className='pt-4 '><Link className='btn_1 ff_rubik fw_600 fs_16'>Book a Call</Link></div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Help