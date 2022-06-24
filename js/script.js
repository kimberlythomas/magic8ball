let button = document.getElementById("button");
let inputQuestion = document.getElementById("input");
let question = document.getElementById("question");
let answers = document.getElementById("answers");
let eightBall = document.getElementById("eightBall");

button.addEventListener("click", function () {
  console.log(input);
  //Check if the user entered a question
  if (input.value.length < 1) {
    alert("Please enter a question!");
  } else {
    //Get the possible answers
    let randomAnswer = [
      "img/magic8ball_1.png",
      "img/magic8ball_2.png",
      "img/magic8ball_3.png",
      "img/magic8ball_4.png",
      "img/magic8ball_5.png",
      "img/magic8ball_6.png",
      "img/magic8ball_7.png",
      "img/magic8ball_8.png",
      "img/magic8ball_9.png",
      "img/magic8ball_10.png",
      "img/magic8ball_11.png",
      "img/magic8ball_12.png",
      "img/magic8ball_13.png",
      "img/magic8ball_14.png",
      "img/magic8ball_15.png",
      "img/magic8ball_16.png",
      "img/magic8ball_17.png",
      "img/magic8ball_18.png",
      "img/magic8ball_19.png",
    ];
    //Display a random answer
    let randomNumber = Math.floor(Math.random() * 19);
    eightBall.src = randomAnswer[randomNumber];
  }
  //Replace the input field with the user's question when displaying the answer
  inputQuestion.classList.add("hide");
  button.classList.add("hide");
  question.innerText = input.value;
  question.classList.add("bgcolor");
});
