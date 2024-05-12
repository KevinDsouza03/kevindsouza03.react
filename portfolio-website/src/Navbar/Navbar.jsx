import React from 'react';
import './Navbar.css'
import Menu from './Menu.jsx'
export default function Navbar() {
    return (
        <>
        <div className="fixed top-0 left-0">
            <p>Kevin Dsouza, Software Engineer</p>
            <Menu />
        </div>
        </>
    )

}