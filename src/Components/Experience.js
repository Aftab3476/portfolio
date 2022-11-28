import React, { useEffect } from 'react'
import AOS from "aos";

const Experience = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div id='experience'>
                <div className='container'>
                    <h2 className=' text-center'><u>Experience</u></h2>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-6 col-12 left_border d-none d-md-block'>
                            <div className=''>
                                <div className='card py-2 px-3 card_exp' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000">
                                    <div className=''>
                                        <h5 className='my-1'><b>Age Calculator</b></h5>
                                        <p className='my-0'>05/08/2022</p>
                                    </div>
                                </div>
                                <div className=' card py-2 px-3 mt-5 card_exp' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <div className=''>
                                        <h5 className='my-1'><b>News Update</b></h5>
                                        <p className='my-0'>05/09/2022</p>
                                    </div>
                                </div>
                                <div className=' card py-2 px-3 mt-5 card_exp' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="2000">
                                    <div className=''>
                                        <h5 className='my-1'><b>To Do App</b></h5>
                                        <p className='my-0'>05/10/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-md-none d-sm-block'>
                            <div className='pad_card'>
                                <div className='card py-2 px-3 card_exp1' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="2000">
                                    <div className=''>
                                        <h5 className='my-1'><b>Age Calculator</b></h5>
                                        <p className='my-0'>05/08/2022</p>
                                    </div>
                                </div>
                                <div className=' card py-2 px-3 mt-4 card_exp1' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <div className=''>
                                        <h5 className='my-1'><b>News Update</b></h5>
                                        <p className='my-0'>05/09/2022</p>
                                    </div>
                                </div>
                                <div className=' card py-2 px-3 mt-4 card_exp1' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000">
                                    <div className=''>
                                        <h5 className='my-1'><b>To Do App</b></h5>
                                        <p className='my-0'>05/10/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <div className=''>
                                <div className='card py-2 px-3 card_exp1' style={{ marginTop: 65 }} data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="2000">
                                    <div className=''>
                                        <h5 className='my-1'><b>The Calculator</b></h5>
                                        <p className='my-0'>05/11/2022</p>
                                    </div>
                                </div>
                                <div className=' card py-2 px-3 card_exp1' style={{ marginTop: 40 }} data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <div className=''>
                                        <h5 className='my-1'><b>The Quiz</b></h5>
                                        <p className='my-0'>05/12/2022</p>
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

export default Experience