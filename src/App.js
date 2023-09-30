import { Fragment, useState } from 'react'

export default function App() {
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAFyvvbEf7fXd5tfrf7t0Xl8EiB5NbdAEM",
  //   authDomain: "realtyai-5a422.firebaseapp.com",
  //   projectId: "realtyai-5a422",
  //   storageBucket: "realtyai-5a422.appspot.com",
  //   messagingSenderId: "580249065623",
  //   appId: "1:580249065623:web:7b432089d0b5966d0271d2"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
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
          <img className='w-56' src='/assets/cuate.png' />
        </div>
        <div className='mt-10 w-72 md:w-auto lg:w-auto'>
          <h1 className='text-2xl text-center'>Sign Up/Log In</h1>
          <p className='text-base text-center text-slate-500 mt-4'>Please enter your mobile number to recieve a One Time Password</p>
        </div>
        <div className='mt-20 w-48 md:w-auto lg:w-auto flex flex-row'>
          <h1 className='text-lg text mr-3'>+91</h1>
          <input className="border-b focus:border-b-2 focus:border-blue-500 outline-none bg-slate-50 lg:w-96" placeholder='Enter mobile number' />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-transparent p-4 md:bottom-16 lg:bottom-20 flex justify-center items-center ">
        <button className="bg-transparent border border-gray-300 rounded-lg w-80 h-12 px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-500">
          Send OTP
        </button>
      </div>
    </div>

  )
}
