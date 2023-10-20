import React from 'react';
import './statement.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";


const Statement = () => {
    return (
        <section id="statement">
            <div className="content-box-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tech-statement text-center">
                            <h3><FaQuoteLeft/> An elementary student's introduction to the
stock market <FaQuoteRight/></h3>
                                {/*<p>- Sean Gardner -</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statement;