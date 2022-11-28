import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import projectData from "../Components/Data"

const Work = ({Data}) => {
    return (
        <>
            <div className='container mt-5' id='work'>
                <h2 className='text-center'><u>Work</u></h2>
                <div className='row justify-content-center my-5'>
                    <div className='col-md-10 col-11 '>
                        {
                            Data.map((curElm, ind) => (
                                <div className='crad card_work2 pt-3 pb-2 mb-5' key={ind}>
                                        <div className='row justify-content-center p-3' >
                                            <div className='col-lg-7 col-md-7 col-12'>
                                                <div className='card card_list'>
                                                    <img src={curElm.imgUrl} alt="title" className="img-fluid img_data" />
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-md-7 col-12'>
                                                <div className='text-center pt-5'>
                                                    <h3><b>{curElm.title}</b></h3>
                                                    <p>{curElm.discription}</p>
                                                    <a href={curElm.url} target={"blank"} className="nav-link mt-4"><span className='btn_primarys px-5 py-1'>View Demo</span></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Work