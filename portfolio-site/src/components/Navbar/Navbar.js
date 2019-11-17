import React from 'react'

function Navbar () {
    return (
        <div class="sticky-top">
            <nav class="navbar bg-light border rounded-lg">
                <a class='text-decoration-none text-info mr-auto pl-3' href='#home'>
                    <img src='/images/avatar/chris.png' alt='Chris' height="70" class='rounded-circle d-inline-block'/>
                    <span class='font-weight-bold pl-3'>Chris</span>
                </a>
                <div class="d-none d-md-flex">
                    <p class="nav-item p-3">
                        <a class="btn btn-info font-weight-bolder text-white" href="#skills">Skills</a>
                    </p>
                    <p class="nav-item p-3">
                        <a class="btn btn-info font-weight-bolder text-white" href="#projects">Projects</a>
                    </p>
                    <p class="nav-item p-3">
                        <a class="btn btn-info font-weight-bolder text-white" href="#contact">Contact</a>
                    </p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar