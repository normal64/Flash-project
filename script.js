let gotAddQuestionButton = document.getElementById("addQuestion");
gotAddQuestionButton.addEventListener("click", revealQuestionForm);

function revealQuestionForm() {
  let gotSectionQuestionForm = document.querySelector("#questionForm");
   gotSectionQuestionForm.style.display = "flex";

}
let gotQuestionCreationTextArea = document.getElementById("questionCreation");
let gotAnswerCreationTextArea = document.getElementById("answerCreation");
let gotSaveButtonOnAddQuestion = document.getElementById("saveButton");

//close button on add question form
let gotCloseFormButton = document.getElementById("closeButton");
gotCloseFormButton.addEventListener('click', closeTheWindow);
function closeTheWindow(event) {
  event.target.parentNode.style.display = "none";
}
gotSaveButtonOnAddQuestion.addEventListener("click", saveToActualQuestions);

function saveToActualQuestions() {
// console.log(gotQuestionCreationTextArea.value);
// console.log(gotAnswerCreationTextArea.value);
let gotDivActualQuestion = document.getElementById("actualQuestionSet");

let creatingDivQuestionItself = document.createElement("div");
creatingDivQuestionItself.classList.add("questionItself");

//adding h4 text and class
let creatingTextOfCard = document.createElement("h4");
creatingTextOfCard.innerHTML = gotQuestionCreationTextArea.value;
creatingTextOfCard.classList.add("questionItself>h4");
//adding p with show hide
let creatingShowAnswerP = document.createElement("p");
creatingShowAnswerP.innerHTML = "Show/Hide";
creatingShowAnswerP.classList.add("questionItself>p");
//adding p with answer text
let creatingAnswerInP = document.createElement("p");
creatingAnswerInP.innerHTML = gotAnswerCreationTextArea.value;
creatingAnswerInP.classList.add("hidden");
//creating div for buttons
let creatingDivOnlyForButtons = document.createElement("div");
creatingDivOnlyForButtons.classList.add("functionalButtonsActualQuestion");
//creating buttons edit/delete
  let creatingButton = document.createElement("button");
  creatingButton.id = "button0";
  creatingButton.innerHTML = "edit";
  creatingButton.classList.add("editButton");
  
  let creatingButton1 = document.createElement("button");
  creatingButton1.id = "button1";
  creatingButton1.innerHTML = "delete";
  creatingButton1.classList.add("deleteButton");
//inserting all in card before putting in div
creatingDivQuestionItself.insertAdjacentElement("afterbegin", creatingTextOfCard);
creatingDivQuestionItself.insertAdjacentElement("beforeend", creatingShowAnswerP);
creatingDivQuestionItself.insertAdjacentElement("beforeend", creatingShowAnswerP);
creatingDivQuestionItself.insertAdjacentElement("beforeend", creatingAnswerInP);
creatingDivOnlyForButtons.insertAdjacentElement("beforeend", creatingButton);
creatingDivOnlyForButtons.insertAdjacentElement("beforeend", creatingButton1);
creatingDivQuestionItself.insertAdjacentElement("beforeend", creatingDivOnlyForButtons);
//inserting card div into div section
gotDivActualQuestion.insertAdjacentElement("beforeend", creatingDivQuestionItself);
//clearing textareas
gotQuestionCreationTextArea.value = "";
gotAnswerCreationTextArea.value = "";
}

//.hide show button reveals and hides next p sibling + deleting function

document.addEventListener("click", revealTheAnswer);
function revealTheAnswer(event) {
  if(event.target.className == "questionItself>p") {

    if(event.target.nextElementSibling.style.display == "none") {
      event.target.nextElementSibling.style.display = "block";
    }
    else  {
      event.target.nextElementSibling.style.display = "none";
    }
  }
  if (event.target.className == "deleteButton") {
    event.target.parentNode.parentNode.remove();
  }
  if (event.target.className == "editButton") {
    let editedCardText = window.prompt("Please enter ur cool toDo", "Edited by mistake");
    event.target.closest(".questionItself").firstChild.innerHTML = editedCardText;
     let editedCardAnswer = window.prompt("Please enter ur cool Answer", "Edited by mistake");
     event.target.closest(".questionItself").firstChild.nextElementSibling.nextElementSibling.innerHTML = editedCardAnswer;
  }
}
