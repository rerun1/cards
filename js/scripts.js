var cards = ["Ace", "2", "3", "4", "5","6","7","8","9","10","Jack","Queen","King"];
var deck = [];


var clubs = cards.map(function(card){
  return card + " of clubs";
});
var diamonds = cards.map(function(card){
  return card + " of diamonds";
});
var spades = cards.map(function(card){
  return card + " of spades";
});
var hearts = cards.map(function(card){
  return card + " of hearts";
});

var deck = clubs.concat(diamonds,spades,hearts);

console.log(deck);
