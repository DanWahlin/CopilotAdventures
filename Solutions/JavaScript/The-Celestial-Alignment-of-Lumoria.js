const lumoriaPlanets = [
    { name: "Mercuria", distance: 0.4, size: 4879 },
    { name: "Venusia", distance: 0.7, size: 12104 },
    { name: "Earthia", distance: 1, size: 12742 },
    { name: "Marsia", distance: 1.5, size: 6779 }
];

function getShadowCount(planets, currentIndex) {
    return planets.slice(0, currentIndex)
        .filter(planet => planet.size > planets[currentIndex].size)
        .length;
}

function getLightIntensity(i, shadowCount) {
    if (i === 0) return 'Full';
    if (shadowCount > 1) return 'None (Multiple Shadows)';
    if (shadowCount === 1) return 'None';
    return 'Partial';
}

function calculateLightIntensity(planets) {
    return planets.map((planet, i) => {
        const shadowCount = getShadowCount(planets, i);
        let lightIntensity = getLightIntensity(i, shadowCount);
        return { name: planet.name, light: lightIntensity };
    });
}

// Sort planets by distance
const sortedPlanets = lumoriaPlanets.sort((a, b) => a.distance - b.distance);
console.log(calculateLightIntensity(sortedPlanets));
