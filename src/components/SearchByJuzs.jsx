import Card from "./Card";
import Grid from "./Grid";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import Search from "./Search";


const SearchByJuzs = () => {
    const { results, search } = useContext(SearchContext); 

    const juzs = results.juzs;

    return ( 
        <>
            <Search />
            <h1 className="text-4xl font-bold my-4">
                {juzs && juzs.length > 0 ? 'Juzs: ' + search : ''}
            </h1>
            <Grid>
                {juzs?.length > 0 && juzs.map((juzs, index) => (
                    <Card key={index}>
                        <h2 className="text-xl font-bold">Chapter: {juzs.chapter}, Verse: {juzs.verse}</h2>
                        <p>{juzs.text}</p>
                    </Card>
                ))}
            </Grid>
        </>
     );
}

export default SearchByJuzs;