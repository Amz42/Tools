const DAY_LIST: string[] = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTH_LIST: string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const digitalClock = () => {
    const currentDateTime: Date = new Date();
    let hour: (string | number) = currentDateTime.getHours();
    let minute: (string | number) =  currentDateTime.getMinutes();
    let second: (string | number) = currentDateTime.getSeconds();
    const day: string = DAY_LIST[currentDateTime.getDay()];
    let date: (string | number) = currentDateTime.getDate();
    const month: string = MONTH_LIST[currentDateTime.getMonth()];
    const year: string = "" + currentDateTime.getFullYear();
    const meridian = (hour >= 12)  ? " pm" : " am";

    if(hour != 12) hour %= 12;
    if(hour < 10) hour = "0" + hour;
    if(minute < 10) minute = "0" + minute;
    if(second < 10) second = "0" + second;
    if(date < 10) date = "0" + date;

    const watchElement = document.querySelector("#watch") as HTMLHeadElement;
    watchElement.innerText = `${hour} : ${minute} : ${second} ${meridian}`;

    const dateElement = document.querySelector("#date") as HTMLHeadElement;
    dateElement.innerText = `${day}, ${date} ${month} ${year}`;
}