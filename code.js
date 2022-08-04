/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var ranks = [2,3,5,2,6];
var suits = ["b","c","d","a","c"];

var bestHand = function(ranks, suits) {
  if (suits.every(suitElements => suitElements === suits[0])){
   return "Flush"
  }

  var filteredList = ranks.filter((rankElements, index) => index !== ranks.indexOf(rankElements));
  if (filteredList.length >= 3 || findTriple(filteredList)){
    return "Three of a Kind";
  }
  else if (filteredList.length <= 2 && filteredList.length != 0){
    return "Pair";
  }
  else if (filteredList.length === 0){
    return "High Card";
  }
}

function findTriple(filteredList){
  var filteredListPlus = filteredList.filter((rankElements, index) => index !== filteredList.indexOf(rankElements));
  if (filteredListPlus.length === 1){
    return true;
  }
}

var results = bestHand(ranks,suits);
console.log(results);