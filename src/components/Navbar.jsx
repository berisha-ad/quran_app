import { NavLink } from "react-router-dom";
import Search from "./Search";
import Container from "./Container";

import {useState} from 'react'


const Navbar = () => {

const [isOpen, setisOpen]= useState(false);

const toggleNavbar = () => {
    setisOpen(!isOpen);
};


    return (
        <header className="p-4 bg-white shadow-md">
            <Container>
                <nav className="hidden lg:flex gap-4 items-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <Search />
                </nav>

                <nav className={`lg:hidden ${!isOpen ? "hidden" : ''} flex flex-col gap-4 items-center h-screen justify-center`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>  
                </nav>
                <button className=" px-6 lg:hidden py-2 bg-white shadow-md rounded-full absolute z-10 top-10 right-10" onClick={toggleNavbar}>menu</button>
            </Container>
        </header>
    )
}

export default Navbar