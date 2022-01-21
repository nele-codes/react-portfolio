import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../nele-logos_transparent.png'

const NavBar = () => {
    return (
        <nav className="h-40 border-b-2 flex flex-col" style={{borderColor: "#e9e5da"}}>
            <div className="flex justify-center">
                <NavLink to="/">
                    <img src={logo} style={{height: "400px", margin: "-150px 0"}}></img>
                </NavLink>
            </div>
            <div className="flex m-auto space-x-12">
                <NavLink to="/" className="navLink">ABOUT ME</NavLink>
                <NavLink to="/projects" className="navLink">PROJECTS</NavLink>
                <NavLink to="/tools" className="navLink">TOOLS</NavLink>
                <NavLink to="/" className="navLink">CONTACT ME</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;