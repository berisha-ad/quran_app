import Card from "./Card";
import Grid from "./Grid";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import Container from "./Container";
import Search from "./Search";

const ResultsSection = () => {
    const { results, search } = useContext(SearchContext); 

    const juzs = results.juzs;

    return ( 
        <section className="py-24">
            <Container>
                <h1 className="text-4xl font-bold mb-4">
                    {juzs && juzs.length > 0 ? 'Juzs: ' + search : 'Search'}
                </h1>
                <Grid>
                    {juzs?.length > 0 && juzs.map((juzs, index) => (
                        <Card key={index} chapter={juzs.chapter} verse={juzs.verse} text={juzs.text} />
                    ))}
                </Grid>
            </Container>
        </section>
     );
}

export default ResultsSection;