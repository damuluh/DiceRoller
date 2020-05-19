document
  //  .querySelector("list")
  .querySelector("input[type=button]")
  .addEventListener("click", function () {
    rollTheDice();
  });
//  const list = document.querySelector("list")
var rollTheDice = function () {
  var i,
    faceValue,
    output = "",
    diceCount = document.querySelector("input[type=number]").value || 1 ;
  for (i = 0; i < diceCount; i++) {
    faceValue = Math.floor(Math.random() * 6);
    output += "<li>"+ "&#x268" + faceValue + "; "+ "</li>" ;
  }
  document.getElementById("dice").innerHTML = output ;
  
};
