import { Event, EventInfo } from "../types/API"

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

interface ObjectMap {
    [key: string]: string
}
  const tzMap: ObjectMap = {
    'Central Daylight Time': 'CDT'
}

export const createEvent = (eventName: string, eventInfo: EventInfo): Event => {
    const formattedInfo = formatEventInfo(eventInfo);
    const event: Event = {eventTitle: eventName, date: formattedInfo.date, time: formattedInfo.time}
    return event
}

const toTZAbbr = (timezone: string): string => tzMap[timezone];
export const setTimezone = (): string => {
    let timezoneStr;
    const localDate = new Date();
    const timeRegArr = localDate.toString().match(/\(([^\)]+)\)$/)
    if (!timeRegArr){ timezoneStr = ''}
    else {
        timezoneStr = timeRegArr[1];
    }
    return toTZAbbr(timezoneStr)
}

const formatTime = (time: string): string => {
    const [hrs, mins] = time.split(":").slice(0,2)
    const localDate = new Date();
    const timezoneOffset = localDate.getTimezoneOffset() / 60;

    let noon;
    if ((parseInt(hrs)-timezoneOffset)<12) {
         noon = "AM"
    } else {
        noon = "PM"
    }
    const formattedTime = (parseInt(hrs) - timezoneOffset).toString().concat(`:${mins} `).concat(noon)
    

    return (formattedTime)
}

export const formatEventInfo = ({ date, time }: EventInfo): EventInfo => {
    const [month, day] = date.split("-").slice(1);
    const shortDate = months[parseInt(month)-1].concat(' ').concat(parseInt(day).toString());
    const formattedTime = formatTime(time);
    return {date: shortDate, time: formattedTime}
}