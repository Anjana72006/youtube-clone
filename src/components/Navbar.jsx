import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "#0f0f0f",
      height: "64px",
      px: 3,
      borderBottom: "1px solid #303030",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        minWidth: "170px",
      }}
    >
      <img
        src={logo}
        alt="YouTube"
        style={{
          height: "34px",
          cursor: "pointer",
        }}
      />
    </Link>

    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        marginLeft: "40px",
      }}
    >
      <SearchBar />
    </div>
  </Stack>
);

export default Navbar;
