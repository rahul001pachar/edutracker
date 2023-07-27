import React, { useEffect } from 'react'
import "./style.css"

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    })

    return (
        <div className='h-screen'>
            <div className='flex flex-row justify-between items-center p-1 hover:italic bg-slate-600'>
                <h2 className='text-yellow-500 font-bold text-2xl '>EduTrack</h2>
                <div className='hidden md:block'>
                    <a className='link' href="/">Home</a>
                    <a className='link' href="/">About Us</a>
                    <a className='link' href="/">Pricing</a>
                    <a className='link' href="/contact">Contact</a>
                </div>
                <div>
                    <button className='button'>Sign In</button>
                    <button className='button'>Login</button>
                </div>
            </div>
            <div className='w-full h-full flex flex-auto w-full h-full'>
                <div className='w-1/2 h-full'>
                    <image></image>
                </div>
                <div className='w-1/2 h-full'>
                    <div className='mx-auto border-4 border-slate-100 p-4 m-4 w=3/4 h-96'>
                        <h1 className='font-bold text-3xl'>Login</h1>
                        <h1>Username</h1>
                        <input className='border-black bg-slate-100 m-2 rounded w-full' type='text' placeholder='Enter your Username'></input>
                        <h1>Password</h1>
                        <input className='border-black bg-slate-100 m-2 rounded w-full' type='text' placeholder='Enter your Password'></input>
                        <h1 className=''>New to EduTrack?</h1>

                        <button className='bg-black text-white font-bold rounded w-24 hover:italic p-2 m-2'>Login</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login