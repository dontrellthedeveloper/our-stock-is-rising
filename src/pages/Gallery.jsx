
import React, {useState, useEffect} from 'react';
import {FaFacebook, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import {client, urlFor} from "../client";
import {useParams} from "react-router-dom";
import {images} from "../constants";
import {AiOutlineLineChart} from "react-icons/ai";

import './scss/Gallery.scss';


function Gallery() {
    const [singleGallery, setSingleGallery] = useState(null);    
    // const [services, setServices] = useState(null);
    const {slug} = useParams();


    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            instagramLink,
            facebookLink,
            twitterLink,
            youtubeLink,
            tiktokLink,
            description,
            imageUrl{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl2{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl3{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data) => setSingleGallery(data[0]))
            .catch(console.error)
    }, [slug]);









    if(!singleGallery) return <div>Loading.....</div>


    return (
        <>


            <section id="">
                <div className="content-box-md-interact">
                    <div className="">

                        <div className="map-color-3">
                            <div className="row">
                                <div className="home-headings tools-p-align">
                                    <div className="horizontal-heading influencer-name">
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleGallery.slug.current}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-color-6">
                            <div className="container">
                                <div className="row">
                                    <div id="content">
                                        <section id="map-section" className="inner over client-section-b">
                                            {/*<ul id="examples-2">*/}
                                            {/*    <li><Link to='/'*/}
                                            {/*           className="background-map-2">&#8592; Back to All Influencers</Link>*/}
                                            {/*    </li>*/}
                                            {/*</ul>*/}

                                            {/*<hr/>*/}


                                                <div className="row-show port-popup show-page-image-s">
                                                    {/*<a className="portfolio-item-d-overlay"*/}
                                                    {/*   href={urlFor(singleInfluencer.imageUrl).width(400).height(400).url()}*/}
                                                    {/*   >*/}

                                                    {singleGallery.imageUrl2 && (
                                                        <div className="column-show map-color-7 influencer-image"
                                                             >
                                                            <img src={urlFor(singleGallery.imageUrl2).width(800).height(800).url()} className="influencer-image-2"
                                                                 alt=""/>

                                                        </div>
                                                    )}
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleGallery.imageUrl).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>

                                                    {singleGallery.imageUrl3 && (
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleGallery.imageUrl3).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                    )}
                                                    {/*</a>*/}
                                                </div>








                                                <div className="desc map-color-7 container-paragraph influencer-info">
                                                    <div className="map-paragraph">
                                                        <h2 className="i-map-paragraph"><b>{singleGallery.name}</b></h2>
                                                        <hr className='show-break-style'/>
                                                        <div className='show-button'>


                                                            {singleGallery.instagramLink && (
                                                                <a href={singleGallery.instagramLink} target='_blank'>
                                                                    <button className='btn btn-social-i btn-instagram'>
                                                                        <FaInstagram/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleGallery.facebookLink && (
                                                                <a href={singleGallery.facebookLink} target='_blank'>
                                                                    <button className='btn btn-social-i-f btn-facebook'>
                                                                        <FaFacebook/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleGallery.twitterLink && (
                                                                <a href={singleGallery.twitterLink} target='_blank'>
                                                                    <button className='btn btn-social-i-t btn-twitter'>
                                                                        <FaTwitter/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleGallery.youtubeLink && (
                                                                <a href={singleGallery.youtubeLink}
                                                                   target='_blank'>
                                                                    <button className='btn btn-social-i-y btn-youtube'>
                                                                        <FaYoutube/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleGallery.tiktokLink && (
                                                                <a href={singleGallery.tiktokLink}
                                                                   target='_blank'>
                                                                    <button className='btn btn-social-i btn-tiktok'>
                                                                        <FaTiktok/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            <hr />

                                                            <div className='template-p-detail'>
                                                                {singleGallery.description}
                                                            </div>

                                                            <hr/>
                                                            {/* <a href="mailto:shawn@ktmanagers.com">
                                                                <button className='btn btn-client-book btn-red'>Book {singleGallery.name} Promo!</button>
                                                            </a> */}

                                                            {/*<ButtonMailto label="Write me an E-Mail" mailto="mailto:shawn@ktmanagers.com"/>*/}

                                                            {/*<Mailto email="shawn@ktmanagers.com" >*/}
                                                            {/*    Mail me!*/}
                                                            {/*</Mailto>*/}
                                                        </div>










                                                            {/*<hr/>*/}
                                                        <hr className='show-break-style'/>
                                                            <div className='template-p-detail'>

                                                                More information?
                                                                    Please send us a message using our 
                                                                    <a
                                                                        href='/contact'
                                                                        target='_blank'> contact form
                                                                        </a>
                                                            </div>


                                                    </div>
                                                </div>


                          


                                        </section>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </section>

















            {/*<section id="about">*/}

            {/*    /!* About 01 *!/*/}
            {/*    <div className="about-01">*/}
            {/*        <div className="content-box-main">*/}
            {/*            <div className="container">*/}

            {/*                /!* About Bottom *!/*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-md-12">*/}
            {/*                        <div className="about-bottom">*/}
            {/*                            <img src={urlFor(singleInfluencer.imageUrl).width(400).height(400).url()} alt="About Us" className="img-responsive"/>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* About 02 *!/*/}

            {/*</section>*/}


        </>
    );
}

export default Gallery;