import { useContext, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { SearchContext } from "./SearchContext";


const Search = () => {

    const [search, setSearch] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const { setResults } = useContext(SearchContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/sqi-hassannahi-la/juzs/${search}.json`);
            console.log(response.data);
            setResults(response.data);
          } catch (error) {
            console.error(error);
          }

    }

    const handleDisabled = (value) => { 
        if (value.length == 0) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    };


    return ( 
        <form className="ml-auto" onSubmit={handleSubmit}>
            <input name="search" className="bg-white rounded-full shadow-sm p-2" placeholder="search..." type="text" value={search}
            onChange={(e) => {setSearch(e.target.value); handleDisabled(e.target.value)}}/>
            <Button type='submit' disabled={isDisabled}>search</Button>
        </form>
     );
}
 
export default Search;


