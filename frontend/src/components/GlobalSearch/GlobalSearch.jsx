import React from "react";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import {Search as SearchIcon,} from "@material-ui/icons";

import "./globalSearch.scss";
const GlobalSearch = () => {
  return (
    <>
      <TextField
        className="globalsearch-bar"
        placeholder="Search"
        margin="dense"
        variant="outlined"
        type="text"
        //   onKeyPress={setsearchKeyword}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className="search-icon">
              <IconButton disabled aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default GlobalSearch;
