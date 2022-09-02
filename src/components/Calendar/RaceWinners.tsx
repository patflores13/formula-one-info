import React from "react";
import Box from "@mui/material/Box";

import DriversWin from "./DriversWin";

import useFetchRaceWinners from "../../hooks/useFetchRaceWinners";

import { Race } from "../../types/API";

interface RaceWinnersProps {
  race: Race;
}

const RaceWinners = ({ race }: RaceWinnersProps) => {
  const { raceWinners, isLoading } = useFetchRaceWinners(
    race.date.split("-").shift(),
    race.round
  );
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={2}
      mx={0}
      sx={{
        flex: [1, 1, 0.45],
      }}
    >
      <DriversWin raceWinners={raceWinners} isLoading={isLoading} />
    </Box>
  );
};

export default RaceWinners;
