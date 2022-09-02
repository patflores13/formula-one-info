import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ConstWin = () => {
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
                Position
              </TableCell>
              <TableCell size="small" align="center">
                Constructor
              </TableCell>
              <TableCell size="small" align="center">
                Points?
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row, ind) => (
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
        ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ConstWin;
