function calculateLightIntensity(planets) {
    const sortedPlanets = planets.sort((a, b) => a.distance - b.distance);
    const results = [];
    let largerPlanetsCount = 0;

    for (let i = 0; i < sortedPlanets.length; i++) {
        if (i > 0 && sortedPlanets[i - 1].size >= sortedPlanets[i].size) {
            largerPlanetsCount++;
        }

        let intensity;
        if (largerPlanetsCount === 0) {
            intensity = 'Full';
        } else if (largerPlanetsCount === 1) {
            intensity = 'None';
        } else {
            intensity = 'None (Multiple Shadows)';
        }

        results.push({
            planet: sortedPlanets[i].name,
            lightIntensity: intensity
        });
    }

    return results;
}

const planets = [
    { name: "Earthia", distance: 1, size: 12742 },
    { name: "Mercuria", distance: 0.4, size: 4879 },
    { name: "Marsia", distance: 1.5, size: 6779 },
    { name: "Venusia", distance: 0.7, size: 12104 }
];

console.log(calculateLightIntensity(planets));
