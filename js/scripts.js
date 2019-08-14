var cards = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
var suits = ["Club","Diamond","Spade","Heart"];
var clubs = [];
var diamonds = [];
var spades = [];
var hearts = [];
var deck = [];

suits.forEach(function(suit){
  cards.forEach(function(card) {
    deck.push(card + suit);
  });
});

cards.forEach(function(card){
  clubs.push(card+"Club");
  diamonds.push(card+"Diamond");
  spades.push(card+"Spade");
  hearts.push(card+"Heart");
});

console.log(clubs);
console.log(diamonds);
console.log(hearts);
console.log(spades);
console.log(deck);



$(document).ready(function(){

  deck.forEach(function(card){

    $("ul#fullDeck").append("<li><img src='img/" + card + ".svg'></li>");

  });

  clubs.forEach(function(card){

    $("ul#clubs").append("<li><img src='img/" + card + ".svg'></li>");

  });
  diamonds.forEach(function(card){

    $("ul#diamonds").append("<li><img src='img/" + card + ".svg'></li>");

  });
  spades.forEach(function(card){

    $("ul#spades").append("<li><img src='img/" + card + ".svg'></li>");

  });
  hearts.forEach(function(card){

    $("ul#hearts").append("<li><img src='img/" + card + ".svg'></li>");

  });



});
