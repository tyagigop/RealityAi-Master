import { Fragment, useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import "./otp.css"
import { useNavigate } from 'react-router-dom';


export default function Otp() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const verifyOtpHandler = () => {
        navigate('/home'); // Redirect to the home page
    };

    return (
        <div className='bg-slate-50'>
            <header className="bg-white shadow-lg shadow-slate-200/50">
                <nav className="mx-auto flex max-w-7xl items-center justify-center p-2 lg:px-4" aria-label="Global">
                    <div className="">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">RealtyAi</span>
                            <h1 className='text-2xl text-cyan-400 font-semibold'>RealtyAi</h1>
                        </a>
                    </div>
                </nav>
            </header>
            <div className='flex flex-col items-center mt-10'>
                <div className=''>
                    <img className='w-40 md:w-56 lg:w-56' src='/assets/otp.png' />
                </div>
                <div className='mt-10 w-72 md:w-auto lg:w-auto'>
                    <h1 className='text-2xl text-center'>Enter OTP</h1>
                    <p className='text-base text-center text-slate-500 mt-4'>OTP has been sent to your mobile. Please enter below</p>
                </div>

                <div className="mt-10 flex items-center justify-center space-x-2 otp">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType='number'
                        renderInput={(props) => <input {...props} />}
                        placeholder='------'
                        inputStyle={{ backgroundColor: "#f8fafc" }}
                    // containerStyle={}
                    />
                </div>
            </div>
            <div className='flex flex-col items-center'>

                <div className='mt-2 w-72 md:w-auto lg:w-auto'>
                    <p className='text-base text-center text-slate-400 mt-4'>Didn't you receive the OTP?</p>

                    <h1 className='text-xl text-center text-[#00B3DA]'>Resend OTP</h1>
                </div>
            </div>
            <div className="mt-12 bg-transparent p-4 md:bottom-16 lg:bottom-20 flex justify-center items-center ">
                <button onClick={verifyOtpHandler} disabled={!(otp.length == 6)} className={`${otp.length == 6 ? "bg-[#00B3DA] text-white" : "bg-transparent"} border border-gray-300 rounded-lg w-96 h-12 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500`}>
                    Verify
                </button>
            </div>
        </div>

    )
}
