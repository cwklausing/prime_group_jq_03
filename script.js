/*create an array of peers--initially empty*/
var peerArray = [];
/*create a count for the total number of peers in a class */
var totalPeers = 0;

/*Peer constructor*/
function Peer (fullName) {
/*creates first and last names */
	this.fullName = fullName;

/*Every time a new peer is created, totalPeers goes up by one*/
	totalPeers++;
};

/*function to push a person to the peerArray array*/
function pushToArray (fullName) {
	peerArray.push(new Peer(fullName));
}

/*team shuffling function*/
function shuffle(array) {
	var tempArray = array.slice();
	var shuffledTeam = tempArray.length;
	var temporaryValue;
	var randomIndex;

	 // While there remain elements to shuffle...
	 while (0 !== shuffledTeam) {

	   // Pick a remaining element...
	   randomIndex = Math.floor(Math.random() * shuffledTeam);
	   shuffledTeam -= 1;

	   // And swap it with the current element.
	   temporaryValue = tempArray[shuffledTeam];
	   tempArray[shuffledTeam] = tempArray[randomIndex];
	   tempArray[randomIndex] = temporaryValue;
	}
	return tempArray;
}


console.log(peerArray);
/*pushes all classmates to peerArray array*/
pushToArray('Amanda Bausch');
pushToArray('Ashley Steele');
pushToArray('John Crimmings');
pushToArray('Charlotte Kroening');
pushToArray('Connor Klausing');
pushToArray('Adia Alderson');
pushToArray('Amanda Bausch');
pushToArray('Andrew Dourgarian');
pushToArray('Andrew Harasymiw');
pushToArray('Ben Margis');
pushToArray('Brandi Brown');
pushToArray('Clayton Hottinger');
pushToArray('Derek Roche');
pushToArray('Gwen Paul');
pushToArray('Keisha Josephs');
pushToArray('Kyra Crowston');
pushToArray('Moni Francesca');
pushToArray('Nicholas Gill');
pushToArray('Wallace Wylie');
pushToArray('James Kirwin');
pushToArray('Manuel Zumarraga');
pushToArray('Sam Richard');

var shuffledClassList = shuffle(peerArray);


console.log(shuffledClassList.slice(0,7));
console.log(shuffledClassList.slice(0,7));

