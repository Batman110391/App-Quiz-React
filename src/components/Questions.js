import React, { useState, useEffect } from "react";
import "./Questions.css";
import request from "../requests";
import shuffle from "shuffle-array";
import Steps from "./Steps";
import { cutQuestion, restart } from "./helps";
let tokenAccess = "";
let step = [1, 2, 3, 4, 5];

function Questions() {
  const [quest, setQuest] = useState("");
  const [title, setTitle] = useState("");
  const [answ, setAnsw] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function getToken() {
      await fetch(request.getToken)
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          tokenAccess = resp.token;
          setSteps(step);
          getQuestion();
        });
    }
    getToken();
  }, []);

  async function getQuestion() {
    await fetch(request.easy + "&token=" + tokenAccess)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        let answers = [];
        answers.push(
          "(C)" + decodeHTMLEntities(resp.results[0].correct_answer),
          "(I)" + decodeHTMLEntities(resp.results[0].incorrect_answers[0]),
          "(I)" + decodeHTMLEntities(resp.results[0].incorrect_answers[1]),
          "(I)" + decodeHTMLEntities(resp.results[0].incorrect_answers[2])
        );

        shuffle(answers);

        console.log(answers);

        setAnsw(answers);
        setTitle(resp.results[0].category);
        setQuest(decodeHTMLEntities(resp.results[0].question));
      });
  }

  function decodeHTMLEntities(text) {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  const handleClick = (ele, reply) => {
    if (reply == "(C)") {
      step.shift();
      if (step.length > 0) {
        setSteps(step);
        getQuestion();
      } else {
        alert("Hai vinto!");
      }
    } else if (ele.textContent != "") {
      alert("sbagliato");
    }
  };

  return (
    <div className="questions">
      <Steps count={steps} />
      <h1> {title} </h1>
      <div className="question">{quest}</div>
      <div className="container-answers">
        {answ.map((answer) => (
          <div
            className="answer"
            onClick={(e) => handleClick(e.target, answer.substring(0, 3))}
          >
            {answer.substring(3, answer.length)}
          </div>
        ))}
      </div>
      <div className="helps">
        <div className="help">
          <div className="pop-up">
            <div
              className="change"
              onClick={() => {
                getQuestion();
                let close = document.querySelector(".closeHelpChange");
                close.style.display = "block";
              }}
            >
              <p className="change__question">Change question</p>
            </div>
            <div className="cut" onClick={() => cutQuestion(answ)}>
              <p className="cut__question">Remove two response</p>
            </div>
            <div className="closeHelpCut"></div>
            <div className="closeHelpChange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
