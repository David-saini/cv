import React from 'react'
import Slider from "react-slick";
import arrow from '../assets/images/webp/arrow.png'
import Darrell_Steward from '../assets/images/webp/Darrell Steward.png'
import Savannah_Nguyen from '../assets/images/webp/Savannah Nguyen.png'
import Esther_Howard from '../assets/images/webp/Esther Howard.png'
import Jenny_Wilson from '../assets/images/webp/Jenny Wilson.png'
import Wade_Warren from '../assets/images/webp/Wade Warren.png'
import { Col, Row } from 'react-bootstrap'
import { NextBtn, PrevBtn, Star } from './Icon'


const Client = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='overflow-hidden bg_color_2'>
            <div className='my_container py-5 my-3'>
                <h1 className='ff_rubik fs_40 fw_500 d-flex align-items-center justify-content-center'>What our Clients Say</h1>
                <Slider {...settings}>


                    <div>
                        <Row className='pt-5'>
                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Darrell_Steward} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Darrell Steward</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Savannah_Nguyen} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Savannah Nguyen</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Esther_Howard} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Esther Howard</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='pt-5 d-flex align-items-center justify-content-center'>
                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Jenny_Wilson} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Jenny Wilson</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Wade_Warren} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Wade Warren</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>




                    <div>
                        <Row className='pt-5'>
                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Darrell_Steward} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Darrell Steward</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Savannah_Nguyen} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Savannah Nguyen</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Esther_Howard} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Esther Howard</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='pt-5 d-flex align-items-center justify-content-center'>
                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Jenny_Wilson} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Jenny Wilson</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Wade_Warren} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Wade Warren</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>




                    <div>
                        <Row className='pt-5'>
                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Darrell_Steward} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Darrell Steward</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Savannah_Nguyen} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Savannah Nguyen</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Esther_Howard} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Esther Howard</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='pt-5 d-flex align-items-center justify-content-center'>
                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Jenny_Wilson} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Jenny Wilson</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Wade_Warren} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Wade Warren</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row className='pt-5'>
                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Darrell_Steward} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Darrell Steward</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Savannah_Nguyen} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Savannah Nguyen</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Esther_Howard} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Esther Howard</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='pt-5 d-flex align-items-center justify-content-center'>
                            <Col lg={4}>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Jenny_Wilson} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Jenny Wilson</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} className='pt-4'>
                                <div className='Client_box position-relative' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                                    <p className='ff_rubik fw_400 fs_16 opacity mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='clinet_arrow' src={arrow} alt="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear" />
                                </div>
                                <div className='d-flex align-items-center gap-3 pt-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="linear">
                                    <img src={Wade_Warren} alt="" />
                                    <div className='mb-0'>
                                        <p className=' ff_rubik fw_400 fs_22 mb-0'>Wade Warren</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>


                </Slider>
            </div>
        </div>
    )
}

export default Client