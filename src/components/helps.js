function cutQuestion(answ) {
  console.log(answ);
  let answers = document.querySelectorAll(".answer");
  var count = 2;
  while (count > 0) {
    var num = Math.floor(Math.random() * answ.length);
    if (answ[num].substring(0, 3) != "(C)") {
      console.log(answ[num].substring(0, 3));
      answers[num].textContent = "";
      count--;
    }
  }

  let close = document.querySelector(".closeHelpCut");
  close.style.display = "block";
}

function restart() {
  console.log("confermo");
}

export { cutQuestion, restart };
