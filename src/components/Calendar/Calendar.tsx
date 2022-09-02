import React from "react";
import Container from "@mui/material/Container";
import { useRecoilValue, useRecoilState } from "recoil";
import { filteredRaces, activeRace } from "../../recoil/calendarState";

import "./Calendar.css";
import CalendarFilter from "./CalendarFilter";
import CalendarList from "./CalendarList";
import CalendarCard from "./CalendarCard";

import { Race } from "../../types/API";

const Calendar = () => {
  const races = useRecoilValue(filteredRaces);
  const [activeRaceValue, setActiveRace] = useRecoilState(activeRace);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const newActive: Race | undefined = races.find(
      (race) => race.round === event.currentTarget.id
    );
    if (activeRaceValue.round !== event.currentTarget.id) {
      if (newActive && newActive !== activeRaceValue) {
        setActiveRace(newActive);
      }
    } else if (newActive === activeRaceValue) {
      setActiveRace({} as Race);
    }
  };

  const racesList = races?.map((race) => {
    return (
      <div key={race.round} id={race.round} onClick={handleClick}>
        <CalendarCard
          race={race}
          isActive={activeRaceValue.round === race.round}
        />
      </div>
    );
  });

  return (
    <Container maxWidth="md" className="calendar" sx={{ paddingBottom: 5 }}>
      <CalendarFilter />
      <CalendarList racesList={racesList} />
    </Container>
  );
};

export default Calendar;
