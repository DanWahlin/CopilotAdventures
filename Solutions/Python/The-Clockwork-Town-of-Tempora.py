def time_difference(clock_time, grand_clock_time):
    clock_hour, clock_minute = map(int, clock_time.split(":"))
    grand_clock_hour, grand_clock_minute = map(int, grand_clock_time.split(":"))

    return (clock_hour - grand_clock_hour) * 60 + (clock_minute - grand_clock_minute)

def synchronize_clocks(clock_times, grand_clock_time):
    return [time_difference(clock_time, grand_clock_time) for clock_time in clock_times]

clock_times = ["14:45", "15:05", "15:00", "14:40"]
grand_clock_time = "15:00"
print(synchronize_clocks(clock_times, grand_clock_time))  # [-15, 5, 0, -20]