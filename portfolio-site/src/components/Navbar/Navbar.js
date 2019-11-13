import React from 'react'
import Avatar from '../../assets/images/avatar/chris.png'

function Navbar () {
    return (
        <div class='navbar sticky-top alert-primary'>
            <ul class='nav'>
                <a href='...' class='navbar-brand nav-item'>
                    <img src={Avatar} alt='Chris' height="70" class='rounded-circle d-inline-block align-top'/>
                    Chris
                </a>
                <li class='nav-item'>
                    <a class='nav-link' href='...'>About</a>
                </li>
                <li class='nav-item'>
                    <a class='nav-link' href='...'>Projects</a>
                </li>
                <li class='nav-item'>
                    <a class='nav-link' href='...'>Contact</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar