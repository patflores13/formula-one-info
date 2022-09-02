import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Event, Race } from "../../types/API";
import { createEvent, setTimezone } from "../../utils/formatEventInfo";

interface EventTimesProps {
  race: Race;
}

const EventTimes = ({ race }: EventTimesProps) => {
  let thirdEvent: Event;
  if (race.ThirdPractice) {
    thirdEvent = createEvent("Third Practice", race.ThirdPractice);
  } else if (race.Sprint) {
    thirdEvent = createEvent("Sprint Race", race.Sprint);
  } else {
    thirdEvent = createEvent("", { date: "", time: "" });
  }
  const rows: Array<Event> = [
    createEvent("First Practice", race.FirstPractice),
    createEvent("Second Practice", race.SecondPractice),
    thirdEvent,
    createEvent("Qualifying", race.Qualifying),
    createEvent("Lights Out", { date: race.date, time: race.time }),
  ];
  return (
    <Card
      sx={{
        flex: [1, 1, 0.45],
        backgroundColor: "#D2D6D9",
      }}
    >
      <TableContainer component={Box}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell size="small" align="center">
                Date
              </TableCell>
              <TableCell size="small" align="center">
                Event
              </TableCell>
              <TableCell size="small" align="center">
                Time {`(${setTimezone()})`}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, ind) => (
              <TableRow
                key={ind}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  sx={{
                    minWidth: "10ch",
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.eventTitle}</TableCell>
                <TableCell align="center" sx={{ minWidth: "12ch" }}>
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default EventTimes;
