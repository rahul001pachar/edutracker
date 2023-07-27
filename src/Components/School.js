import React from 'react'

const School = ({ school }) => {
    return (
        <div className='border p-2 shadow w-1/3'>
            {/* <img src={'https://edutrack.onrender.com/assets/' + school.logo} alt="" /> */}
            <h2>
                {school.name}
            </h2>
        </div>
    )
}

export default School