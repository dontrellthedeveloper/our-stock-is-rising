import React, {useState, useEffect} from 'react';

import './gallery.scss';

import {images} from "../../constants";
import {urlFor, client} from "../../client";

// import 'photoswipe/dist/photoswipe.css'

import {Link} from "react-router-dom";

const GalleryS = () => {


    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        const query = '*[_type == "gallery"]';

        client.fetch(query)
            .then((data) => {
                setGalleries(data)
            })
    },[])

    return (
        <section id="portfolio">

            <div className="isotope-filters">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="vertical-heading">
                                <h5>Find Branding</h5>
                                <h2>Our <br/>Amazing <strong>Influencers</strong></h2>
                            </div>
                        </div>

                        <div className="col-md-12">

                            <div id="isotope-filters" className="margin-bottom-g">
{/* 
                                <button className="btn btn-red btn-grey active-item gallery-list-item"
                                        data-filter="all"><span>All</span></button>
                                <button className="btn btn-red gallery-list-item" data-filter="women"><span>Women</span>
                                </button>
                                <button className="btn btn-red active-item gallery-list-item" data-filter="men">
                                    <span>Men</span></button> */}
                            </div>

                        </div>
                        <div className="col-md-12">
                            <p className="client-show-instructions">Click on photo for details</p>
                        </div>

                    </div>
                </div>

                 {/* Portfolio items Wrapper */}
                <section id="portfolio-wrapper">

                    <div className="container-fluid center-pics">

                        <div className="row no-gutters">

                            <div className="isotope-filters" style={{paddingLeft: '0', paddingRight: '0'}}>

                                {galleries.map((gallery, index) => (


                                    <div key={gallery.name + index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                        <div className="portfolio-item portfolio-pic no-underline">



                                        <Link to={'/gallery/' + gallery.slug.current} >

                                                <img src={urlFor(gallery.imageUrl)} className="img-responsive"
                                                     alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{gallery.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                             {/*Item Description */}
                                                            <p>Currently Starring on the Hit TV Show<br/>“Love & Hip Hop:
                                                                Atlanta” on the<br/> VH1 Network <br/> influencer</p>

                                                        </div>
                                                    </div>

                                        </Link>
                                        </div>
                                    </div>

                                ))}


                            </div>
                        </div>
                    </div>
                </section>
            </div>








            {/*<div className="client-border">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-12">*/}
            {/*                <div className="vertical-heading">*/}
            {/*                    <h5>Find Branding</h5>*/}
            {/*                    <h2>Our <br/>Amazing <strong>Kids</strong></h2>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-12">*/}
            {/*                <p className="client-show-instructions">Click on photo for details</p>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-12">*/}

            {/*                <div className="margin-bottom-g">*/}

            {/*                </div>*/}

            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </section>
    );
};

export default GalleryS;