import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElement'
import "../Styles/Web/Navigation.css"

const Navigation = () => {
    return (
        <div className="Navigation">
        <Nav>
            <NavLink to="/">
                {/* Add image here */}
                <h1>Project</h1>
            </NavLink>
            <Bars />
           
            <NavBtn>
                <NavBtnLink to="/dashboard" >
                    Dashboard
                </NavBtnLink>
            </NavBtn>
        </Nav>
        </div>
    );
};

export default Navigation;