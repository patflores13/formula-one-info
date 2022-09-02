import axios from "axios"
import { useEffect, useState } from "react";
import { RaceResults, Result, RacesResponse } from "../types/API";


const useFetchRaceWinners = (year: string | undefined, round: string): {raceWinners: Result[], isLoading: boolean} => {
    const [raceWinners, setRaceWinners] = useState([] as Result[])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      let cancel = false;
      setIsLoading(true);

      const baseUrl = 'http://ergast.com/api/f1';
        const endpoint = '/results.json';
        const params = {
            year: year,
            round: round
        }
        const fetchUrl = `${baseUrl}/${params.year}/${params.round}${endpoint}`
      
        axios
        .get<RacesResponse>(fetchUrl)
        .then(res => {
            if (!cancel) {
                const raceResults = res.data.MRData.RaceTable.Races.pop() as RaceResults;
                setRaceWinners(raceResults.Results.slice(0,3))
                setIsLoading(false)
            }
            
        })
        .catch(e => {
            console.log(e)
        })

            return () => {
                cancel = true;
            }
    }, [round, year])

    return {raceWinners, isLoading}
}

export default useFetchRaceWinners