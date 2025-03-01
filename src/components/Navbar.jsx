import { NavLink } from "react-router-dom";
import Search from "./Search";
import Container from "./Container";
import Logo from "./Logo";
import quran from "../assets/quran.svg"
import Button from "./Button";
import "./navbar.css"


import {useState} from 'react'


const Navbar = () => {

const [isOpen, setisOpen]= useState(false);

const toggleNavbar = () => {
    setisOpen(!isOpen);
};

// {`lg:hidden ${!isOpen ? "hidden" : ''}

    return (
        <header className="w-screen fixed z-40 top-0 left-0 py-2 bg-white shadow-md flex">
            <Container>
                <nav className="hidden lg:flex items-center justify-between">
                    <NavLink to='/'>
                        <Logo src={quran}></Logo>
                    </NavLink>
                    <div className="flex gap-4">
                        <NavLink className='font-bold text-gray-700 transition-all hover:-translate-x-0.5' to='/'>Home</NavLink>
                        <NavLink className='font-bold text-gray-700 transition-all hover:-translate-x-0.5' to='/about'>About</NavLink>
                    </div>
                </nav> 

                <nav className="lg:hidden flex items-center justify-between">
                    <NavLink to='/'>
                        <Logo src={quran}></Logo>
                    </NavLink>
                    <div className={`lg:hidden ${!isOpen ? "navbar-close" : ''} navbar `}>
                        <NavLink to='/' onClick={toggleNavbar}>Home</NavLink>
                        <NavLink to='/about' onClick={toggleNavbar}>About</NavLink>
                    </div>
                    
                    <button className="bg-green-500 text-white cursor-pointer font-bold py-2 px-4 rounded-xl" onClick={toggleNavbar}>menu</button>
                    
                </nav>

            
                
            </Container>
        </header>
    )
}

export default Navbar