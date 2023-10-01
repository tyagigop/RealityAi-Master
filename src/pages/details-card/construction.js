// import react  from "@heroicons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// fetch lock icon from fontawesome
import { faLock } from "@fortawesome/free-solid-svg-icons";

import React from "react";
// import Layout from "./Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";






export default function ReraDetails() {
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        navigate(`/${route}`); // Redirect to the home page
    };

    return (
        <div className="body-container">
            <div className="rera-new-container mx-auto pt-4">
            

                <div className="rera-new-complaints">
                    <div className="mt-5 mb-5 ml-5">
                        <p className="rera-new-title"><strong>Constructions %</strong></p>                
                    </div>
                    <div className="rera-new-complaints-items-box">
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Quarter #</p>
                            <p className="me-4">Q3'19</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Completion</p>
                            <p className="me-4">50%</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Cost Incured</p>
                            <p className="me-4">
                                1450 crores
                            </p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Progress</p>
                            <p className="me-4">
                                10%
                            </p>
                        </div>
                    </div>

                    {/* second box */}
                    
                    <div className="rera-new-complaints-items-box">
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Quarter #</p>
                            <p className="me-4">Q3'19</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Completion</p>
                            <p className="me-4">50%</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Cost Incured</p>
                            <p className="me-4">
                                1450 crores
                            </p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Progress</p>
                            <p className="me-4">
                                10%
                            </p>
                        </div>
                    </div>
                    
                </div>  

            </div>
        </div>
    )
}
