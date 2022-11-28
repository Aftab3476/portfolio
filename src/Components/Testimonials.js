import React from 'react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
    return (
        <>
            <div id='testimonial'>
                <div className='container pb-5' style={{ marginTop: 100 }}>
                    <h2 className='text-center'><u><b>Testimonials</b></u></h2>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-12'>
                            <div className='card card_colors'>
                                <div className='row justify-content-center' style={{ marginTop: 100, marginBottom: 100 }}>
                                    <div className='col-lg-9 col-md-9 col-12'>
                                        <div className=' row justify-content-center'>
                                            {
                                                TestimonialsCard.map((curElem, ind) => (
                                                    <div className='col-lg-4 col-md-6 col-10 mb-5' key={ind}>
                                                        <div className='card card_datas pb-5'>
                                                            <div className='text-center pb-5'>
                                                                <img src={curElem.imgSrc} alt="logo" className='img_fluids' />
                                                                <div className='pb-5 text-center px-2'>
                                                                    <h4 className='pt-4'>{curElem.name}</h4>
                                                                    <p className=''>{curElem.feedback}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
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

export default Testimonials