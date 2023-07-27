import React, { useEffect, useState } from 'react'
import "./style.css"
import School from './School';

const Edutrack = () => {
    const [schoolData, setSchoolData] = useState();
    const [board, setBoard] = useState();
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        document.title = "EduTrack";
    })
    const onSearch = async () => {
        console.log(schoolData)
        const resp = await fetch(`https://edutrack.onrender.com/edu-track/list?${schoolData}&filter=${board}&pageNo=1&pageSize=5`);
        const response = await resp.json();
        //console.log(response);
        // const { data } = response;
        const data = response.data;
        console.log(data)
        setSchools(data);
    }
    const handleChange = (e) => {
        setSchoolData(e.target.value)
    }
    const handleBoardChange = (e) => {
        setBoard(e.target.value)
    }
    return (
        <div className='bg-slate-50 h-screen'>
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
                    <button className='button'><a href='/login'>Login</a></button>
                </div>
            </div>
            <div className=''>
                <div className='text-center text-[30px] font-normal hover:font-bold'>EduTrack</div>
                <p className='text-center p-1'>Efficiently Manage Your School with Our Comprehensive System</p>

                <div className="w-3/5 lg:w-full text-center mx-auto flex flex-col lg:px-6 lg:flex-row">


                    <input onChange={handleChange} className='w-full m-1 bg-slate-200' type="text" placeholder="Search by school name,Affiliation code or location"></input>

                    {/* <div className='w-full'> */}
                    <select onChange={handleBoardChange} className='m-1 w-full opacity-50'>
                        <option value="Select an Education Board">Select an Education Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="CISCE">CISCE</option>
                        <option value="HBSE">HBSE</option>
                        <option value="NSOS">NSOS</option>
                    </select>
                    {/* </div> */}

                    {/* <div className='w-full'> */}
                    <button onClick={onSearch} className='m-1 w-full lg:w-16 bg-slate-200 rounded hover:font-bold'>Search</button>
                    {/* </div> */}
                </div>
            </div>
            {schools.map(school =>
                // <h2 key={school.schoolId}>{school.name}</h2>
                <School key={school.schoolId} school={school} />
            )}
        </div>
    )
}

export default Edutrack 