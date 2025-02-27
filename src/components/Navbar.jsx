import { NavLink } from "react-router-dom";
import Search from "./Search";
import Container from "./Container";


const Navbar = () => {


    return (
        <header className="p-4 bg-white shadow-md">
            <Container>
                <nav className="flex gap-4 items-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <Search />
                    
                </nav>
            </Container>
        </header>
    )
}

export default Navbar