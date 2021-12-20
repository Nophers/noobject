/*

This is the stylesheet for the NavElement component.
It is used to style the nav elements.

*/

import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

// Top Navbar
export const Nav = styled.nav`
    background: #1F2937; 
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #7C3AED;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

// Mobile Navbar
export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    margin-right: 24px;
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #6D28D9;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #7C3AED;
        color: #010606;
    }
`