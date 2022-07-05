import { createContext, useState} from "react";
import axios from "axios";

const SearchContext = createContext({
  searchInputs: "",
  filteredUsers: []
});

const SearchProvider = ({ children }) => {
  //our state for search values
  const [searchInputs, setSearchInputs] = useState('');

  // create a state to hold the value of the search
  const [filteredUsers, setFilteredUsers] = useState([]);

  //creating a function that will handlesearch

  const handleSearch = (value) => {
    if (value && value.length > 1) {
      axios
        .get(`https://api.github.com/search/users?q=${value}`)
        .then((res) => {
              setFilteredUsers(res.data.items);
              console.log (res.data.items)
        })
        .catch((err) => console.log(err));
    } else {
      setFilteredUsers([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchInputs,
        setSearchInputs,
        filteredUsers,
        setFilteredUsers,
        handleSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
