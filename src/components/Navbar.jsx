import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav'>
            <div className='link-div'>
                <Link className='link' to={'/'} >Home</Link>
                <Link className='link' to={'/cart'} >Cart</Link>
            </div>
            <div className='flex'>
                <h2>Items: 0</h2>
            </div>
        </div>
    )
}

export default Navbar