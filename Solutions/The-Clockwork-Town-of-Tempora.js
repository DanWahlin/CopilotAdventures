function timeDifference(clockTime, grandClockTime) {
    const [clockHour, clockMinute] = clockTime.split(":").map(Number);
    const [grandClockHour, grandClockMinute] = grandClockTime.split(":").map(Number);

    return (clockHour - grandClockHour) * 60 + (clockMinute - grandClockMinute);
}

function synchronizeClocks(clockTimes, grandClockTime) {
    return clockTimes.map(clockTime => timeDifference(clockTime, grandClockTime));
}

const clockTimes = ["14:45", "15:05", "15:00", "14:40"];
const grandClockTime = "15:00";
console.log(synchronizeClocks(clockTimes, grandClockTime));  // [-15, 5, 0, -20]
