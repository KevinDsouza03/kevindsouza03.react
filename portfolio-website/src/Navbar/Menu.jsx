import React, { useState } from 'react';
import './Menu.css'
import RendermenuImages from './RendermenuImages.jsx';
import RendermenuLinks from './RendermenuLinks.jsx';
export default function Menu() {
    const [isMenuopen, setMenuopen] = useState(false)
    function handleMenuopen() {
        setMenuopen(!isMenuopen)
    }   
    

    return(
        <nav className="menu">
            <button className="shadow-lg hover:bg-white hover:text-black hover:rounded-x1 transition-all duration-300 rounded-3x1 ease-linear"
            
            onClick={handleMenuopen}>
                Menu
            </button> 
            {isMenuopen && (
                <div>
                <RendermenuImages />
                <RendermenuLinks />
                </div>
            )}
        </nav>

    )

// notes for self. so isMenuopen is the value we are checking thats passed in useState(), in our case boolean.
// isMenuopen is our state variable, the one we want to base our interaction on.
// So then we have "setMenuopen" which is our React function to set the State.
// then we call with the opposite val of the boolean to set the new state, which is handeled by the javascript in the return statement.
// && works as "if true render ahead", else dont
}