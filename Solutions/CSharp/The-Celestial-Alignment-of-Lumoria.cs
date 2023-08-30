public class Planet
{
    public string Name { get; set; } = string.Empty;
    public double Distance { get; set; }
    public double Size { get; set; }
}

public class IntensityResult
{
    public string Planet { get; set; } = string.Empty;
    public string LightIntensity { get; set; } = string.Empty;
}

public class Lumoria
{
    public static List<IntensityResult> CalculateLightIntensity(List<Planet> planets)
    {
        var sortedPlanets = planets.OrderBy(p => p.Distance).ToList();
        var results = new List<IntensityResult>();
        int largerPlanetsCount = 0;

        for (int i = 0; i < sortedPlanets.Count; i++)
        {
            if (i > 0 && sortedPlanets[i - 1].Size >= sortedPlanets[i].Size)
            {
                largerPlanetsCount++;
            }

            string intensity = largerPlanetsCount switch
            {
                0 => "Full",
                1 => "None",
                _ => "None (Multiple Shadows)"
            };

            results.Add(new IntensityResult
            {
                Planet = sortedPlanets[i].Name,
                LightIntensity = intensity
            });
        }

        return results;
    }

    public static void Run()
    {
        var planets = new List<Planet>
        {
            new Planet { Name = "Earthia", Distance = 1, Size = 12742 },
            new Planet { Name = "Mercuria", Distance = 0.4, Size = 4879 },
            new Planet { Name = "Marsia", Distance = 1.5, Size = 6779 },
            new Planet { Name = "Venusia", Distance = 0.7, Size = 12104 }
        };

        var results = CalculateLightIntensity(planets);
        foreach (var result in results)
        {
            Console.WriteLine($"Planet: {result.Planet}, Light Intensity: {result.LightIntensity}");
        }
    }
}
