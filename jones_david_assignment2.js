//alert("JavaScript works!");

// David Jones
// SDI 1303
// Project 2

// Variables

var trueCondition = true
	groupSize = 6,
	hitPoints = 27000,
	mobName = "Avatar of Fear"
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
		readyToPull = "We are ready to pull!";
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
/*
groupSet(4, true);

console.log (readyToPull);
*/

dpsNeeded(hitPoints);

console.log(mobDefeated);