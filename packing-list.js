const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
//Using for loop.
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
//Uding for..of loop.
for (let packinglist of packingList) {
  console.log(packinglist);
}