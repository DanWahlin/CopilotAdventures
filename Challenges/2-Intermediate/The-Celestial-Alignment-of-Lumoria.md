## The Celestial Alignment of Lumoria

### Background:

In the vast expanse of the Galaxia Nebulae, a rare phenomenon is about to occur in the Lumoria star system. The planets, revolving around the Lumorian Sun, are aligning in a celestial dance that happens only once every few millennia. This alignment has a unique effect on how the light from the Lumorian Sun reaches each planet.

### Objective:

Your task is to calculate the intensity of light each planet receives during this alignment. Given the distances of the planets from the Lumorian Sun and their relative positions, determine which planets might experience a decrease in light intensity due to other planets casting shadows on them.

### Specifications:

1. **Planetary Data:**

| Planet Name | Distance (AU) | Size (km) |
|-------------|---------------|----------|
| Mercuria    | 0.4           | 4879     |
| Venusia     | 0.7           | 12104    |
| Earthia     | 1             | 12742    |
| Marsia      | 1.5           | 6779     |

The planets are already sorted in order of their distance from the Lumorian Sun.

2. **Light Dynamics:**
- If a smaller planet is behind a larger planet (relative to the Lumorian Sun), it will be in the shadow and will receive no light.
- If a planet is in the shadow of multiple planets, it will be marked as 'None (Multiple Shadows)'.
- If two planets are of similar size and are near each other in alignment, they might partially eclipse each other, but for simplicity, you can consider them both to receive full light.

3. **Output:**
    - Your system should output a list of planets and the light intensity they receive: Full, Partial, None, or None (Multiple Shadows).

### Constraints:

- Use GitHub Copilot and write the simulation in any language you'd like.
- Focus on clear and concise code that handles the dance dynamics efficiently.
- Creating a visual SVG representation for the planets is optional but encouraged if you have time.
- Handle scenarios efficiently where a planet may be in the shadow of multiple planets.

### Summary of High-Level Steps to Perform:

1. Sort the list of planets based on their distance from the Lumorian Sun.
1. Traverse the sorted list of planets.
1. For each planet, check the planets that are closer to the Lumorian Sun to see if they cast a shadow on it.
1. Output the light intensity each planet receives.