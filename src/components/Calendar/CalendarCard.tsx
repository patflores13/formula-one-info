import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Race } from "../../types/API";
import CardExtension from "./CardExtension";

interface CalendarCardProps {
  race: Race;
  isActive?: boolean;
}

const CalendarCard = ({ race, isActive }: CalendarCardProps) => {
  const [year, month, day] = race.date.split("-");
  const [hrs, min] = race.time.split(":");
  const raceDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hrs),
    parseInt(min)
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Box
      py={1}
      style={
        raceDate < new Date(Date.now())
          ? {
              color: "grey",
              opacity: 0.75,
            }
          : {}
      }
    >
      <Paper
        elevation={2}
        sx={{
          backgroundColor: "#AEB7BF",
          "&:hover": {
            boxShadow: "none",
          },
          boxShadow: isActive ? "none" : null,
          padding: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            display="flex"
            m={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexBasis: "3em",
            }}
          >
            <Typography variant="subtitle1" component="span">
              Round
            </Typography>
            <Typography variant="subtitle1" component="span">
              {race.round}
            </Typography>
          </Box>
          <Box
            ml={1}
            sx={{
              flex: [1, 1, 1],
            }}
          >
            <Typography variant="h6" component="h2">
              {race.raceName}
            </Typography>
            <Typography variant="subtitle2" component="p">
              {race.Circuit.circuitName} - {race.Circuit.Location.locality}
            </Typography>
          </Box>
          <Box m={1}>
            <Typography variant="h6" component="span">{`${
              months[raceDate.getMonth()]
            } ${raceDate.getDate()}`}</Typography>
          </Box>
        </Box>
        {isActive && <CardExtension race={race} isActive={isActive} />}
      </Paper>
    </Box>
  );
};

export default CalendarCard;
