import React, { useEffect, useState } from 'react'
import images from '../Assets/vg.png'
import AOS from "aos";
import toast from 'react-hot-toast';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(name, email, message);
        toast.success('Message sent')
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <>
            <div id='contact'>
                <div className='container mt-5 mb-5'>
                    <h3 className='text-center mt-5 d-md-none d-sm-block'><b><u>CONTACT ME</u></b></h3>
                    <div className='row justify-content-center mt-5 row_colum'>
                        <div className='col-md-6 col-12 card_colors' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className=''>
                                <h3 className='text-center mt-5 d-none d-md-block'><b><u>CONTACT ME</u></b></h3>
                                <form onSubmit={submitHandler}>
                                    <div className='mt-5'>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required className='form-control input_form' />
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' required className='form-control input_form mt-4' />
                                        <textarea className="form-control input_form mt-4" value={message} onChange={(e) => setMessage(e.target.value)} rows="6" id="" placeholder="Enter Your Message" required></textarea>
                                        <button className='btn btn-warning btn-block mt-4 input_forms'><b>SEND</b></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6 col-12' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <img src={images} alt="logo" className='img-fluid img_contact' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact