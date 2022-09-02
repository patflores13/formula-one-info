import { atom, RecoilState, RecoilValueReadOnly, selector } from "recoil";
import axios from "axios";
import { Race, RacesResponse } from "../types/API";
import createRaceDate from "../utils/createRaceDate";

export const racesListState = atom({
    key: "racesListState",
    default: [] as Race[],
    effects: [
        ({ setSelf }) => {
            let cancel = false;
            const baseUrl = 'https://ergast.com/api/f1/2022.json';
            axios
            .get<RacesResponse>(baseUrl)
            .then(res => {
                if (!cancel) {
                    setSelf(res.data.MRData.RaceTable.Races as Race[])
                }
              
          })
    
      return () => {
        cancel = true;
      }
        }
    ]
})

// export const allRacesSelector = selector({
//     key: "allRacesSelector",
//     get: async () => {
//         const baseUrl = 'https://ergast.com/api/f1/2022.json';
//         const res = await axios.get<RacesResponse>(baseUrl);
//         return res.data.MRData.RaceTable.Races as Race[];
//     }
// })

export const calendarFilterState: RecoilState<string> = atom({
    key: "calendarFilterState",
    default: "upcoming"
})

export const filteredRaces: RecoilValueReadOnly<Race[]> = selector({
    key: "filteredRaces",
    get: ({get}) => {
        const allRaces = get(racesListState)
        const filter = get(calendarFilterState);
        const next = get(nextRace)
        if (filter === "all") {
            return allRaces.filter(race => race !== next);
        } else if (filter === 'upcoming') {
            return allRaces.filter(race => {
                const raceDate = createRaceDate(race.date, race.time);
                return (raceDate >= new Date(Date.now()) && race !== next)
            })
        } else {
            return allRaces.filter(race => {
                const raceDate = createRaceDate(race.date, race.time);
                return raceDate < new Date(Date.now())
            })
        }
    },
})

export const activeRace: RecoilState<Race> = atom({
    key: "activeRace",
    default: {} as Race
})

export const nextRace: RecoilValueReadOnly<Race> = selector({
    key: "nextRace",
    get: ({ get }) => {
        const allRaces = get(racesListState)
        let nextRace = allRaces.find(race => {
            const raceDate = createRaceDate(race.date, race.time);
            return raceDate >= new Date(Date.now())
        })
        if (!nextRace) {
            nextRace = {} as Race
        }
        return nextRace
    }
})