// get the h1 tag by selector
const myHeading = document.querySelector(".head1");

// console.log(myHeading.innerHTML);

// set all the possible options for your careers

const careers = [
  "doctor",
  "lawyer",
  "engineer",
  "youtuber",
  "footballer",
  "web developer",
  "orthopaedic",
  "actor",
  "teacher",
  "scientist",
  "nurse",
  "graphic designer",
  "mechanic",
  "pilot",
  "chef",
  "photographer",
  "data analyst",
  "biologist",
  "musician",
  "architect",
  "content writer",
  "psychologist",
];

const vowels = ["a", "e", "i", "o", "u"];

function pickCareer() {
  // get an item from the list
  chosenCareer = careers[Math.floor(Math.random() * careers.length)];

  // clean it to capitalize it
  return chosenCareer.slice(0, 1).toUpperCase() + chosenCareer.slice(1);
}
// initiate starting index for the word
var letterIndex = 0;

// choose a random career
var chosenCareer = pickCareer();

function produceText() {
  // using tenary operator to show a or an for vowel
  myHeading.innerHTML = `Iam ${
    vowels.includes(chosenCareer.charAt(0).toLowerCase()) ? "an " : "a "
  } ${chosenCareer.slice(0, letterIndex)}`;

  // instanciating the first slice
  letterIndex++;

  // +10 just to stall abit
  if (letterIndex === chosenCareer.length + 5) {
    chosenCareer = pickCareer();
    letterIndex = 0;
  }

  //   recursion forever
  setTimeout(produceText, 150);
}

produceText();
