/*
  -create array for the players
  -create a storage variable for the card deck
  -create arrays containing value and suite
  -create an object for each card of the deck and push into the card deck
  -shuffle the card deck
  -create a card counter variable
  -go through each of the players and deal them two cards
  -create a variable for holding the player object with the highest score
  -go through each player and compare their hands and set the highest score
  player
  -console log the victory message
*/

console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{ name: 'Jimmy', hand: [] }, { name: 'Ricardo', hand: [] },
  { name: 'Fernando', hand: [] }, { name: 'Francis', hand: [] }];

var cardDeck = [];

var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suite = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

for (var i = 0; i < 52; i++) {
  for (var j = 0; j < suite.length; j++) {
    for (var k = 0; k < rank.length; k++) {
      cardDeck.push({ rank: rank[k], suite: suite[j] });
      i++;
    }
  }
}

var shuffledDeck = _.shuffle(cardDeck);

var cardIndex = 0;
for (var m = 0; m < players.length; m++) {
  for (var l = 0; l < 2; l++) {
    players[m].hand.push(shuffledDeck[cardIndex]);
    cardIndex++;
  }
}

var currentHighest = players[0];
for (var o = 1; o < players.length; o++) {
  if (handValue(players[o].hand) > handValue(players[o - 1].hand)) {
    currentHighest = players[o];
  }
}

console.log('The winner is: ' + currentHighest.name + ' with the value of ' +
handValue(currentHighest.hand));

function handValue(array) {
  return valueReturn(array[0].rank) + valueReturn(array[1].rank);
}

function valueReturn(data) {
  switch (data) {
    case 'Ace':
      return 11;
    case 'Jack':
    case 'Queen':
    case 'King':
      return 10;
    default:
      return data;
  }
}
