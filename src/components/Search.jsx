import { useContext, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { SearchContext } from "./SearchContext";

const Search = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("deu-aburidamuhammad-la");
    const [isDisabled, setIsDisabled] = useState(true);
    const { setResults, setSearch, search } = useContext(SearchContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${selectedLanguage}/juzs/${search}.json`);
            console.log(response.data);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleDisabled = (value) => { 
        if (value.length === 0) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    };

    return ( 
        <form className="ml-auto" onSubmit={handleSubmit}>
            <select className="mr-4"
                name="language"
                id="language"
                value={selectedLanguage}
                onChange={handleChange} 
            >
                <option value="deu-aburidamuhammad-la">German</option>
                <option value="eng-abdelhaleem">English</option>
                <option value="sqi-hassannahi-la">Albanian</option>
                <option value="ara-jalaladdinalmah">Arabic</option>
                <option value="ara-quran-la2">Arabic TLN</option>
            </select>
            <input name="search" className="bg-white rounded-full w-30 shadow-sm p-2" placeholder="search juzs..." type="number"
                onChange={(e) => { 
                    setSearch(e.target.value);
                    handleDisabled(e.target.value);
                }} />
            <Button type='submit' disabled={isDisabled}>search</Button>
        </form>
     );
}

export default Search;


