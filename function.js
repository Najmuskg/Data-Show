// file2.js
// file2.js
const importedVariable = require('./file1.js');
console.log(importedVariable); // Output: Hello, World!


import { sakib } from './familiyMemberData.js';

document.querySelectorAll(".filter-title").forEach(function (element) {
  element.addEventListener("click", function () {
    this.dataset.clicked = true;
    var clickedElement = this;

    document.querySelectorAll(".filter-title").forEach(function (item) {
      if (item !== clickedElement) {
        item.nextElementSibling.classList.remove("filter-active");
      }
    });

    this.nextElementSibling.classList.toggle("filter-active");
  });
});

document.querySelectorAll(".cloak").forEach(function (element) {
  element.addEventListener("click", function () {
    this.parentElement.classList.remove("filter-active");
  });
});

// import the variables and function from module.js





const person = document.querySelectorAll(".person");

person.forEach((element) => {
    element.addEventListener("click", function () {
    const selectedValue = this.getAttribute("data-value");
    personDataShow(selectedValue);
  });
});

function personDataShow(selectedValue) {
  const dataShow = document.getElementById("dataShow");
  const selectedPerson = personsData.find(
    (person) => person.id === selectedValue
  );

  if (selectedPerson) {

    const infoText = `Name: ${selectedPerson.name}.<br>Age: ${selectedPerson.age}.<br>Occupation: ${selectedPerson.occupation}`;
    dataShow.innerHTML = infoText;
  } else {
    dataShow.textContent = "No Data Found";
  }
}
