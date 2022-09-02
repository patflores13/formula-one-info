import React from "react";
import NextRace from "./NextRace";

interface CalendarListProps {
  racesList: JSX.Element[];
}

const CalendarList = ({ racesList }: CalendarListProps) => {
  return (
    <>
      <NextRace />
      <div className="calendar-list">{racesList}</div>
    </>
  );
};

export default CalendarList;
