const createRaceDate =(date: string, time: string): Date => {
    const [year, month, day] = date.split("-");
    const [hrs, min] = time.split(":");
    const raceDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hrs),
        parseInt(min)
    );
    return raceDate
}

export default createRaceDate