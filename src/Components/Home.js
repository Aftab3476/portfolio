import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import Aftab from '../Assets/gaut.png'

const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (val) => (clientCount.current.textContent = val.toFixed())
        })
    };

    const animationProjectsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (val) => (projectCount.current.textContent = val.toFixed())
        })
    };
    const animation = {
        h2: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        },

    }
    return (
        <>
            <div id='home'>
                <div className='container-fluid'>
                    <div className='row justify-content-center px-4 row_colum' style={{ paddingTop: 130 }}>
                        <div className='col-lg-5 col-md-6 col-12 mb-4'>
                            <div className=''>
                                <motion.h2 {...animation.h2}>
                                    <span style={{ fontSize: 25 }}>Hi, I Am</span> <br /> <b>Mr Gautam Kumar</b>
                                </motion.h2>
                                <Typewriter options={{
                                    strings: ["A Website Developer", "A Responsive Designer", "A Content Creater"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "",
                                    wrapperClassName: "typewriterpara"
                                }} />
                                <div className='d-flex mt-2'>
                                    <a className="nav-link text-dark py-0 pl-0" href="mailto:success4youmotivation@gmail.com"><span className='port_item2 px-4 py-1'>Hire Me</span></a>
                                    <a className="nav-link text-dark py-0 ml-3" href="#work"><span className='pro_ject'>Projects <BsArrowUpRight /></span></a>
                                </div>
                                <div className='card px-2 cards_item mt-4'>
                                    <h5 className='pt-3'><b>+<motion.span ref={clientCount} whileInView={animationClientsCount}></motion.span></b></h5>
                                    <h3 className='py-0'>Clients Worldwide...</h3>
                                </div>
                                <div className='card px-2 cards_item mt-3'>
                                    <h5 className='pt-3'><b>+<motion.span ref={projectCount} whileInView={animationProjectsCount}></motion.span></b></h5>
                                    <h3 className='py-0'>Project Done...</h3>
                                </div>
                                <div className='card px-2 cards_item mt-3'>
                                    <h5 className='pt-3'><b>Contact</b></h5>
                                    <h6 className='py-0 success'>success4youmotivation@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-12 mb-3'>
                            <div className='text-center'>
                                <div className='img_circle'></div>
                                <img src={Aftab} alt="aftab" className='img-fluid img_css' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center' >    
                    <BsChevronDown className='icon_down' />
                </div>
            </div>

        </>
    )
}

export default Home