import { createContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext({
  searchInputs: "",
  filteredUsers: []
});

const SearchProvider = ({ children }) => {
  //our state for search inputs
  const [searchInputs, setSearchInputs] = useState([]);
  //our state for storing the filtered user
  const [filteredUsers, setFilteredUsers] = useState([]);

  //creating a function that will handlesearch

  const handleSearch = (value) => {
    if (searchInputs !== '') {
      const filteredData = axios
        .get(`https://api.github.com/search/users?q=${value}`)
        .then((res) => {
          setSearchInputs(res.data.items);
          console.log(res.data.items)
        });
      setFilteredUsers(filteredData);
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
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };

 //show filterd users from the handlesearch
  // useEffect(() => {
  //   if (searchInputs && searchInputs.length > 1) {
  //     setUserDetails(setFilteredUsers);
  //   } else {
  //     setUserDetails(filteredUsers);
  //   }
  // }, [setFilteredUsers, searchInputs, filteredUsers]);
  // const { searchInputs, setFilteredUsers, filteredUsers } = useContext(SearchContext);
  //import { SearchContext } from "../../context/context";