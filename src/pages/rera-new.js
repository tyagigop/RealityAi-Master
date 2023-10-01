

import React from "react";
// import Layout from "./Layout";
import {useNavigate} from "react-router-dom";
import "./rera-new.css"





export default function ReraDetails() {
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        navigate(`/${route}`); // Redirect to the home page
    };

    return (
        <div className="body-container">
            <header className="flex items-center justify-between bg-white p-4 shadow-lg shadow-slate-200/50">
                <div className="flex items-center">
                <a className="mr-4 ml-2 text-xl" onClick={() => handleNavigate("search")}>
                    <p>Back</p>
                </a>
                </div>
                <div className="mr-2">
                <a href="#" type="button" className="compare-button">
                    Add to Compare
                </a>
                </div>
            </header>
            <div className="rera-new-container mx-auto pt-4">
                <div className="mt-5 mb-5 ml-5">
                <p className="rera-new-title"><strong>Godrej Meridian</strong></p>
                <p>Sector 106, Gurgaon, Haryana, India</p>
                <p className="fs-6">Completion Date 12/09/2023</p>
                </div>
                <h3 className="mb-3 ml-5"><strong>Details</strong></h3>
                <div className="rera-new-details-box">
                    
                    <div className="flex justify-between rera-new-details-div">
                        <p className="fs-6 ms-2">
                            <a href="/unit-config">Total Units</a>
                        </p>
                        <p className="fs-6 me-4">100</p>
                    </div>
                    <div className="flex justify-between rera-new-details-div">
                        <p className="fs-6 ms-2">
                            <a href="/unit-sold">Unit Sold</a>
                        </p>
                        <p className="fs-6 me-4 bg-blue">122</p>
                    </div>
                    <div className="flex justify-between rera-new-details-div">
                        <p className="fs-6 ms-2">
                            <a href="/construction">Construction %</a>
                        </p>
                        <p className="fs-6 me-4">50%</p>
                    </div>
                    <div className="flex justify-between rera-new-details-div">
                        <p className="fs-6 ms-2">
                            <a href="/rera-comp">RERA Complaints</a>
                        </p>
                        <p className="fs-6 me-4">2</p>
                    </div>
                    <div className="flex justify-between rera-new-details-div">
                        <p className="fs-6 ms-2">Far</p>
                        <p className="fs-6 me-4">2.45</p>
                    </div>
                    <div className="flex justify-between rera-new-details-div">
                        <p className="fs-6 ms-2">Green Zone</p>
                        <p className="fs-6 me-4">20%</p>
                    </div>
                    
                    
                </div>

                <div className="rera-new-layout">
                <h1 className=""><strong>Layout</strong></h1>
                <img src="/assets/card.png" />
                </div>

                <div className="rera-new-issues">
                <h1 className="mb-2"><strong>Issues</strong></h1>
                    <ol className="list-decimal">
                        <div>
                            <li>Area Not listed.</li>
                        </div>
                        <div>
                            <li>High tension wire running through the society  the society.</li>
                        </div>
                    </ol>
                </div>

                <div className="rera-new-complaints">
                    
                    <h1 className="mb-2"><strong>Complaints</strong></h1>
                    
                    <div className="rera-new-complaints-items-box">
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Complaint #</p>
                            <p className="me-4">Jan'20</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Dispatch Date</p>
                            <p className="me-4">12/12/2023</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Status</p>
                            <p className="me-4">Pending</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">View Notice</p>
                            <p className="me-4">
                                <a href="#" >Download</a>
                            </p>
                        </div>
                    </div>
                    <div className="rera-new-complaints-items-box">
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Complaint #</p>
                            <p className="me-4">Jan'20</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Dispatch Date</p>
                            <p className="me-4">12/12/2023</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">Status</p>
                            <p className="me-4">Pending</p>
                        </div>
                        <div className="flex justify-between rera-new-complaints-items">
                            <p className="ms-4">View Notice</p>
                            <p className="me-4">
                                <a href="#" >Download</a>
                            </p>
                            
                        </div>
                    </div>
                    <div className="center-view-more">
                        <a href="#" className="text-[#00B3DA] view-more">See 5 more complaints</a>
                    </div>

                    
                </div>
                <div className="status">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Sales Status</strong></h1>
                    </div>
                    <div className="status-items-box">
                        <div className="flex justify-between status-items">
                            <p className="ms-4 width-60">Unit Sold</p>
                            <p className="me-4">80</p>
                        </div>
                        <div className="flex justify-between status-items">
                            <p className="ms-4">Unit Sold last Q</p>
                            <p className="me-4">10</p>
                        </div>
                    
                    </div>
                    <div className="center-view-more">
                        <a href="#" className="view-more text-[#00B3DA]">View More Details</a>
                    </div> 
                </div>
                <div className="status">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Construction Cost Status</strong></h1>
                    </div>
                    <div className="status-items-box">
                        <div className="flex justify-between status-items">
                            <p className="ms-4 width-60">Cost incurred (certified by engineer)</p>
                            <p className="me-4">50 %</p>
                        </div>
                        <div className="flex justify-between status-items">
                            <p className="ms-4">Balance cost left to be incurred</p>
                            <p className="me-4">50%</p>
                        </div>
                        <div className="flex justify-between status-items">
                            <p className="ms-4">Cost Incurred last quarter</p>
                            <p className="me-4">4%</p>
                        </div>
                    
                    </div>
                    <div className="center-view-more">
                        <a href="#" className="view-more text-[#00B3DA]">View More Details</a>
                    </div> 
                </div>
                <div className="status">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Construction Status</strong></h1>
                    </div>
                    <div className="status-items-box">
                        <div className="flex justify-between status-items">
                            <p className="ms-4 width-60">Total construction completed</p>
                            <p className="me-4">50 %</p>
                        </div>
                        <div className="flex justify-between status-items">
                            <p className="ms-4">Construction Completed this Q</p>
                            <p className="me-4">50%</p>
                        </div>
                    
                    </div>
                    <div className="center-view-more">
                        <a href="#" className="view-more text-[#00B3DA]">View More Details</a>
                    </div> 
                </div>

                
                    

            </div>
        </div>
    )
}
