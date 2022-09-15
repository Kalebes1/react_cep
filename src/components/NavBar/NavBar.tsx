import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navbar } from '../../../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

import './style.css'
const NavBar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container n-wrapper">


              <div className="n-left">
                <Link to='/' className='n-name' onClick={() => setIsNavShowing(false)}>
                    CEP
                </Link>
              </div>
              <div className="n-right">
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                      navbar.map(({name, path}, index)=>{
                        return(
                          <li key={index}>
                            <NavLink to={path}>{name}</NavLink>
                          </li>
                        )
                      })
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                  {
                    isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                  }
               </button>
              </div>
            </div>
    </nav>
  )
}

export default NavBar