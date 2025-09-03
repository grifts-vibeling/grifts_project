const fs = require('fs');
const path = require('path');

const creatures = [
  "Lanternshade","Petal Wisp","Crystal Budling","Ashling Imp","Bubblefin",
  "Cogcrow","Glint Beetle","Flicker Sprite","Grumblepot","Echo Pebble",
  "Snarl Vine","Dustmote","Emberfang","Abyssail","Ironfin","Orrery Owl",
  "Rune Rat","Lichen Troll","Mooncap Hare","Cloudling","Sandskitter",
  "Chimevine","Icicle Cub","Brass Serpent","Stormcoil","Dreammoth",
  "Solar Lynx","Tide Titan","Blight Elk","Gloommask","Inferno Roc",
  "Cryo Seraph","Iron Colossus","Void Harpist","Stellar Stag","Glitchborn",
  "Aether Dragon","Eclipse Wyrm","Chronovore","Genesis Phoenix",
  "FluffNut","ZippyBear"
];

creatures.forEach(name => {
  const safeName = name.replace(/\s+/g, '_');
  if (!fs.existsSync(safeName)) {
    fs.mkdirSync(safeName, { recursive: true });
    fs.writeFileSync(
      `${safeName}/README.md`,
      `# ${name}\n\nThis folder is for **${name}**.`
    );
    console.log("📁 Created:", safeName);
  } else {
    console.log("⚠️ Exists:", safeName);
  }
});

