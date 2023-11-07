import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight,
    FaInstagram, FaRegEye, FaRegHandshake,
    FaTiktok,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import {images} from "../constants";

import './scss/Gallery.scss';

import {Services, Statement, About as AboutSection, Brands} from "../container";


import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";
import videoBgMp4 from "../assets/our-stock-is-rising.mp4";
import {AiOutlineLineChart} from "react-icons/ai";


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function ProfessionalDevelopment() {
    const [pd, setPd] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();




    useEffect(() => {
        client.fetch(`*[_type == "pd" && slug.current == 'professional-development']{
            name,
            _id,
            slug,
            preheading,
            heading,
            description,
            mailLink,
            mailText       
        }`).then((data) => setPd(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!pd) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )
    // if(!services) return <div>Loading.....</div>


    return (
        <>

            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>
                <div id="home-overlay-2"></div>
            </section>

            <div className="map-color-3" >
                <div className="row" style={{marginRight: '0'}}>
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {pd.name}
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <section id="about" style={{height: 'calc(100vh - 140px)', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                        <div className="row" style={{justifyContent:'center'}}>
                           
                            
                            {/* Right Side */}
                            <div className="col-md-10 col-sm-10" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>{pd.preheading}</h5>
                                        <h2> <strong ></strong>{pd.heading}</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>


                                    <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>
                      
                                    <ReactMarkdown 
                                                children={pd.description} 
                                                remarkPlugins={[remarkGfm]}   
                                                />
                                    </p>
                                    
                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>


                                    {/* <div className='show-button-page'>

                                        <hr style={{margin: '1rem'}}/>
                                    
                                        <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                            <div class="card-link-b" style={{padding: '7px', borderTop: '0', }}>
                                                <a href={pd.mailLink} title="Read Full" style={{backgroundColor: 'none'}}><span>{pd.mailText}</span></a>
                                            </div>
                                        </div>

                                        <hr style={{margin: '1rem'}}/>

                                    </div> */}
                                                                   
                                                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Statement/>


        </>
    );
}

export default ProfessionalDevelopment;