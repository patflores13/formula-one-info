import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useRecoilState } from "recoil";
import { calendarFilterState } from "../../recoil/calendarState";

const CalendarFilter = () => {
  const [filterState, setFilterState] = useRecoilState(calendarFilterState);

  const handleChange = (e: SelectChangeEvent) => {
    setFilterState(e.target.value as string);
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 120 }} variant="standard">
        <InputLabel id="calendar-filter-label">Races</InputLabel>
        <Select
          labelId="calendar-filter-label"
          id="calendar-filter"
          value={filterState}
          onChange={handleChange}
        >
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="past">Past</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CalendarFilter;
