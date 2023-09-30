import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../components/card_component';
export default function Home() {

    return (
        <div className='bg-slate-50'>
            {/* <header className="bg-white shadow-lg shadow-slate-200/50 h-20 content-end grid grid-cols-1">
                <nav className="flex max-w-7xl justify-between p-2 lg:px-4 align-center">
                    <div className="flex flex-col align-bottom">
                        <div className='flex flex-row'>
                            <div className='mr-3 ml-2'><FontAwesomeIcon icon={faAngleLeft} /></div>
                            <div>Comparing in Pune <FontAwesomeIcon icon={faAngleDown} /></div>
                        </div>

                    </div>
                    <div>
                        <img src="/assets/user.png" className='w-10' />
                    </div>
                </nav>
            </header> */}
            <header className="flex items-center justify-between bg-white p-4 shadow-lg shadow-slate-200/50">
                <div className="flex items-center">
                    <a href="#" className="mr-4 ml-2 text-xl">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </a>
                    <span className="text-sm">Comparing in&nbsp;</span>
                    <span className="text-sm text-[#00B3DA]">Pune <FontAwesomeIcon icon={faAngleDown} /></span>

                </div>
                <div className='mr-2'>
                    <a href="#">
                        <img src="/assets/user.png" className="h-8 w-8" />
                    </a>
                </div>
            </header>
            <div className="relative bg-center bg-no-repeat bg-cover h-52 md:h-80 lg:h-80 flex items-center" style={{ backgroundImage: "url('/assets/banner2.png')" }}>
                <div className=" p-4 text-white">
                    <h1 className="text-xl font-semibold mb-4 w-68 md:w-auto lg:w-auto">Don't Buy Your Dream Home Without Expert Guidance</h1>
                    <a href="#" className="bg-[#00B3DA] text-white px-6 py-3 rounded-lg hover:bg-[#00B3DA] transition duration-300 ease-in-out">
                        Compare Now
                    </a>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center p-6">
                <div className="relative flex w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-black rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3 rounded-lg">
                        <FontAwesomeIcon icon={faSearch} className='text-slate-300' />
                    </div>
                </div>


            </div>
            <div className="p-4">
                <Swiper
                    slidesPerView={1.6}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {Array.from({ length: 16 }).map((_, index) => (
                        <SwiperSlide key={index} className='m-2'>
                            <Card imageSrc={"/assets/card.png"} title={"Project 234-" + index} buttonText={"Add to Compare"} content={"Manish Market, Pune"} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}
