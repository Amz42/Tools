const DAY_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LIST = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const digitalClock = () => {
    const currentDateTime = new Date();
    let hour = currentDateTime.getHours();
    let minute = currentDateTime.getMinutes();
    let second = currentDateTime.getSeconds();
    const day = DAY_LIST[currentDateTime.getDay()];
    let date = currentDateTime.getDate();
    const month = MONTH_LIST[currentDateTime.getMonth()];
    const year = "" + currentDateTime.getFullYear();
    const meridian = (hour >= 12) ? " pm" : " am";
    if (hour != 12)
        hour %= 12;
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (second < 10)
        second = "0" + second;
    if (date < 10)
        date = "0" + date;
    const watchElement = document.querySelector("#watch");
    watchElement.innerText = `${hour} : ${minute} : ${second} ${meridian}`;
    const dateElement = document.querySelector("#date");
    dateElement.innerText = `${day}, ${date} ${month} ${year}`;
};
