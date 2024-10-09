// Initial game state
let gold = 10;
let ore = 0;
let wood = 0;
let swords = 0;
let axes = 0;
let fireBurning = false;

// Command functions
function fire() {
  if (!fireBurning && wood > 0) {
    wood--;
    fireBurning = true;
    console.log("The fire is now burning.");
  } else if (fireBurning) {
    fireBurning = false;
    console.log("The fire is now out.");
  } else {
    console.log("Not enough wood to start the fire.");
  }
}

function buy(item) {
  if (fireBurning) {
    console.log("Can't buy supplies while the fire is burning.");
    return;
  }

  if (item === "ore" && gold >= 3) {
    gold -= 3;
    ore++;
    console.log("Bought 1 piece of ore.");
  } else if (item === "wood" && gold >= 1) {
    gold -= 1;
    wood++;
    console.log("Bought 1 piece of wood.");
  } else {
    console.log("Not enough gold or invalid item.");
  }
}

function make(item) {
  if (!fireBurning) {
    console.log("You need a burning fire to make weapons.");
    return;
  }

  if (item === "sword" && ore >= 2 && wood >= 1) {
    ore -= 2;
    wood -= 1;
    swords++;
    console.log("Made 1 sword.");
  } else if (item === "axe" && ore >= 1 && wood >= 2) {
    ore -= 1;
    wood -= 2;
    axes++;
    console.log("Made 1 axe.");
  } else {
    console.log("Not enough materials to make " + item);
  }
}

function sell(item) {
  if (fireBurning) {
    console.log("Can't sell items while the fire is burning.");
    return;
  }

  if (item === "sword" && swords > 0) {
    swords--;
    gold += 5;
    console.log("Sold 1 sword for 5 gold.");
  } else if (item === "axe" && axes > 0) {
    axes--;
    gold += 4;
    console.log("Sold 1 axe for 4 gold.");
  } else {
    console.log("No " + item + " to sell.");
  }
}

function inventory() {
  console.log(`Current Inventory: Gold: ${gold}, Ore: ${ore}, Wood: ${wood}, Swords: ${swords}, Axes: ${axes}.`);
}

function help() {
  return `INSTRUCTIONS:
  Blacksmith is a simple text-based game. 
  
  As a blacksmith, you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:

  - fire() : Start/Stop the fire.
  - buy(item) : Buy 'ore' or 'wood' with gold.
  - make(item) : Make 'sword' or 'axe' using ore and wood.
  - sell(item) : Sell 'sword' or 'axe' for gold.
  - inventory() : Show your current inventory.
  - help() : Show game instructions.`;
}

// Example of game flow
console.log(help());  // Show the game instructions

















