function reverser() {
  var ele = document.querySelector("form");
  ele.addEventListener("submit", function(event) {
    var text = document.getElementById("userInput").value;
    var rev = text.split("").reverse().join("");
    document.getElementById("myParagraph").innerHTML = rev;
    event.preventDefault();
  })
}
reverser();
