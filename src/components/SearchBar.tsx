import { ChangeEvent, useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../types";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch();
  const categories = useSelector((state: StateType) => state.categories);
  const categoryFilter = useSelector(
    (state: StateType) => state.filter.category
  );

  // fix the typing here
  const handleToggleFilters = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProductSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchFilter = event.target.value;
    setSearch(newSearchFilter);
    dispatch({ type: "FILTER", payload: newSearchFilter });
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    dispatch({ type: "CATEGORY", payload: selectedValue });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        width: { sm: "50%", xs: "90%" },
        margin: "auto",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search..."
        sx={{ flex: 1 }}
        value={search}
        onChange={handleProductSearch}
      />
      <IconButton onClick={handleToggleFilters}>
        <FilterListIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 200,
          },
        }}
      >
        <RadioGroup value={categoryFilter} onChange={handleFilterChange}>
          <MenuItem>
            <FormControlLabel control={<Radio />} value="all" label="all" />
          </MenuItem>
          {categories.map((c) => {
            return (
              <MenuItem key={c}>
                <FormControlLabel control={<Radio />} value={c} label={c} />
              </MenuItem>
            );
          })}
        </RadioGroup>
      </Menu>
    </Box>
  );
};

export default SearchBar;
