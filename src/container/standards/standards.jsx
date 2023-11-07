import React, { useEffect, useState } from 'react';
import './standards.scss';

import {images} from "../../constants";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { client } from '../../client';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Standards = () => {
    const [standards, setStandards] = useState(null);
    const [home, setHome] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "standards"] | order(order asc)`
        ).then((data) => {
            setStandards(data)
        })

    }, []);




    useEffect(() => {
        client.fetch(`*[_type == "homepage"] | order(orderRank) {
            tagline,
            _id,
            hpbuttonLink,
            hpbuttonText,
            boxheading,
            boxtext,
            boxLink,
            boxheading2,
            boxtext2,
            boxLink2,
            boxheading3,
            boxtext3,
            boxLink3,
            secPreheading,
            secHeading,
            secDescription,
            secLink,
            secLinkText,
            secSubheading,
            secSubHeading2,
            sec2Preheading,
            sec2Heading,
            sec2Description,
            sec2Link,
            sec2LinkText,
            sec2Subheading,
            sec2SubHeading2,
            sec3Preheading,
            sec3Heading,
            sec3Description,
            sec3Link,
            sec3LinkText,
            sec3Subheading,
            sec3SubHeading2,
            statement,
            standardsTitle,
            footerPreheading,
            footerHeading,
            footerDescription,
            footerCopyriight
        }`).then((data) => setHome(data[0]))
            .catch(console.error)
    }, []);

    if(!home || !standards) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )


    return (
        <section id="brands">
            <div className="content-box-md-brands">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="horizontal-heading" style={{marginBottom: '40px'}}>
                            {home.standardsTitle && (
                                <h2 className="brand-thin"> <strong className="brand-bold">{home.standardsTitle} </strong></h2>
                             )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                items='5'
                                autoplay
                            smartSpeed='700'
                            loop
                            autoplayHoverPause='true'
                            width='1000'
                            nav
                            dots='true'
                            autoWidth='true'
                            margin={20}

                            id="clients-list" className="owl-carousel owl-theme"
                                responsive={{
                                    0: {
                                        items: 2
                                    },
                                    480: {
                                        items: 2
                                    },
                                    768: {
                                        items: 3
                                    },
                                    1000: {
                                        items: 5
                                    },
                                    1200: {
                                        items: 5
                                    },
                                }}
                            >

                                {standards.map((standard, index) => (
                                <div key={standard.title + index} className="item client">
                                    <div class="basic-card basic-card-aqua " >
                                        <div class="card-content">
                                            <div style={{width: '200px', margin: '0 auto'}}>
                                            {standard.title && (
                                            <span class="card-title">{standard.title} </span>
                                            )}
                                            </div>
                                            {/* <br/> */}
                                            {/* <span class="card-text">English </span> */}

                                            {standard.description && (
                                            <p class="card-text">
                                            {/* {standard.description}      */}
                                            <ReactMarkdown 
                                            children={standard.description} 
                                            remarkPlugins={[remarkGfm]}   
                                        />                                  
                                        </p>
                                            )}
                                        </div>

                            
                        
                                        <div class="card-link">
                                        {standard.standardsLink && (
                                            <a href={standard.standardsLink} title="Read Full"><span>Learn More</span></a>
                                            )}
                                        </div>
                                    </div>
                
                                </div>
                                ))}
                                {/* <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
                                        <div class="card-content">
                                            <span class="card-title">ELA-LITERACY <br/> (SL.6.5)</span>
                                            <p class="card-text">
                                            Include multimedia components and visual displays in presentations to clarify information.                                            </p>
                                        </div>
                        
                                        <div class="card-link">
                                            <a href="https://www.thecorestandards.org/" title="Read Full"><span>Read Full</span></a>
                                        </div>
                                    </div>
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
                                        <div class="card-content">
                                            <span class="card-title">ELA-LITERACY <br/> (W.6.4)</span>
                                            <p class="card-text">
                                            Produce clear and coherent writing.
	Math (Revised 2017)
                                            </p>
                                        </div>
                        
                                        <div class="card-link">
                                            <a href="https://www.thecorestandards.org/" title="Read Full"><span>Read Full</span></a>
                                        </div>
                                    </div>
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
                                        <div class="card-content">
                                            <span class="card-title">ANALYZE DATA <br/> (6.SP.1c) </span>
                                            <p class="card-text">
                                            Select appropriate graphical methods and numerical measures to analyze data.                                            </p>
                                        </div>
                        
                                        <div class="card-link">
                                            <a href="https://www.thecorestandards.org/" title="Read Full"><span>Read Full</span></a>
                                        </div>
                                    </div>
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
                                        <div class="card-content">
                                            <span class="card-title">SCIENTIFIC <br/> INQUIRY </span>
                                            <p class="card-text">
                                            Use appropriate mathematics tools and techniques to gather data and information.                                            </p>
                                        </div>
                        
                                        <div class="card-link">
                                            <a href="https://www.thecorestandards.org/" title="Read Full"><span>Read Full</span></a>
                                        </div>
                                    </div>
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
                                        <div class="card-content">
                                            <span class="card-title">ECONOMICS <br/> STRAND </span>
                                            <p class="card-text">
                                            Markets (15) – The interaction of supply and demand, influenced by competition, helps to determine price in a market.                                            </p>
                                        </div>
                        
                                        <div class="card-link">
                                            <a href="https://www.thecorestandards.org/" title="Read Full"><span>Read Full</span></a>
                                        </div>
                                    </div>
                
                                </div> */}


                            </OwlCarousel>
                        </div>
                    </div>
                    {/* <div class="category-name">Basic Cards</div> <br/>
            
                    <div class="card-category-1">
                        
                        <div class="basic-card basic-card-aqua">
                            <div class="card-content">
                                <span class="card-title">Card Title</span>
                                <p class="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
            
                            <div class="card-link">
                                <a href="#" title="Read Full"><span>Read Full</span></a>
                            </div>
                        </div>
            
                        <div class="basic-card basic-card-lips">
                            <div class="card-content">
                                <span class="card-title">Card Title</span>
                                <p class="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
            
                            <div class="card-link">
                                <a href="#" title="Read Full"><span>Read Full</span></a>
                            </div>
                        </div>
            
                        <div class="basic-card basic-card-light">
                            <div class="card-content">
                                <span class="card-title">Card Title</span>
                                <p class="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
            
                            <div class="card-link">
                                <a href="#" title="Read Full"><span>Read Full</span></a>
                            </div>
                        </div>
            
                        <div class="basic-card basic-card-dark">
                            <div class="card-content">
                                <span class="card-title">Card Title</span>
                                <p class="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
            
                            <div class="card-link">
                                <a href="#" title="Read Full"><span>Read Full</span></a>
                            </div>
                        </div>
                        
                    </div> */}
            
            <br/>
                </div>
            </div>
        </section>
    );
};

export default Standards;