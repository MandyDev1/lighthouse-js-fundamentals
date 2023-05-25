const games = [
  ['Tetris', 30, 'puzzle'],
  ['Skyrim', 60, 'rpg'],
  ['Super Mario Galaxy', 80, 'action']
]

const findGames = function (games) {
  // first we want to create our empty array that we'll be pushing our games into
  const goodGames = [];
  // then we want to loop through the provided array of games so we can check each one
  for (const game of games) {
    // for each game inside of our array, we have three values (name, price, and genre) so we want to check the last two values and see if they match our criteria (under $90 and either action or rpg genre). These will be game[1] and game[2].
    if (game[1] < 90 && (game[2] === "rpg" || game[2] === "action")) {
      goodGames.push(game[0]);  // game[0] contains the name of our game in this case as it is the first item in our game array
    };
  };
  //after the loop finishes, we simply return our final array containing our "good games"
  return goodGames;
};
console.log(findGames(games));

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      goodStations.push(station[0]);
    };
  };
  return goodStations;
};
console.log(chooseStations(stations));
