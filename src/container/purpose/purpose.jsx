import React, { useEffect, useState } from 'react';
import './purpose.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import { client } from '../../client';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Purpose = () => {


    const [purpose, setPurpose] = useState([]);

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
        }`).then((data) => setPurpose(data[0]))
            .catch(console.error)
    }, []);

    if(!purpose) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )


    return (
        <section id="about">

                    {/* About 02 */}

            {/* About 01 */}
            <div className="about-01">
                <div className="content-box-main">
                    <div className="container">
                        <div className="row">

                            {/* About Left Side */}



                            <div className="col-md-4 col-sm-4 homepage-heading-display" >
                                <div className="vertical-heading">
                                {purpose.sec2Subheading && (
                                <h5>{purpose.sec2Subheading}</h5>
                                )}
                                {purpose.sec2SubHeading2 && (
                                    <h2 style={{width: '150px'}}>{purpose.sec2SubHeading2}</h2>
                                )}
                                </div>


                            </div>

                            
                            {/* About Right Side */}

                            <div className="col-md-8 col-sm-12">
                                <div className="about-right">


                                <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                {purpose.sec2Preheading && (
                                    <h5 style={{color: '#000'}}>{purpose.sec2Preheading}</h5>
                                    )}
                                    {purpose.sec2Heading && (
                                    <h2> {purpose.sec2Heading}</h2>
                                    )}
                                </div>


                                    {purpose.sec2Description && (
                                        <p className="about-text">
                                        <ReactMarkdown 
                                            children={purpose.sec2Description} 
                                            remarkPlugins={[remarkGfm]}   
                                        />
                                         </p>
                                     )}

                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                        {purpose.sec2Link && (
                                            <a href={purpose.sec2Link} title="Read Full" style={{backgroundColor: 'none'}}><span>{purpose.sec2LinkText}</span></a>
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

export default Purpose;