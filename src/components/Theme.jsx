import React from 'react'
import Slider from "react-slick";
import { Col, Row } from 'react-bootstrap'
import Theme_img from '../assets/images/webp/Theme.webp'
import theme_1 from '../assets/images/webp/Black.webp'
import Customize from '../assets/images/webp/Customize.webp'
import Copies from '../assets/images/webp/Copies.webp'
import Template from '../assets/images/webp/Template.webp'
import Version from '../assets/images/webp/Version.webp'
import Ellipse_8 from '../assets/images/webp/Ellipse 8.png'
import Ellipse_13 from '../assets/images/webp/Ellipse 13.png'

const Theme = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.05,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
        ]

    };

    return (
        <div className='overflow-hidden position-relative bg_color_1'>
            <img className='Ellipse_8 d-none d-md-block' src={Ellipse_8} alt="" />
            <img className='Ellipse_13 d-none d-md-block' src={Ellipse_13} alt="" />
            <div className='my_container py-5 my-5'>
                <Row className='d-flex justify-content-center py-5'>
                    <Col lg={6} className='px-0 position-relative z-1'>
                        <img className='w-100' src={Theme_img} alt="" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear" />
                    </Col>

                    <Col lg={6}>
                        <Slider {...settings}>

                            <div className='py-3'>
                                <div className='theme_box' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                                    <div className='d-flex align-items-center justify-content-center pt-4 pb-3'>
                                        <img src={theme_1} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center pt-1 pb-3'>
                                        <p className='d-flex align-items-center justify-content-center ff_rubik fw_500 fs_22'>Themes</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-3'>
                                <div className='theme_box' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                                    <div className='d-flex align-items-center justify-content-center pt-4 pb-3'>
                                        <img src={Customize} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center pb-3'>
                                        <p className='d-flex align-items-center justify-content-center ff_rubik fw_500 fs_22'>Customize</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-3'>
                                <div className='theme_box' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                                    <div className='d-flex align-items-center justify-content-center pt-4 pb-3'>
                                        <img src={Copies} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center pb-3'>
                                        <p className='d-flex align-items-center justify-content-center ff_rubik fw_500 fs_22'>Make copies</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-3' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                                <div className='theme_box'>
                                    <div className='d-flex align-items-center justify-content-center pt-4 pb-3'>
                                        <img src={Template} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center pt-1 pb-3'>
                                        <p className='d-flex align-items-center justify-content-center ff_rubik fw_500 fs_22'>Templates</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-3' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                                <div className='theme_box'>
                                    <div className='d-flex align-items-center justify-content-center pt-4 pb-3'>
                                        <img src={Version} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center pt-1 pb-3'>
                                        <p className='d-flex align-items-center justify-content-center ff_rubik fw_500 fs_22'>Version</p>
                                    </div>
                                </div>
                            </div>

                        </Slider>

                        <p className='ff_rubik fs_16 max-490px pt-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Theme