public class Tempora
{
    public static int TimeDifference(string clockTime, string grandClockTime)
    {
        var (clockHour, clockMinute) = ParseTime(clockTime);
        var (grandClockHour, grandClockMinute) = ParseTime(grandClockTime);

        return (clockHour - grandClockHour) * 60 + (clockMinute - grandClockMinute);
    }

    private static (int Hour, int Minute) ParseTime(string time)
    {
        var parts = time.Split(':').Select(int.Parse).ToArray();
        return (parts[0], parts[1]);
    }

    public static List<int> SynchronizeClocks(List<string> clockTimes, string grandClockTime)
    {
        return clockTimes.Select(clockTime => TimeDifference(clockTime, grandClockTime)).ToList();
    }

    public static void Run()
    {
        var clockTimes = new List<string> { "14:45", "15:05", "15:00", "14:40" };
        const string grandClockTime = "15:00";
        Console.WriteLine($"[{string.Join(", ", SynchronizeClocks(clockTimes, grandClockTime))}]");  // Outputs: [-15, 5, 0, -20]
    }
}
