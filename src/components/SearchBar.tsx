import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
  });

  const handleToggleFilters = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
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
      <TextField variant="outlined" placeholder="Search..." sx={{ flex: 1 }} />
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
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.filter1}
                onChange={handleFilterChange}
                name="filter1"
              />
            }
            label="Filter 1"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.filter2}
                onChange={handleFilterChange}
                name="filter2"
              />
            }
            label="Filter 2"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.filter3}
                onChange={handleFilterChange}
                name="filter3"
              />
            }
            label="Filter 3"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.filter4}
                onChange={handleFilterChange}
                name="filter4"
              />
            }
            label="Filter 4"
          />
        </MenuItem>
      </Menu>
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
