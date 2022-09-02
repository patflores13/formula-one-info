import React from "react";
import { useRecoilValue } from "recoil";
import { nextRace } from "../../recoil/calendarState";
import CalendarCard from "./CalendarCard";

const NextRace = () => {
  const race = useRecoilValue(nextRace);
  return <CalendarCard race={race} isActive={true} />;
};

export default NextRace;
