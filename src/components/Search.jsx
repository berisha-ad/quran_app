import { useContext, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { SearchContext } from "./SearchContext";

const Search = ({closeNav}) => {
    const [selectedLanguage, setSelectedLanguage] = useState("deu-aburidamuhammad-la");
    const [isDisabled, setIsDisabled] = useState(true);
    const { setResults, setSearch, search } = useContext(SearchContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${selectedLanguage}/juzs/${search}.json`);
            
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
        <form className="text-sm lg:text-lg p-4 bg-white rounded-2xl shadow-md gap-4 flex lg:flex-row flex-col justify-between items-center" onSubmit={handleSubmit}>
            <div className="font-bold">
                Search by preferred language and juzs number
            </div>
            <div className="flex w-max gap-3 items-center">
                <select className="bg-white rounded-md shadow-sm p-2"
                    name="language"
                    id="language"
                    value={selectedLanguage}
                    onChange={handleChange} 
                >
                    <option value="deu-aburidamuhammad-la">German</option>
                    <option value="eng-abdelhaleem">English</option>
                    <option value="sqi-hassannahi-la">Albanian</option>
                    <option value="ara-jalaladdinalmah">Arabic</option>
                    <option value="ara-quran-la2">Arabic</option>
                </select>
                <input name="search" className="bg-white rounded-md lg:w-40 w-30 shadow-sm p-2" placeholder="juzs number" type="number"
                    onChange={(e) => { 
                        setSearch(e.target.value);
                        handleDisabled(e.target.value);
                    }} />
                <Button type='submit' onClick={closeNav} disabled={isDisabled}>search</Button>
            </div>
        </form>
     );
}

export default Search;


