import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Resume_img from '../assets/images/webp/Resume_img.webp'
import Tik_mark from '../assets/images/webp/Tik_mark.webp'
import Ellipse_10 from '../assets/images/webp/Ellipse 10 (1).png'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <div className='overflow-hidden bg_color_2'>
            <div className='py-5'>
                <div className="my_container">
                    <Row className='mb-5 pb-5 d-flex align-items-center justify-content-center'>
                        <Col lg={7} md={6} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                            <h1 className='fs_40 ff_rubik fw_500'>20+ <span className='orange'>Professionally designed</span> resume sections</h1>
                            <p className='ff_rubik fs_16 opacity pe-md-3'>Express your professional history without limitations or worry about how your resume looks</p>

                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img className='w_25px' src={Tik_mark} alt="" />
                                <p className='ff_rubik fw_400 fs_14 mb-0'>Professional sections like <span className='fw_600'>Experience, Skills, Summary </span> and <span className='fw_600'>Education</span></p>
                            </div>

                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img className='w_25px' src={Tik_mark} alt="" />
                                <p className='ff_rubik fw_400 fs_14 mb-0'>Professional sections like <span className='fw_600'>Strengths, Quotes, Books, Interests</span> and <span className='fw_600'>My Time.</span></p>
                            </div>

                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img className='w_25px' src={Tik_mark} alt="" />
                                <p className='ff_rubik fw_400 fs_14 mb-0'>Other sections like   <span className='fw_600'>Certifications, Awards, Achievements, Language </span> and <span className='fw_600'>Reference</span></p>
                            </div>

                            <div className='pt-5'>
                                <Link className='btn_1 ff_rubik fw_600 fs_16'>Get Started</Link>
                            </div>
                        </Col>

                        <Col lg={5} md={6} sm={10} className='pt-5 pt-md-0 position-relative ps-0' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                            <img className='w-100 position-relative z-1' src={Resume_img} alt="" />
                            <img className='Resume_gradient d-none d-md-block' src={Ellipse_10} alt="" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Resume