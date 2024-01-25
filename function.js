// $('#person-select').change(function(){
//   //this is just getting the value that is selected
//   var title = $(this).val();
//   $('.modal-title').html(title);
//   $('.modal').modal('show');
// });

const personsData = [
  {
    id: "sajjad",
    name: "Sajedul Karim Bhuiyan",
    age: 42,
    occupation: "Backend Developer",
  },
  {
    id: "akib",
    name: "Shuaib Hasan Akib",
    age: 28,
    occupation: "Software Engineer",
  },
  {
    id: "sakib",
    name: "Najmus Sakib",
    age: 24,
    occupation: "Developer",
  },
  {
    id: "afzal",
    name: "FM Afjalul Bari",
    age: 42,
    occupation: "Student",
  },
  {
    id: "jakir",
    name: "Jakir Hosen",
    age: 24,
    occupation: "Student",
  },
  {
    id: "rafat",
    name: "Farhanur Rahman Rafat",
    age: 42,
    occupation: "Student",
  },
];

const person = document.querySelectorAll(".person");

person.forEach((element) => {
  element.addEventListener("click", function () {
    const selectedValue = this.getAttribute("value");
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
