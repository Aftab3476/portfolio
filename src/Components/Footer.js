import React from 'react'
import gautam from '../Assets/gaut.png'

const Footer = () => {
    return (
        <>
            <div className='footer_color pb-0 d-none d-lg-block'>
                <div className='container pt-3'>
                    <div className='row justify-content-center pt-5'>
                        <div className='col-lg-8 col-md-6 col-12 text-center'>
                            <div className='left_data'>
                                <div className='data_center'>
                                    <div className='circle'>
                                        <img src={gautam} alt="gautam" className='imgfluid' />
                                    </div>
                                </div>
                                <h3 className='pt-4 text-white'>Gautam Kumar</h3>
                                <h5 className='text-white'>Motivation is temporary, but discipline last forever</h5>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='text-center'>
                                <h4 className='text-white'><b>Social Media</b></h4>
                                {/* <p className='aero_icon px-2 pt-1'><i class="fa-solid fa-arrow-up"></i></p> */}
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <a href="https://www.youtube.com/@success4youmotivation869/videos" target={"blank"} className='nav-link py-0 my-4'><i class="fa-brands fa-youtube icon_fontasm"></i></a>
                                        <a href="https://www.linkedin.com/in/md-aftab-alam-459184231/" target={"blank"} className='nav-link py-0 my-4'><i class="fa-brands fa-linkedin-in icon_fontasm1"></i></a>
                                        <a href="https://www.instagram.com/" target={"blank"} className='nav-link py-0 my-4'><i class="fa-brands fa-instagram icon_fontasm3"></i></a>
                                        <a href="https://github.com/" target={"blank"} className='nav-link py-0 my-4'><i class="fa-brands fa-github icon_fontasm2"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='text-center text-white'>Copyright © All rights reserved Gautam Kumar</p>
                    </div>
                </div>
                <div className='aero_up ml-3 pr-2 d-none d-lg-block'>
                    <a href="#home" className='nav-link'><i class="fa-solid fa-arrow-up arow_icon"></i></a>
                </div>
            </div>

            {/* second footer colors */}

            <div className='footer_color pb-0 d-lg-none d-sm-block'>
                <div className='container pt-3'>
                    <div className='row justify-content-center pt-5'>
                        <div className='col-lg-8 col-md-6 col-12 text-center'>
                            <div className=''>
                                <div className='data_center'>
                                    <div className='circle'>
                                        <img src={gautam} alt="gautam" className='imgfluid' />
                                    </div>
                                </div>
                                <h3 className='pt-4 text-white'>Gautam Kumar</h3>
                                <h5 className='text-white'>Motivation is temporary, but discipline last forever</h5>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='text-center'>
                                <h4 className='text-white pt-4'><b>Social Media</b></h4>
                                <ul className='navbar-nav'>
                                    <li className=' nav_item'>
                                        <a href="https://www.youtube.com/@success4youmotivation869/videos" target={"blank"} className='nav-link py-0 my-4 mx-3'><i class="fa-brands fa-youtube icon_fontasm"></i></a>
                                        <a href="https://www.linkedin.com/in/md-aftab-alam-459184231/" target={"blank"} className='nav-link py-0 my-4 mx-3'><i class="fa-brands fa-linkedin-in icon_fontasm1"></i></a>
                                        <a href="https://www.instagram.com/" target={"blank"} className='nav-link py-0 my-4 mx-3'><i class="fa-brands fa-instagram icon_fontasm3"></i></a>
                                        <a href="https://github.com/" target={"blank"} className='nav-link py-0 my-4 mx-3'><i class="fa-brands fa-github icon_fontasm2"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='text-center text-white pt-3'>Copyright © All rights reserved Gautam Kumar</p>
                    </div>
                </div>
                <div className='aero_up ml-3 pr-2 d-lg-none d-sm-block'>
                <a href="#home" className='nav-link'><i class="fa-solid fa-arrow-up arow_icon"></i></a>
            </div>
            </div>
        </>
    )
}

export default Footer