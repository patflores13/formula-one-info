import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";

import { Race } from "../../types/API";
import EventTimes from "./EventTimes";
import RaceWinners from "./RaceWinners";
import createRaceDate from "../../utils/createRaceDate";

interface CardExtensionProps {
  race: Race;
  isActive: boolean;
}

const CardExtension = ({ race, isActive }: CardExtensionProps) => {
  const raceDate = createRaceDate(race.date, race.time);
  const pastRace = raceDate < new Date(Date.now());
  return (
    <Collapse in={isActive} collapsedSize={0}>
      <Container>
        <Box
          display="flex"
          width="90%"
          mx="auto"
          gap={4}
          sx={{
            justifyContent: "center",
            py: 3,
          }}
        >
          {pastRace ? <RaceWinners race={race} /> : <EventTimes race={race} />}
        </Box>
      </Container>
    </Collapse>
  );
};

export default CardExtension;
