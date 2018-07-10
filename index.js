const glicko2 = require('glicko2');
const setting = {
	tau: 0.5,
	rating: 1500,
	rd: 350,
	vol: 0.06
};
const ranking = new glicko2.Glicko2(setting);
const entry = [
	'Gary Anderson', 'Kyle Anderson', 'Raymond van Barneveld', 'Dimitri Van den Bergh',
	'Dave Chisnall', 'Rob Cross', 'Michael van Gerwen', 'Kim Huybrechts',
	'Zoran Lerchbacher', 'Peter Wright', 'Seigo Asada', 'Haruki Muramatsu',
	'Max Hopp', 'Terry Jenkins', 'Adrian Lewis', 'Mensur Suljovic', 'Simon Whitlock',
	'Steve Beaton', 'Keegan Brown', 'Stephen Bunting', 'Jamie Caven',
	'Jonny Clayton', 'Joe Cullen', 'Jan Dekker', 'Chris Dobey', 'Brendan Dolan', 'Ricky Evans',
	'Andrew Gilding', 'Robbie Green', 'Daryl Gurney', 'John Henderson', 'Ronny Huybrechts',
	'Mervyn King', 'Christian Kist', 'Jelle Klaasen', 'Jamie Lewis', 'Ron Meulenkamp',
	'Joe Murnan', 'Alan Norris', 'Richard North', 'Kevin Painter', 'Gerwyn Price', 'Michael Smith'
];
//const players = entry.map((e) => ({name: e, rating: ranking.makePlayer(setting.rating - setting.rd + (0|Math.random()*setting.rd))}));
const players = entry.map((e) => ({name: e, rating: ranking.makePlayer()}));
players.sort((p1,p2) => p2.rating.getRating() - p1.rating.getRating()).forEach((player) => {
	const rating = player.rating;
	console.log(`${player.name}: ${0|rating.getRating()}(${0|(rating.getRating() - rating.getRd()*2)}-${0|(rating.getRating() + rating.getRd()*2)})`);
});
console.log('------------------------');
for(let i = 1; i <= 10000; i++) {
	const p1 = players[0|Math.random()*players.length];
	const p2 = players.filter((e) => e.rating.id !== p1.rating.id)[0|Math.random()*(players.length-1)];
	const result = 0|Math.random()*2;
	const old_p1 = p1.rating.getRating(), old_p2 = p2.rating.getRating();
	ranking.addResult(p1.rating, p2.rating, result);
	ranking.calculatePlayersRatings();
	console.log(`Match No.${i}: ${p1.name} [${result ? 'won': 'lost'}] v [${result ? 'lost': 'won'}] ${p2.name}`);
	console.log(`    ${p1.name}: ${0|old_p1} → ${0|p1.rating.getRating()}`);
	console.log(`    ${p2.name}: ${0|old_p2} → ${0|p2.rating.getRating()}`);
	const maxRd = players.reduce((p1, p2) => p1.rating.getRd() > p2.rating.getRd() ? p1 : p2).rating.getRd();
	if (maxRd < 30) {
		break;
	}
}
console.log('------------------------');
players.sort((p1,p2) => p2.rating.getRating() - p1.rating.getRating()).forEach((player) => {
	const rating = player.rating;
	const wonCount = rating.outcomes.filter((e) => e === 1).length,
		lostCount = rating.outcomes.filter((e) => e === 0).length;
	console.log(`${player.name}: [${wonCount} won, ${lostCount} lost] ${0|rating.getRating()}(${0|(rating.getRating() - rating.getRd()*2)}-${0|(rating.getRating() + rating.getRd()*2)})`);
});
