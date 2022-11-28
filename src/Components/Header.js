import React, { useState } from 'react'

const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const openSidebar = () => {
        let sidebarr = document.getElementById('sidebar');
        sidebarr.classList.toggle('active');
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <>
            <div className='head_background fixed-top shadow-sm py-1 d-none d-lg-block'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#home"><span className='brand px-2 py-1'>Guatam_Kumar</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav" style={{ paddingLeft: 30 }}>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="#home"><span className='port_item px-2 py-1 active'>Home</span></a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="#work"><span className='port_item px-2 py-1'>Work</span></a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="#experience"><span className='port_item px-2 py-1'>Experience</span></a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="#services"><span className='port_item px-2 py-1'>Services</span></a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="#testimonial"><span className='port_item px-2 py-1'>Testimonial</span></a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="#contact"><span className='port_item px-2 py-1'>Contact</span></a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ml-5">
                                    <a className="nav-link" href="mailto:success4youmotivation@gmail.com"><span className='port_item1 px-4'>Email</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* small navbar */}

            <div className=' head_background fixed-top shadow-sm py-1 d-lg-none d-sm-block'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#home"><span className='brand px-2 py-1'>Guatam_Kumar</span></a>
                        <div className='float-right'>
                            <div className="icon_bar">
                                <span onClick={openSidebar} className="">
                                    {
                                        sidebarOpen ? (<i className="fa-solid fa-xmark menu-humberger"></i>
                                        ) : (
                                            <i className="fa-solid fa-bars menu-humberger1" ></i>
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className=''>
                <div className='sidebar' id='sidebar' style={{ marginTop: "72px" }}>
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link port_item_22 pl-3" href="#home"><i class="fa-solid fa-house"></i> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link port_item_22 pl-3" href="#work"><i className="fa-solid fa-briefcase"></i> Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link port_item_22 pl-3" href="#experience"><i className="fa-solid fa-heart"></i> Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link port_item_22 pl-3" href="#services"><i className="fa-brands fa-servicestack"></i> Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link port_item_22 pl-3" href="#testimonial"><i className="fa-solid fa-heart"></i> Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link port_item_22 pl-3" href="#contact"><i className="fa-solid fa-address-book"></i> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header