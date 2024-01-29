import React from 'react'
import { Col, Row } from 'react-bootstrap'
import man_img from '../assets/images/webp/man_img.webp'
import underline from '../assets/images/webp/underline.png'

const Tools = () => {
    return (
        <div className='overflow-hidden bg_color_2'>
            <div className='my_container py-md-5 my-md-3'>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col lg={6} md={7} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear" >
                        <h1 className='ff_rubik fw_500 fs_40 position-relative'>Powerful Tools to Create <span className='orange '>Your Standout CV</span>
                            <img className='tool_line' src={underline} alt="" />
                        </h1>

                        <p className='fw_400 ff_rubik fs_16 pe-md-4 pt-3 mt-1'>Customize your CV to reflect your <span className='fw_600'>unique personality</span> and professional brand. Choose from a wide range of <span className='fw_600'>professionally designed</span> templates and layouts, allowing you to find the <span className='fw_600'>perfect style</span> that aligns with your industry and career goals.</p>
                    </Col>
                    <Col lg={6} md={5} sm={9} className='pt-5 pt-md-0' >
                        <img className='w-100' src={man_img} alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Tools