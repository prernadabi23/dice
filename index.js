// // for player 1
//
//
// var rNum1 = Math.floor(Math.random() * 6) + 1;
//
// var rDice = "dice" + rNum1 + ".png";
//
// var rImgSour = "images/" + rDice;
//
// var img1 = document.querySelectorAll("img")[0];
// img1.setAttribute("src", rImgSour);
//
// // for player 2
//
//
// var rNum2 = Math.floor(Math.random() * 6) + 1;
//
// var rImgSour2 = "images/dice" + rNum2 + ".png"
//
// document.querySelectorAll("img")[1].setAttribute("src", rImgSour2);
//
// // conditions for winning
//
// if(rNum1 > rNum2){
//   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
// }
//
// else if(rNum1 < rNum2){
//   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
// }
//
// else{
//   document.querySelector("h1").innerHTML = "🚩Both Wins!";
// }

function dice(){
  // for player 1

  var rNum1 = Math.floor(Math.random() * 6) + 1;

  var rDice = "dice" + rNum1 + ".png";

  var rImgSour = "images/" + rDice;

  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", rImgSour);

  // for player 2


  var rNum2 = Math.floor(Math.random() * 6) + 1;

  var rImgSour2 = "images/dice" + rNum2 + ".png"

  document.querySelectorAll("img")[1].setAttribute("src", rImgSour2);

  // conditions for winning

  if(rNum1 > rNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }

  else if(rNum1 < rNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }

  else{
    document.querySelector("h1").innerHTML = "🚩Both Wins!";
  }

}
