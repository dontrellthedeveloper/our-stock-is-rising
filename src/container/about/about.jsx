import React, { useEffect, useState } from 'react';
import './about.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdOutlineTipsAndUpdates} from 'react-icons/md'
import {urlFor, client} from "../../client";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const About = () => {

    const [about, setAbout] = useState([]);

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
        }`).then((data) => setAbout(data[0]))
            .catch(console.error)
    }, []);

    if(!about) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )



    return (
        <section id="about">
            {/* About 02 */}
            <div className="about-02">
                <div className="content-box-main-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <a href={about.boxLink} style={{textDecoration: 'none'}}>

                                    <div className="about-item text-center about-h">
                                        <AiOutlineLineChart className="react-icon-about"></AiOutlineLineChart>
                                        {about.boxheading && (
                                        <h3>{about.boxheading}</h3>
                                        )}
                                        <hr/>
                                        {about.boxtext && (
                                            <p>
                                                <ReactMarkdown 
                                                children={about.boxtext} 
                                                remarkPlugins={[remarkGfm]}   
                                                />
                                            </p>
                                        )}
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a href={about.boxLink2} style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        {about.boxheading2 && (
                                            <h3>{about.boxheading2}</h3>
                                        )}
                                        <hr/>
                            
                                        {about.boxtext2 && (
                                            <p>
                                                <ReactMarkdown 
                                                children={about.boxtext2} 
                                                remarkPlugins={[remarkGfm]}   
                                                />
                                            </p>
                                        )}
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a href={about.boxLink3} style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <MdOutlineTipsAndUpdates className="react-icon-about"></MdOutlineTipsAndUpdates>
                                        {about.boxheading3 && (
                                        <h3>{about.boxheading3}</h3>
                                        
                                        )}
                                        <hr/>
                                        {about.boxtext3 && (
                                            <p>
                                                <ReactMarkdown 
                                                children={about.boxtext3} 
                                                remarkPlugins={[remarkGfm]}   
                                                />
                                            </p>
                                        )}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* About 01 */}
            <div className="about-01">
                <div className="content-box-main">
                    <div className="container">
                        <div className="row">

                            {/* About Left Side */}



                            <div className="col-md-4 col-sm-4 homepage-heading-display">
                                <div className="vertical-heading">
                                {about.secSubheading && (
                                    <h5>{about.secSubheading}</h5>
                                    )}
                                    {about.secSubHeading2 && (
                                    <h2 style={{width: '150px'}}>{about.secSubHeading2}</h2>
                                    )}
                                </div>

                            </div>

                            
                            {/* About Right Side */}

                            <div className="col-md-8 col-sm-12">
                                <div className="about-right">
                                <div className="horizontal-heading main-about" style={{color: '#000'}}>

                                {about.secPreheading && (
                                    <h5 style={{color: '#000'}}>{about.secPreheading}</h5>
                                    )}
                                    {about.secHeading && (
                                    <h2> {about.secHeading}</h2>
                                    )}
                                </div>
                                    {about.secDescription && (
                                    <p className="about-text">
                                    <ReactMarkdown 
                                            children={about.secDescription} 
                                            remarkPlugins={[remarkGfm]}   
                                        />
                                     </p>
                                     )}
                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                        {about.secLink && (
                                            <a href={about.secLink} target='_blank' title="Read Full" style={{backgroundColor: 'none'}}><span>{about.secLinkText}</span></a>
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

export default About;