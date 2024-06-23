import './NavbarStyles.css'
import React  from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='header'> 
        <nav>
        <ul className="nav-menu">
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/usertable' >USERTABLE</Link>
            </li>
            <li>
                <Link to='/usercard' >USERCARD</Link>
            </li>
          </ul>

        </nav>
    </div>
  )
}

export default Navbar