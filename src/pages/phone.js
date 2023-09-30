import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Phone() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const verifyOtpHandler = () => {
    navigate('/otp'); // Redirect to the home page
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
          <img className='w-40 md:w-56 lg:w-56' src='/assets/cuate.png' />
        </div>
        <div className='mt-10 w-72 md:w-auto lg:w-auto'>
          <h1 className='text-2xl text-center'>Sign Up/Log In</h1>
          <p className='text-base text-center text-slate-500 mt-4'>Please enter your mobile number to recieve a One Time Password</p>
        </div>
        <div className='mt-20 w-48 md:w-auto lg:w-auto flex flex-row'>
          <h1 className='text-lg text mr-3'>+91</h1>
          <input className="border-b focus:border-b-2 focus:border-blue-500 outline-none bg-slate-50 lg:w-96" placeholder='Enter mobile number' onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div className="mt-12 bg-transparent p-4 md:bottom-16 lg:bottom-20 flex justify-center items-center ">
        <button onClick={verifyOtpHandler} disabled={!(phone.length == 10)} className={`${phone.length == 10 ? "bg-[#00B3DA] text-white" : "bg-transparent"} border border-gray-300 rounded-lg w-96 h-12 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500`}>
          Send OTP
        </button>
      </div>
    </div>

  )
}
