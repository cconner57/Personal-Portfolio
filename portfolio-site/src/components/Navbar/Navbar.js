import React from 'react'

function Navbar () {
    return (
        <div class='navbar sticky-top alert-primary'>
            <ul class='nav'>
                <a href='...' class='navbar-brand nav-item'>
                    <img src='/images/avatar/chris.png' alt='Chris' height="70" class='rounded-circle d-inline-block align-top'/>
                    Chris
                </a>
                <li class='nav-item justify-content-end'>
                    <a class='nav-link' href='...'>About</a>
                </li>
                <li class='nav-item justify-content-end'>
                    <a class='nav-link' href='...'>Projects</a>
                </li>
                <li class='nav-item justify-content-end'>
                    <a class='nav-link' href='...'>Contact</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar