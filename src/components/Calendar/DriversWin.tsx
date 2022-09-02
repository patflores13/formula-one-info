import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Result } from "../../types/API";

interface DriversWinProps {
  raceWinners: Result[];
  isLoading: boolean;
}

const DriversWin = ({ raceWinners, isLoading }: DriversWinProps) => {
  const rows = raceWinners.map((result) => ({
    position: result.position,
    driverNumber: result.number,
    driverName: result.Driver.familyName,
  }));

  return (
    <Card
      sx={{
        backgroundColor: "#D2D6D9",
      }}
    >
      <TableContainer component={Box}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell size="small" align="left">
                Pos.
              </TableCell>
              <TableCell size="small" align="left">
                Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, ind) => (
              <TableRow
                key={ind}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" sx={{}}>
                  {row.position}
                </TableCell>
                <TableCell align="left">
                  {row.driverNumber + "  --  " + row.driverName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DriversWin;
