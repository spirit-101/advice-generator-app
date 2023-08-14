"use strict";

const adviceContent = document.querySelector(".heading__primary");
const adviceBtn = document.querySelector(".advice__btn");

const adviceNumber = document.querySelector(".advice__number");

let numAdvice = 1;

const getAdvice = async function () {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceData = await response.json();

  const { advice } = adviceData.slip;

  adviceContent.innerHTML = advice;
  numAdvice++;

  adviceNumber.textContent = `Advice #${numAdvice}`;
};

adviceBtn.addEventListener("click", getAdvice);
