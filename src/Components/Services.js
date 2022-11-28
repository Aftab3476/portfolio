import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from 'react-icons/ai'
import AOS from "aos";


const Services = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <div className='back_clr d-none d-md-block mb-5'>
                <div id='services'>
                    <div className='container py-5'>
                        <h2 className='text-center text-white'><u>Services</u></h2>
                        <div className='row justify-content-center pt-5'>
                            <div className='col-lg-5 col-md-10 col-12 mb-3' data-aos="fade-right" data-aos-duration="3000">
                                <div className='card card_web'>
                                    <motion.div className='text-center pading_card'>
                                        <h3 className='five_plus'>5+</h3>
                                        <h6 className='years_exp'>Years Of Experience</h6>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-10 col-12' data-aos="fade-down-right" data-aos-duration="3000">
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-12 mb-2'>
                                        <div className='card card_web'>
                                            <motion.div className='text-center py-3'>
                                                <AiFillIeCircle className='ai_icon' />
                                                <h6 className='pt-3 card_dep'>Web Developement</h6>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12' data-aos="fade-down-left" data-aos-duration="3000">
                                        <div className='card card_web ' >
                                            <motion.div className='text-center py-3' >
                                                <AiFillAndroid className='ai_icon' />
                                                <h6 className='pt-3 card_dep'>App Developement</h6>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="3000">
                                    <div className='card card_web mt-3'>
                                        <motion.div className='text-center py-4'>
                                            <AiFillWindows className='ai_icon' />
                                            <h6 className='pt-3 card_dep'>Desktop Developement</h6>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second part of services */}

            <div className='back_clr mt-5 d-md-none d-sm-block mb-5'>
                <div id='services'>
                    <div className='container py-5'>
                        <h2 className='text-center text-white'><u>Services</u></h2>
                        <div className='row justify-content-center pt-5'>
                            <div className='col-lg-5 col-md-10 col-12 mb-3' data-aos="fade-right" data-aos-duration="3000">
                                <div className='card card_web'>
                                    <motion.div className='card_web1 text-center pading_card'>
                                        <h3 className='five_plus'>5+</h3>
                                        <h6 className='years_exp'>Years Of Experience</h6>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-10 col-12' data-aos="fade-down-right" data-aos-duration="3000">
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-12 mb-2'>
                                        <div className='card card_web'>
                                            <motion.div className='card_web1 text-center py-3'>
                                                <AiFillIeCircle className='ai_icon' />
                                                <h6 className='pt-3 card_dep'>Web Developement</h6>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12' data-aos="fade-down-left" data-aos-duration="3000">
                                        <div className='card card_web ' >
                                            <motion.div className='card_web1 text-center py-3' >
                                                <AiFillAndroid className='ai_icon' />
                                                <h6 className='pt-3 card_dep'>App Developement</h6>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up-left" data-aos-duration="3000">
                                    <div className='card card_web mt-3'>
                                        <motion.div className='card_web1 text-center py-4'>
                                            <AiFillWindows className='ai_icon' />
                                            <h6 className='pt-3 card_dep'>Desktop Developement</h6>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services