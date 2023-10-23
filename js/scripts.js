const form = document.getElementById("suggest-form");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result");
const suggestion = document.getElementById("language-suggestion");

submitButton.addEventListener("click", () => {
  const answer1 = document.getElementById("question1").value;
  const answer2 = document.getElementById("question2").value;
  const answer3 = document.getElementById("question3").value;
  const answer4 = document.getElementById("question4").value;
  const answer5 = document.getElementById("question5").value;


  let suggestedLanguage = "";

  if (answer1 === "Yes") {
    suggestedLanguage = "Python";
  } else if (answer2 === "Treat") {
    suggestedLanguage = "JavaScript";
  } else if (answer3 === "Witch") {
    suggestedLanguage = "Ruby";
  } else if (answer4 === "NoTooScary") {
    suggestedLanguage = "C#";
  } else if (answer5 === "Yes") {
    suggestedLanguage = "Swift";
  } else {
    suggestedLanguage = "Java";
  }

  suggestion.textContent = suggestedLanguage;
  resultContainer.classList.remove("hidden");

  form.reset();
});