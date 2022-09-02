export type Race = {
    season: string,
    round: string,
    url: string,
    raceName: string,
    date: string,
    time: string,
    Circuit: Circuit
    FirstPractice: EventInfo
    SecondPractice: EventInfo
    ThirdPractice?: EventInfo
    Sprint?: EventInfo
    Qualifying: EventInfo
}
export interface RaceTable {
    Races: Race[]
    season: string
}
export type RacesResponse = {
    MRData: {
        xmlns: string,
        series: string,
        url: string,
        limit: string,
        offset: string,
        total: string,
        RaceTable: RaceTable | RaceResultsTable
    }
}

export type Circuit = {
    circuitId: string,
    url: string,
    circuitName: string,
    Location: Location
}

export interface Location {
    lat: string,
    long: string,
    locality: string,
    country: string,
}

export interface EventInfo {
    date: string,
    time: string
}

export interface Event extends EventInfo {
    eventTitle: string
}

export interface Constructor {
    constructorId: string
    name: string
    nationality: string
    url: string
}

export interface Driver {
    code: string
    dateOfBirth: string
    driverId: string
    familyName: string
    givenName: string
    nationality: string
    permanentNumber: string
    url: string
}

interface AverageSpeed {
    units: string
    speed: string
}

export interface FastestLap {
    AverageSpeed: AverageSpeed
    Time: Time
    lap: string
    rank: string
}

export interface Time {
    time: string
    millis?: string
}

export interface Result {
    Constructor: Constructor
    Driver: Driver
    FastestLap: FastestLap
    Time: Time
    grid: string
    laps: string
    number: string
    points: string
    position: string
    positionText: string
    status: string
}

export interface RaceResultsTable {
    Races: RaceResults[]
    season: string
    round: string
}

export interface RaceResults {
    Circuit: Circuit
    Results: Result[]
    season: string,
    round: string,
    url: string,
    raceName: string,
    date: string,
    time: string,
}