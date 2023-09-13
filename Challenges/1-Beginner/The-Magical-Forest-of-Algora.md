## The Magical Forest of Algora

<picture>
    <img src="../../Images/algora-forest.jpg" style="width: 830px" />
</picture>

### Background

Deep within the enchanted Forest of Algora, two mystical creatures, the Lox and the Faelis, perform a sacred dance every millennium. This dance is not just for celebration but is a ritual to bring balance to the forest.

### Objective

Your task is to simulate the dance between Lox and Faelis. Each creature has its own set of dance moves, and the combination of moves creates various magical effects in the forest. Your goal is to determine the state of the forest after the dance is complete.

### Specifications

1. **Dance Moves and Effects:**
    - Each creature can perform one of three dance moves: `Twirl`, `Leap`, or `Spin`.
    - The combination of moves from both creatures results in a magical effect:
        - Twirl + Twirl = Fireflies light up the forest.
        - Leap + Spin = Gentle rain starts falling.
        - Spin + Leap = A rainbow appears in the sky.
        - Other combinations create different effects that you can dream up.
  
2. **Dance Dynamics:**
    - Each effect will change the state of the forest.
    - Some effects can be beneficial, while others can be detrimental.

3. **Dance Sequence:**
    - The dance consists of 5 sequences.
    - You need to display the state of the forest after each sequence.

4. **Creature Moves:**

    **Moves for Lox (Creature 1)**

    | Sequence 1 | Sequence 2 | Sequence 3 | Sequence 4 | Sequence 5 |
    |------------|------------|------------|------------|------------|
    | Twirl      | Leap       | Spin       | Twirl      | Leap       |

    **Moves for Faelis (Creature 2)**

    | Sequence 1 | Sequence 2 | Sequence 3 | Sequence 4 | Sequence 5 |
    |------------|------------|------------|------------|------------|
    | Spin       | Twirl      | Leap       | Leap       | Spin       |

5. **Advanced Features (if time permits):**
    - Implement a system that allows users to add new dance moves and effects.
    - Users can select the dance move for each sequence.

### Constraints

- Use GitHub Copilot and write the simulation in any language you'd like.
- Focus on clear and concise code that handles the dance dynamics efficiently. Ask GitHub Copilot/Chat, "How can I make this code more readable and maintainable?".
- Creating a visual representation for the dance and effects is optional but encouraged if you have time.

### Summary of High-Level Steps to Perform

1. Initialize the state of the forest.
2. Each creature selects a dance move for each sequence.
3. Determine the effect of the combined dance moves on the forest.
4. Update the state of the forest after each sequence.
5. Display the final state of the forest after the dance is complete.