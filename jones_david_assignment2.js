//alert("JavaScript works!");

// David Jones
// SDI 1303
// Project 2

// Variables

var target = 1
	campSpot = "right",
	warded = true,
	mobPulled = true,
	mezAdds = false,
	mobDead = true
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
	}
};

groupSet(4, true);

console.log (readyToPull);

