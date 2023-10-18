import React from 'react';
import './standards.scss';

import {images} from "../../constants";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const standards = () => {
    return (
        <section id="brands">
            <div className="content-box-md-brands">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="horizontal-heading" style={{marginBottom: '30px'}}>
                                <h2 className="brand-thin">Ohio   <strong className="brand-bold">Common Core </strong>Standards</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                items='6'
                                autoplay
                            smartSpeed='1400'
                            loop
                            autoplayHoverPause='true'
                            width='1000'
                            nav
                            dots='true'
                            autoWidth='true'
                            margin={20}

                                id="clients-list" className="owl-carousel owl-theme" >


                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>
                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>

                                <div className="item client">
                                    <div class="basic-card basic-card-aqua ">
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
                
                                </div>
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

export default standards;