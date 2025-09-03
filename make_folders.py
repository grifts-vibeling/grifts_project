import os

# List of all 42 creatures
creatures = [
    "Lanternshade", "Petal Wisp", "Crystal Budling", "Ashling Imp", "Bubblefin",
    "Cogcrow", "Glint Beetle", "Flicker Sprite", "Grumblepot", "Echo Pebble",
    "Snarl Vine", "Dustmote", "Emberfang", "Abyssail", "Ironfin", "Orrery Owl",
    "Rune Rat", "Lichen Troll", "Mooncap Hare", "Cloudling", "Sandskitter",
    "Chimevine", "Icicle Cub", "Brass Serpent", "Stormcoil", "Dreammoth",
    "Solar Lynx", "Tide Titan", "Blight Elk", "Gloommask", "Inferno Roc",
    "Cryo Seraph", "Iron Colossus", "Void Harpist", "Stellar Stag", "Glitchborn",
    "Aether Dragon", "Eclipse Wyrm", "Chronovore", "Genesis Phoenix",
    "FluffNut", "ZippyBear"
]

# Create folders in the current directory
for creature in creatures:
    safe_name = creature.replace(" ", "_")  # replace spaces with underscores
    os.makedirs(safe_name, exist_ok=True)

print("✅ All 42 creature folders created successfully!")