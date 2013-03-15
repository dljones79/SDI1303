//alert("JavaScript works!");

// David Jones
// SDI 1303
// Project 2

// Variables
var groupSize = 6								//group size
	hitPoints = 27000,							//mobs hit point total
	mobName = "Avatar of Fear",					//mob name
	groupMembers = ["Attritank", 				//array holding group member names
		"Attricane", 
		"Trevail", 
		"Vaylin", 
		"Royale", 
		"Atun"],
	loot1 = "Coif of Enlivened Chance",			//strings holding loot names
	loot2 = "Bangle of Demise",
	loot3 = "Corrupted Greaves of Sorrow"
; // Variables

// Procedural Function for determining if target is spotted.
var targetSpotted = function(spotted){
	if (spotted === true) {
		console.log ("I have spotted the target!");
	} else {
		console.log ("Let's wait for a respawn.");
	}
}; //targetSpotted

// Boolean Function to determine if group is set.
var groupSet = function(numGroupMembers, warded){
	if (numGroupMembers === 6 && warded === true){
	    count = 10; //initializing variable for count down
		var countDown = function(){
			for (var x = 10; x > 0; x--){
				if (x != 1){
					pluralization = " seconds";
				}else{pluralization = " second"};
			console.log("Pulling in " + x + pluralization + ".");
			}
		}; //countDown
		readyToPull = "We are ready to pull!"
		countDown();
		return readyToPull;
	} else { 
		readyToPull = "You guys are fail. We aren't ready yet.";
		return readyToPull;
	}
}; //groupSet

// Number Function to calculate dps (Damage Per Second) needed to kill mob before wipe.
var dpsNeeded = function(hitPoints){
	var timeToWipe = 60; //in seconds
	var dps = hitPoints/timeToWipe;
	while (hitPoints > 0){
		console.log ("Damaging " + mobName + " by " + dps + " damage per second!");
		console.log (hitPoints + " health left!");
		hitPoints -= dps; 
	}
	mobDefeated = "We have destroyed " + mobName + " in " + timeToWipe +
		" seconds, at " + dps + " damage per second!";
	return mobDefeated;
}; // dpsNeeded

// String Function telling what was in the treasure chest from the kill
var loot = function(item1, item2, item3){
	spoilsOfWar = "The treasure chest contains the " + item1 + ", a " + item2 +
		", and the " + item3 + ". Hooray!";
	return spoilsOfWar;
}//loot

// Array Function to thank group members
var thankGroup = function(numMembers, memberNames){
	for (var memberNumber = numMembers - 1; memberNumber > 0; memberNumber--) {
		console.log("I'd like to thank " + memberNames[memberNumber] +
			" for helping with this epic battle!");
	}
	doneThanking = "You guys did great!";
	return doneThanking;
}// thankGroup

//Calling Functions
targetSpotted(true);

groupSet(6, true);
console.log (readyToPull);

dpsNeeded(hitPoints);
console.log(mobDefeated);

loot(loot1, loot2, loot3);
console.log(spoilsOfWar);

thankGroup(groupSize, groupMembers);
console.log(doneThanking);

console.log("On to even more epic battles!");



