import { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { debounce } from "lodash";

const SearchInput = () => {
  const [searchResults, setSearchResults] = useState<SelectProps[]>([]);

  const fetchShoppingItems = (query: string) => {
    fetch(`https://api.frontendeval.com/fake/food/${query}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(
          res.map((str: string) => {
            return { label: str, value: str };
          })
        );
      })
      .catch((error) => console.error(error));
  };

  const debounceFetchShoppingItems = debounce(fetchShoppingItems, 1500);

  const handleSelect = (value: string) => {
    // console.log(value);
  };

  const handleSearch = (value: string) => {
    if (value.length > 1) {
      debounceFetchShoppingItems(value);
    }
  };

  return (
    <AutoComplete
      options={searchResults}
      onSelect={handleSelect}
      onSearch={handleSearch}
    >
      <Input.Search enterButton />
    </AutoComplete>
  );
};

export default SearchInput;
