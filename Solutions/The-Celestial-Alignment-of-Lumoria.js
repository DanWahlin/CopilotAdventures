function calculateLightIntensity(planets) {
    let sortedPlanets = [...planets].sort((a, b) => a.distance - b.distance);
    let results = [];

    for (let i = 0; i < sortedPlanets.length; i++) {
        let shadowCount = 0;
        for (let j = 0; j < i; j++) {
            if (sortedPlanets[j].size >= sortedPlanets[i].size) {
                shadowCount++;
            }
        }

        let intensity;
        if (shadowCount === 0) {
            intensity = 'Full';
        } else if (shadowCount === 1) {
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