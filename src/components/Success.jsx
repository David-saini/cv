import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div className='py-5 my-5'>
            <div className='my_container py-5 position-relative  z-1'>
                <div className='mx-3'>
                    <div className='box_absolute success_box' data-aos="flip-down" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">

                        <div className='d-flex align-items-center justify-content-center text-center pt-5 mt-3'>
                            <p className='ff_rubik fw_500 max_670px fs_40 text-white line_height'>Your Path to Success Starts Here: Build Your CV Today</p>
                        </div>


                        <div className='d-flex align-items-center justify-content-center text-center'>
                            <p className='ff_rubik fw_400 max_670px fs_16 text-white'> Our CV builder not only provides a user-friendly interface but also offers valuable guidance along the way.</p>
                        </div>

                        <div className='pt-4 pb-5 d-flex align-items-center justify-content-center'><Link className='btn_2 ff_rubik fw_600'>Get Started</Link></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success