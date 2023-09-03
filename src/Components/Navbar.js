import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='left'>
                <h1>Dictionary</h1>
            </div>
            <div className='right'>
                <ul type='none'>
                    <li> <a href='/'>Home</a></li>
                    <li> <a href='/history'>History</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar