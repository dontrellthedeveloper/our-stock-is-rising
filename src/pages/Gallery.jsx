import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight,
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import {images} from "../constants";

import './scss/Gallery.scss';

import {Services} from "../container";


import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";





function Gallery() {
    const [singleGallery, setSingleGallery] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();

    const options = {
        responsive:{
            0: {
                items: 1
            },
            // 480: {
            //     items: 2
            // },
            768: {
                items: 3
            }
        }
    };



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






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!singleGallery) return <div>Loading.....</div>
    if(!services) return <div>Loading.....</div>


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
                                                        {/*<hr className='show-break-style'/>*/}
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
                                                                        <FaFacebookF/>
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


                                            {/* <Services/> */}

                                                {/*<section id="pricing">*/}
                                                {/*    <div className="content-box-md">*/}
                                                {/*        <div className="container">*/}
                                                {/*            <div className="row">*/}
                                                {/*                <div className="col-md-12 text-center">*/}
                                                {/*                    <div className="horizontal-heading">*/}
                                                {/*                        <h5>Learn about</h5>*/}
                                                {/*                        <h2>Branding & Promotion</h2>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*            </div>*/}

                                                {/*            <div className="row">*/}



                                                {/*                <OwlCarousel*/}
                                                {/*                    items='3'*/}
                                                {/*                    // autoplay*/}
                                                {/*                    smartSpeed='700'*/}
                                                {/*                    loop*/}
                                                {/*                    autoplayHoverPause='false'*/}
                                                {/*                    nav*/}
                                                {/*                    dots='false'*/}
                                                {/*                    id="clients-list" className="owl-carousel owl-theme"*/}
                                                {/*                    responsive={{*/}
                                                {/*                        0: {*/}
                                                {/*                            items: 1*/}
                                                {/*                        },*/}
                                                {/*                        480: {*/}
                                                {/*                            items: 1*/}
                                                {/*                        },*/}
                                                {/*                        768: {*/}
                                                {/*                            items: 1*/}
                                                {/*                        },*/}
                                                {/*                        1000: {*/}
                                                {/*                            items: 2*/}
                                                {/*                        },*/}
                                                {/*                        1200: {*/}
                                                {/*                            items: 3*/}
                                                {/*                        },*/}
                                                {/*                    }}*/}
                                                {/*                >*/}


                                                {/*                    {services.map((service, index) => (*/}
                                                {/*                    <div key={service.name + index} className="branding-promo-s">*/}
                                                {/*                            <div className="pricing-table black">*/}
                                                {/*                                <div className="price">*/}
                                                {/*                                    <div className="row">*/}
                                                {/*                                        <div*/}
                                                {/*                                            className="col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*                                            <div className="type">*/}
                                                {/*                                                <h4>{service.name}</h4>*/}
                                                {/*                                            </div>*/}
                                                {/*                                        </div>*/}
                                                {/*                                    </div>*/}
                                                {/*                                </div>*/}
                                                {/*                                <ul className="package">*/}

                                                {/*                                    {service.serviceDescription1 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription1}*/}

                                                {/*                                        </li>*/}

                                                {/*                                    )}*/}

                                                {/*                                    {service.serviceDescription2 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription2}*/}
                                                {/*                                            >*/}
                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription3 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription3}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription4 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription4}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription5 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription5}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription6 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription6}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription7 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription7}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription8 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription8}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription9 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription9}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}
                                                {/*                                    {service.serviceDescription10 && (*/}
                                                {/*                                        <li>*/}
                                                {/*                                            <BiCaretRight/> {service.serviceDescription10}*/}

                                                {/*                                        </li>*/}
                                                {/*                                    )}*/}


                                                {/*                                </ul>*/}

                                                {/*                                <div className="pricing-btn">*/}
                                                {/*                                    <a className="btn btn-general btn-white services-button-s"*/}
                                                {/*                                       href="#"*/}
                                                {/*                                       title="Get Started" role="button">Get*/}
                                                {/*                                        Started</a>*/}
                                                {/*                                </div>*/}
                                                {/*                            </div>*/}
                                                {/*                        </div>*/}

                                                {/*                    ))}*/}
                                                {/*                </OwlCarousel>*/}
                                                {/*            </div>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</section>*/}


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