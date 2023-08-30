class Creature
{
    public string Name { get; set; }
    public (int, int) Start { get; set; }
    public Direction[] Moves { get; set; }
    public int Power { get; set; }
    public string Icon { get; set; }

    public Creature(string name, (int, int) start, Direction[] moves, int power, string icon)
    {
        Name = name;
        Start = start;
        Moves = moves;
        Power = power;
        Icon = icon;
    }
}


enum Direction
{
    Up,
    Down,
    Left,
    Right
}

class BattleSimulator
{
    private const int GridSize = 5;
    private const string OverlapIcon = "🤺";
    private const string EmptyCellIcon = "⬜";

    private static readonly Dictionary<Direction, (int, int)> Directions = new()
    {
        [Direction.Up] = (-1, 0),
        [Direction.Down] = (1, 0),
        [Direction.Left] = (0, -1),
        [Direction.Right] = (0, 1)
    };

    private readonly List<Creature> _creatures;

    public BattleSimulator(List<Creature> creatures)
    {
        _creatures = creatures;
    }

    public Dictionary<string, int> Simulate()
    {
        var grid = new string?[GridSize, GridSize];
        var scores = _creatures.ToDictionary(creature => creature.Name, creature => 0);

        foreach (var creature in _creatures)
        {
            grid[creature.Start.Item1, creature.Start.Item2] = creature.Icon;
        }

        var maxMoves = _creatures[0].Moves.Length;
        for (int move = -1; move < maxMoves; move++)
        {
            RenderGrid(move, grid, scores);
            if (move == maxMoves - 1) break;

            foreach (var creature in _creatures)
            {
                var (x, y) = creature.Start;
                if (move < creature.Moves.Length)
                {
                    if (move >= 0)
                    {
                        (int dx, int dy) = Directions[creature.Moves[move]];
                        x = Math.Clamp(x + dx, 0, GridSize - 1);
                        y = Math.Clamp(y + dy, 0, GridSize - 1);
                    }
                }

                var overlappingCreature = _creatures.FirstOrDefault(c => c.Start == (x, y) && c.Name != creature.Name);
                if (overlappingCreature != null)
                {
                    scores[overlappingCreature.Name] -= creature.Power;
                    scores[creature.Name] += creature.Power;
                    grid[x, y] = OverlapIcon;
                }
                else
                {
                    grid[creature.Start.Item1, creature.Start.Item2] = null;
                    creature.Start = (x, y);
                    grid[x, y] = creature.Icon;
                }
            }
        }

        return scores;
    }

    private static void RenderGrid(int move, string?[,] grid, Dictionary<string, int> scores)
    {
        var moveText = move == -1 ? "Initial Board" : $"Move {move + 1}";
        Console.WriteLine(moveText);
        for (int i = 0; i < GridSize; i++)
        {
            for (int j = 0; j < GridSize; j++)
            {
                Console.Write($"{grid![i, j] ?? EmptyCellIcon} ");
            }
            Console.WriteLine();
        }
        Console.WriteLine("Scores:");
        foreach (var score in scores)
        {
            Console.WriteLine($"{score.Key}: {score.Value}");
        }
        Console.WriteLine("-----");
    }
}

public class Mythos
{
    public static void Run()
    {
        var creatures = new List<Creature>
        {
            new Creature("Dragon", (2, 2), new[] {Direction.Right, Direction.Left, Direction.Down}, 7, "🐉"),
            new Creature("Goblin", (2, 3), new[] {Direction.Left, Direction.Right, Direction.Up}, 3, "👺"),
            new Creature("Ogre", (0, 0), new[] {Direction.Right, Direction.Down, Direction.Down}, 5, "👹")
        };

        var simulator = new BattleSimulator(creatures);
        var scores = simulator.Simulate();
        foreach (var score in scores)
        {
            Console.WriteLine($"{score.Key}: {score.Value}");
        }
    }
}
