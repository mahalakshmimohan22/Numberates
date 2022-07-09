const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
const lives = document.getElementById("attemptCount");
var randomNumber = Math.round(Math.random() * 100);
var live = 10;
var text;
submitButton.onclick = () => {
  console.log(randomNumber);
  var inputValue = document.getElementById("textBox").value;
  console.log(inputValue);
  live--;
  if (inputValue == randomNumber) {
    location.href = "./win.html";
  } else if (live == 0) {
    location.href = "./lose.html";
  } else if (inputValue > randomNumber) {
    text = `Your guess is too high.You have ${live} chances remaining`;
  } else if (inputValue < randomNumber) {
    text = `Your guess is too low.You have ${live} chances remaining`;
  }
  console.log(text);
  console.log(live);
  message.style.display = "inherit";
  message.innerHTML = text;
  lives.innerHTML = live;
}