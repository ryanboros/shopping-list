import { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { debounce } from "lodash";

import { useAppDispatch } from "../../hooks/ReduxHooks";
import { addListItem } from "../../store/AppSlice";

const SearchInput = () => {
  const [searchResults, setSearchResults] = useState<SelectProps[]>([]);

  const dispatch = useAppDispatch();

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
    dispatch(addListItem(value));
  };

  const handleSearch = (value: string) => {
    if (value.length > 1) {
      debounceFetchShoppingItems(value);
    }
  };

  return (
    <AutoComplete
      notFoundContent="Item not found"
      options={searchResults}
      onSearch={handleSearch}
      onSelect={handleSelect}
    >
      <Input.Search enterButton placeholder="Search for items" />
    </AutoComplete>
  );
};

export default SearchInput;
