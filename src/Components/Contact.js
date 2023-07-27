import React, { useEffect } from 'react'
import "./style.css"
const Contact = () => {

    useEffect(() => {
        document.title = "Contact";
    })

    return (
        <div className='h-screen'>
            <div className='flex flex-row justify-between items-center p-1 hover:italic bg-slate-600'>
                <h2 className='text-yellow-500 font-bold text-2xl '>EduTrack</h2>
                <div className='hidden md:block'>
                    <a className='link' href="/">Home</a>
                    <a className='link' href="/">About Us</a>
                    <a className='link' href="/">Pricing</a>
                    <a className='link' href="/">Contact</a>
                </div>
                <div>
                    <button className='button'>Sign In</button>
                    <button className='button' ><a href='/login'>Login</a></button>
                </div>
            </div>
            <div className='w-full h-full flex flex-auto w-full h-full'>
                <div className='w-1/2 h-full'>
                    <image></image>
                </div>
                <div className='w-1/2 h-full'>
                    <div className='mx-auto border-4 border-slate-100 p-4 m-4 w=3/4 h-96'>
                        <h1 className='font-bold text-3xl'>Get In Touch</h1>
                        <h1 className=''>We want to hear from you.Let us know how we can help.</h1>
                        <input className='border-black bg-slate-100 m-2 rounded' type='text' placeholder='First Name'></input>
                        <input className='border-black bg-slate-100 m-2 rounded' type='text' placeholder='Last Name'></input>
                        <input className='border-black bg-slate-100 m-2 rounded w-full' type='text' placeholder='Enter Your Email'></input>
                        <input className='border-black bg-slate-100 m-2 rounded w-full' type='text' placeholder='Enter your Contact Number'></input>
                        <input className='border-black bg-slate-100 m-2 rounded w-full h-1/4' type='text' placeholder='Describe Your Queries'></input>
                        <button className='bg-black text-white font-bold rounded w-full'>Send</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact