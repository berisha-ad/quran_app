import { NavLink } from "react-router-dom"
import SearchByJuzs from "../components/SearchByJuzs"
import Button from "../components/Button"
import Section from "../components/Section"
import Container from "../components/Container"

const SearchByJuzsPage = () => {
    return (
            <Section>
                <Container>
                    <NavLink to='/' ><Button>Back</Button></NavLink>
                    <SearchByJuzs />
                </Container>
            </Section>
       
    )
}

export default SearchByJuzsPage