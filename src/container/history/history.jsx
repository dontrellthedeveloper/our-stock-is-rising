import React, { useEffect, useState } from 'react';
import './history.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import { client } from '../../client';

// import Markdown from 'react-markdown'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const History = () => {


    const [history, setHistory] = useState([]);

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
            footerPreheading,
            footerHeading,
            footerDescription,
            footerCopyriight
        }`).then((data) => setHistory(data[0]))
            .catch(console.error)
    }, []);

    if(!history) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )



    return (
        <section id="about">

            {/* About 01 */}
            <div className="about-01">
                <div className="content-box-main">
                    <div className="container">
                        <div className="row">

                            {/* About Left Side */}



                            <div className="col-md-4 col-sm-4 homepage-heading-display">
                            <div className="vertical-heading">
                                    {history.sec3Subheading && (
                                        <h5>{history.sec3Subheading}</h5>
                                    )}
                                    {history.sec3SubHeading2 && (
                                        <h2 style={{width: '150px'}}>{history.sec3SubHeading2}</h2>
                                    )}
                                </div>

                            </div>

                            
                            {/* About Right Side */}
                            

                            <div className="col-md-8 col-sm-12">
                                <div className="about-right">

                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>

                                        {history.sec3Preheading && (
                                            <h5 style={{color: '#000'}}>{history.sec3Preheading}</h5>
                                        )}

                                        {history.sec3Heading && (
                                            <h2> {history.sec3Heading}</h2>
                                        )}
                                    </div>

                                    {history.sec3Description && (
                                        <p className="about-text">
                                        <ReactMarkdown 
                                            children={history.sec3Description} 
                                            remarkPlugins={[remarkGfm]}   
                                        />
                                        </p>
                                     )}
                                        

                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                            {history.sec3Link && (
                                                <a href={history.sec3Link} title="Read Full" style={{backgroundColor: 'none'}}><span>{history.sec3LinkText}</span></a>
                                            )}
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default History;