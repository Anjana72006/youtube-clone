import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onHandleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: {
          xs: "95%",
          sm: "500px",
          md: "600px",
        },
        height: "44px",
        backgroundColor: "#121212",
        border: "1px solid #303030",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "none",
        transition: "all .25s ease",

        "&:hover": {
          border: "1px solid #505050",
        },

        "&:focus-within": {
          border: "1px solid #3ea6ff",
        },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          height: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#ffffff",
          paddingLeft: "18px",
          fontSize: "16px",
        }}
      />

      <IconButton
        type="submit"
        sx={{
          width: "64px",
          height: "100%",
          borderLeft: "1px solid #303030",
          borderRadius: 0,
          background: "#222222",
          color: "#ffffff",
          transition: "0.25s",

          "&:hover": {
            background: "#3a3a3a",
          },
        }}
      >
        <SearchIcon sx={{ fontSize: 24 }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
