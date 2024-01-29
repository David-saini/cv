import React from 'react'
import { Col, Row } from 'react-bootstrap'
import applying_form from '../assets/images/webp/applying_form.webp'
import Tik_mark from '../assets/images/webp/Tik_mark.webp'

const JobApplySec = () => {
    return (
        <div className='overflow-hidden bg_color_1'>
            <div className='py-5'>
                <div className="my_container">
                    <Row className='py-5 d-flex align-items-center justify-content-md-between justify-content-center flex-md-row flex-column-reverse'>
                        <Col lg={5} md={6} sm={10} className='pt-5 pt-md-0' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                            <img className='w-100' src={applying_form} alt="" />
                        </Col>
                        <Col md={6} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear">
                            <h1 className='ff_Rubik fw_600 fs_40'>Resume trailoring based on the <span className='orange'>job you’re applying</span> for</h1>
                            <p className='opacity ff_rubik fw_400 fs_16 pt-4'>Quickly ensure that your resume covers key skills and experience by pasting the job ad you’re applying for</p>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <img className='w_25px' src={Tik_mark} alt="" />
                                <p className='opacity mb-0 ff_rubik fs_16 fw_400'>Skills and experience analysis</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <img className='w_25px' src={Tik_mark} alt="" />
                                <p className='opacity mb-0 ff_rubik fs_16 fw_400'>Actionable Checklist of what else to add to your resume</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <img className='w_25px' src={Tik_mark} alt="" />
                                <p className='opacity mb-0 ff_rubik fs_16 fw_400'>Instant comparison between your resume and the job posting</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default JobApplySec