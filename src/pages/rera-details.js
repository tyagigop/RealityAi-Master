// import react  from "@heroicons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// fetch lock icon from fontawesome
import { faLock } from "@fortawesome/free-solid-svg-icons";

import React from "react";
// import Layout from "./Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./rera-details.css"





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
                    <FontAwesomeIcon icon={faAngleLeft} />
                </a>
                <span className="text-sm text-[#00B3DA]">RERA Details</span>
                {/* <span className="text-sm text-[#00B3DA]">Pune <FontAwesomeIcon icon={faAngleDown} /></span> */}
                </div>
                <div className="mr-2">
                <a href="#">
                    <img src="/assets/user.png" className="h-8 w-8" />
                </a>
                </div>
            </header>
            <div className="container mx-auto bg-gray">
                <div className="mt-5 mb-5 ml-5">
                <p><strong>Godrej Meridian</strong></p>
                <p>Sector 106, Gurgaon, Haryana, India</p>
                <p className="fs-6">2 BHK Possession by 12/09/2023</p>
                </div>
                <h3 className="mb-3 ml-5"><strong>Details</strong></h3>
                <div className="">
                    
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                    <div className="flex justify-between details-div-last">
                        <p className="fs-6 ms-2">RERA ID</p>
                        <p className="fs-6 me-4">HRERA- 123456789</p>
                    </div>
                </div>

                <a type="button" className="button-lock" href="#"><FontAwesomeIcon icon={faLock} className="me-3" style={{color:'#cbd895'}}/>Download RERA Document</a>
                <div className="layout">
                <h1 className="mt-5 mb-5 ml-5"><strong>Layout</strong></h1>
                <img src="/assets/card.png" />
                </div>

                <div className="issues">
                    <ol className="list-decimal">
                        <div>
                            <h1 className="mb-2"><strong>Issues</strong></h1>
                            <li>Area Not listed.</li>
                        </div>
                        <div>
                            <li>High tension wire running through the society  the society.</li>
                        </div>
                    </ol>
                </div>

                <div className="complaints">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Complaints</strong></h1>
                        <a href="#" className="text-[#00B3DA] me-4">See More</a>
                    </div>
                    <div className="complaints-items-box">
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">Complaint #</p>
                            <p className="me-4">Jan'20</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">Dispatch Date</p>
                            <p className="me-4">12/12/2023</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">Status</p>
                            <p className="me-4">Pending</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">View Notice</p>
                            <a type="button" className="button-download" href="#">Download</a>
                        </div>
                    </div>
                    <div className="complaints-items-box">
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">Complaint #</p>
                            <p className="me-4">Jan'20</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">Dispatch Date</p>
                            <p className="me-4">12/12/2023</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">Status</p>
                            <p className="me-4">Pending</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4">View Notice</p>
                            <a type="button" className="button-download" href="#">Download</a>
                        </div>
                    </div>
                    
                </div>
                <div className="complaints">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Sales Status</strong></h1>
                    </div>
                    <div className="complaints-items-box">
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Unit Sold</p>
                            <p className="me-4">80</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Unit Sold last Q</p>
                            <p className="me-4">10</p>
                        </div>
                        <div className="sales-items">
                            <a type="button" className="button-view-more" href="#"><FontAwesomeIcon icon={faLock} className="me-3" style={{color:'#cbd895'}}/>View More Details</a>
                        </div>                        
                    </div>
                </div>

                <div className="complaints">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Construction Cost Status</strong></h1>
                    </div>
                    <div className="complaints-items-box">
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Cost incurred (certified by engineer)</p>
                            <p className="me-4">50 %</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Balance cost left to be incurred</p>
                            <p className="me-4">50%</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Cost Incurred last quarter</p>
                            <p className="me-4">4%</p>
                        </div>
                        <div className="sales-items">
                            <a type="button" className="button-view-more" href="#"><FontAwesomeIcon icon={faLock} className="me-3" style={{color:'#cbd895'}}/>View More Details</a>
                        </div>                        
                    </div>
                </div>
                <div className="complaints">
                    <div className="flex justify-between">
                        <h1 className="mb-2 ms-4"><strong>Sales Status</strong></h1>
                    </div>
                    <div className="complaints-items-box">
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Total construction completed</p>
                            <p className="me-4">50%</p>
                        </div>
                        <div className="flex justify-between complaints-items">
                            <p className="ms-4 width-60">Construction Completed this Q</p>
                            <p className="me-4">40%</p>
                        </div>
                        <div className="sales-items">
                            <a type="button" className="button-view-more" href="#"><FontAwesomeIcon icon={faLock} className="me-3" style={{color:'#cbd895'}}/>View More Details</a>
                        </div>                        
                    </div>
                </div>
                
                    

            </div>
        </div>
    )
}
