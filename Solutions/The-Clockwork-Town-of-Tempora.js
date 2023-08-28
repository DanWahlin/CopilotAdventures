function timeDifference(clockTime, grandClockTime) {
    const [clockHour, clockMinute] = clockTime.split(":").map(Number);
    const [grandClockHour, grandClockMinute] = grandClockTime.split(":").map(Number);

    const clockTotalMinutes = clockHour * 60 + clockMinute;
    const grandClockTotalMinutes = grandClockHour * 60 + grandClockMinute;

    return clockTotalMinutes - grandClockTotalMinutes;
}

function synchronizeClocks(clockTimes, grandClockTime) {
    return clockTimes.map(clockTime => timeDifference(clockTime, grandClockTime));
}

const clockTimes = ["14:45", "15:05", "15:00", "14:40"];
const grandClockTime = "15:00";
console.log(synchronizeClocks(clockTimes, grandClockTime));  // [-15, 5, 0, -20]
