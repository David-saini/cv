import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='overflow-hidden bg_color_1'>
            <div className='py-5 my_container'>
                <h1 className='d-flex align-items-center justify-content-center ff_rubik fw_500 fs_40' data-aos="zoom-in" data-aos-delay="300" data-duration="1000" data-aos-easing="linear">Frequently Asked Questions</h1>

                <Accordion defaultActiveKey="0" className='pt-1'>
                    <Accordion.Item eventKey="0" className='mt-4 accordion_border mx-auto' data-aos="fade-down" data-aos-delay="300" data-duration="1000" data-aos-easing="linear">
                        <Accordion.Header className='px-2 ff_rubik fs_24 fw_500'>Q1. How does the CVhawk work??</Accordion.Header>
                        <Accordion.Body className='w-700px ff_rubik fw_400 text-black px-4'>
                            Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className='mt-4 accordion_border mx-auto' data-aos="fade-down" data-aos-delay="400" data-duration="1000" data-aos-easing="linear">
                        <Accordion.Header className='px-2 ff_rubik fs_24 fw_500'>Q2. Is the CVhawk completely free to use?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_rubik fw_400 text-black px-4'>
                            Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='mt-4 accordion_border mx-auto' data-aos="fade-down" data-aos-delay="500" data-duration="1000" data-aos-easing="linear">
                        <Accordion.Header className='px-2 ff_rubik fs_24 fw_500'>Q3. Can I edit my CV after I've saved it?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_rubik fw_400 text-black px-4'>
                            Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mt-4 accordion_border mx-auto' data-aos="fade-down" data-aos-delay="600" data-duration="1000" data-aos-easing="linear">
                        <Accordion.Header className='px-2 ff_rubik fs_24 fw_500'>Q4. Can I import my existing CV into the builder?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_rubik fw_400 text-black px-4'>
                            Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='mt-4 accordion_border mx-auto' data-aos="fade-down" data-aos-delay="700" data-duration="1000" data-aos-easing="linear">
                        <Accordion.Header className='px-2 ff_rubik fs_24 fw_500'>Q5. Is my personal information safe and secure?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_rubik fw_400 text-black px-4'>
                            Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='mt-4 accordion_border mx-auto' data-aos="fade-down" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <Accordion.Header className='px-2 ff_rubik fs_24 fw_500'>Q6. What kind of templates are available in the CV builder?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_rubik fw_400 text-black px-4'>
                            Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Faq