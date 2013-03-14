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

targetSpotted(true);

