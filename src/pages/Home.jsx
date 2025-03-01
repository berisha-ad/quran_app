
import Section from "../components/Section"
import Container from "../components/Container"
import Grid from "../components/Grid"
import Card from "../components/Card"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <Section>
            <Container>
                <Grid>
                    <Card>
                        <NavLink to='/search-by-juzs'>
                            <h2 className="text-3xl font-bold underline">Juzs</h2>
                        </NavLink>
                        <p>
                            There are 30 Juzs of the Quran, perfect for reading the entire Quran in Ramadan.
                            Select a language, type in the Juzsnumber and start to read
                        </p>
                    </Card>
                    <Card>
                        <NavLink to='/chapters'>
                            <h2 className="text-3xl font-bold underline">Suras</h2>
                        </NavLink>
                        <p>
                            There are 114 Suras in the Quran.
                        </p>
                    </Card>
                    <Card>
                        <NavLink to='/verses'>
                            <h2 className="text-3xl font-bold underline">Verses</h2>
                        </NavLink>
                        <p>
                            Verses
                        </p>
                    </Card>
                    
                </Grid>
            </Container>
        </Section>
    )
}

export default Home