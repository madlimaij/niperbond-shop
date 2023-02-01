import React, { useState } from "react";
import { Product } from "../models/Product";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

type SearchBarProps = {
  productList: Product[] | null;
  setSearchResult: (productList: Product[] | null) => void;
};
const useStyles = createUseStyles({
  input: {
    position: "absolute",
    top: 185,
    right: 40,
    width: 200,
    fontFamily: theme.font.fontFamily,
    fontSize: theme.typography.body,
  },
});

const SearchBar: React.FC<SearchBarProps> = ({
  setSearchResult,
  productList,
}) => {
  const classes = useStyles();
  const handleSearch = (e: any) => {
    const filtered = productList?.filter((el) => {
      if (e.target.value === "") return el;
      return el.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (filtered) {
      setSearchResult(filtered);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Otsi toodet..."
          onChange={handleSearch}
          className={classes.input}
        />
      </form>
    </div>
  );
};

export default SearchBar;
