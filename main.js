// Program Title

// event listener
document.getElementById("submit").addEventListener("click", judge);

// variables
let answer = document.getElementById("placeholder");
let question = document.getElementById("question");

// function

function judge() {
  rand = Math.floor(Math.random() * 20 + 1);
  console.log(rand);
  if (question.value.toLowerCase() == "does a magic 8 ball actually work?") {
    answer.innerHTML = "YOU DARE DOUBT THE MAGIC 8 BALL? 😡";
  } else if (question == "") {
    answer.innerHTML = "Please ask a question...";
  } else if (question.value.toLowerCase() == "should i do my homework?") {
    answer.innerHTML = "If you want a good grade 👍";
  } else if (question.value.toLowerCase() == "are mangoes the best?") {
    answer.innerHTML = "Without a doubt. 🥭";
  } else {
    if (rand == 1) {
      answer.innerHTML = "It is certain.";
    } else if (rand == 2) {
      answer.innerHTML = "It is decidedly so.";
    } else if (rand == 3) {
      answer.innerHTML = "Without a doubt.";
    } else if (rand == 4) {
      answer.innerHTML = "Yes definitely.";
    } else if (rand == 5) {
      answer.innerHTML = "You may rely on it.";
    } else if (rand == 6) {
      answer.innerHTML = "As I see it, yes.";
    } else if (rand == 7) {
      answer.innerHTML = "Most likely.";
    } else if (rand == 8) {
      answer.innerHTML = "Outlook good.";
    } else if (rand == 9) {
      answer.innerHTML = "Yes.";
    } else if (rand == 10) {
      answer.innerHTML = "Signs point to yes.";
    } else if (rand == 11) {
      answer.innerHTML = "Reply hazy, try again.";
    } else if (rand == 12) {
      answer.innerHTML = "Ask again later.";
    } else if (rand == 13) {
      answer.innerHTML = "Better not tell you now.";
    } else if (rand == 14) {
      answer.innerHTML = "Cannot predict now.";
    } else if (rand == 15) {
      answer.innerHTML = "Concentrate and ask again.";
    } else if (rand == 16) {
      answer.innerHTML = "Don't count on it.";
    } else if (rand == 17) {
      answer.innerHTML = "My reply is no.";
    } else if (rand == 18) {
      answer.innerHTML = "My sources say no.";
    } else if (rand == 19) {
      answer.innerHTML = "Outlook not so good.";
    } else if (rand == 20) {
      answer.innerHTML = "Very doubtful.";
    }
  }
}
