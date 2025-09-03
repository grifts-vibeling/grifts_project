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

const baseDir = 'creatures';

// Ensure the 'creatures' folder exists
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);

creatures.forEach(name => {
  const safeName = name.replace(/\s+/g, '_');
  const oldPath = path.join('.', safeName);
  const newPath = path.join(baseDir, safeName);

  // Move existing folder if it exists
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`📦 Moved: ${oldPath} → ${newPath}`);
  } 
  // Otherwise, create new folder
  else if (!fs.existsSync(newPath)) {
    fs.mkdirSync(newPath, { recursive: true });
    fs.writeFileSync(path.join(newPath, 'README.md'), `# ${name}\n\nThis folder is for **${name}**.`);
    console.log(`📁 Created: ${newPath}`);
  } 
  else {
    console.log(`⚠️ Exists: ${newPath}`);
  }
});

// Clean up: Remove any old empty creature folders in root
fs.readdirSync('.').forEach(file => {
  if (fs.lstatSync(file).isDirectory() && creatures.some(name => file === name.replace(/\s+/g, '_'))) {
    try {
      fs.rmdirSync(file);
      console.log(`🗑 Removed empty root folder: ${file}`);
    } catch (err) {
      // Folder not empty, skip
    }
  }
});

console.log("\n✅ All creature folders are now inside 'creatures/'");
