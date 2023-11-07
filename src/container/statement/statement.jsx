import React, { useEffect, useState } from 'react';
import './statement.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { client } from '../../client';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Statement = () => {

    const [statement, setStatement] = useState([]);

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
        }`).then((data) => setStatement(data[0]))
            .catch(console.error)
    }, []);

    if(!statement) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )
    
    return (
        <section id="statement">
            <div className="content-box-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tech-statement text-center">
                            {statement.statement && (
                            <h3>

                            {/* <FaQuoteLeft/>  */}
                            <ReactMarkdown 
                                            children={statement.statement}  
                                            remarkPlugins={[remarkGfm]}   
                                        />

                           {/* <FaQuoteRight/> */}
                           </h3>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statement;