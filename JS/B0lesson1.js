const btnPg1 = document.getElementById("btnPg1");
const page1 = document.getElementById("page1");
const btnPg2 = document.getElementById("btnPg2");
const page2 = document.getElementById("page2");
const grammar = document.getElementById("grammar");
const btnGrammar = document.getElementById("btnGrammar");
const vocabulary = document.getElementById("vocabulary");
const btnVocabulary = document.getElementById("btnVocabulary");
const home1 = document.getElementById("home1");
const btnHome1 = document.getElementById("btnHome1");
const home2 = document.getElementById("home2");
const btnHome2 = document.getElementById("btnHome2");

const goToPage1 = () => {
  page2.style.display = "none";
  page1.style.display = "block";
  grammar.style.display = "none";
  vocabulary.style.display = "none";
  home1.style.display = "none";
  home2.style.display = "none";
};

const goToPage2 = () => {
  page1.style.display = "none";
  page2.style.display = "block";
  grammar.style.display = "none";
  vocabulary.style.display = "none";
  home1.style.display = "none";
  home2.style.display = "none";
};

const goToGrammar = () => {
  page1.style.display = "none";
  page2.style.display = "none";
  grammar.style.display = "block";
  vocabulary.style.display = "none";
  home1.style.display = "none";
  home2.style.display = "none";
};

const goToVocabulary = () => {
  page1.style.display = "none";
  page2.style.display = "none";
  grammar.style.display = "none";
  vocabulary.style.display = "block";
  home1.style.display = "none";
  home2.style.display = "none";
};

const goToHome1 = () => {
  page1.style.display = "none";
  page2.style.display = "none";
  grammar.style.display = "none";
  vocabulary.style.display = "none";
  home1.style.display = "block";
  home2.style.display = "none";
};

const goToHome2 = () => {
  page1.style.display = "none";
  page2.style.display = "none";
  grammar.style.display = "none";
  vocabulary.style.display = "none";
  home1.style.display = "none";
  home2.style.display = "block";
};

btnPg2.addEventListener("click", goToPage2);
btnPg1.addEventListener("click", goToPage1);
btnGrammar.addEventListener("click", goToGrammar);
btnVocabulary.addEventListener("click", goToVocabulary);
btnHome1.addEventListener("click", goToHome1);
btnHome2.addEventListener("click", goToHome2);

const button12 = document.getElementById("track1.2");
const button13 = document.getElementById("track1.3");
const button14 = document.getElementById("track1.4");
const button15 = document.getElementById("track1.5");
const button16 = document.getElementById("track1.6");
const button17 = document.getElementById("track1.7");
const button18 = document.getElementById("track1.8");
const button19 = document.getElementById("track1.9");
const button110 = document.getElementById("track1.10");
const button111 = document.getElementById("track1.11");
const button112 = document.getElementById("track1.12");
const button113 = document.getElementById("track1.13");
const button114 = document.getElementById("track1.14");

const audio12 = document.getElementById("cd1track1.2");
const audio13 = document.getElementById("cd1track1.3");
const audio14 = document.getElementById("cd1track1.4");
const audio15 = document.getElementById("cd1track1.5");
const audio16 = document.getElementById("cd1track1.6");
const audio17 = document.getElementById("cd1track1.7");
const audio18 = document.getElementById("cd1track1.8");
const audio19 = document.getElementById("cd1track1.9");
const audio110 = document.getElementById("cd1track1.10");
const audio111 = document.getElementById("cd1track1.11");
const audio112 = document.getElementById("cd1track1.12");
const audio113 = document.getElementById("cd1track1.13");
const audio114 = document.getElementById("cd1track1.14");

//ÁUDIO 1.2

const playAudio12 = (event) => {
  if (event.target.id === "track1.2") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio12.play();
  } else {
    event.target.innerText = "1.2";
    event.target.id = "track1.2";
    audio12.pause();
  }
};

button12.addEventListener("click", playAudio12);

//ÁUDIO 1.3

const playAudio13 = (event) => {
  if (event.target.id === "track1.3") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio13.play();
  } else {
    event.target.innerText = "1.3";
    event.target.id = "track1.3";
    audio13.pause();
  }
};

button13.addEventListener("click", playAudio13);

//ÁUDIO 1.4

const playAudio14 = (event) => {
  if (event.target.id === "track1.4") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio14.play();
  } else {
    event.target.innerText = "1.4";
    event.target.id = "track1.4";
    audio14.pause();
  }
};

button14.addEventListener("click", playAudio14);

//ÁUDIO 1.5

const playAudio15 = (event) => {
  if (event.target.id === "track1.5") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio15.play();
  } else {
    event.target.innerText = "1.5";
    event.target.id = "track1.5";
    audio15.pause();
  }
};

button15.addEventListener("click", playAudio15);

//ÁUDIO 1.6

const playAudio16 = (event) => {
  if (event.target.id === "track1.6") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio16.play();
  } else {
    event.target.innerText = "1.6";
    event.target.id = "track1.6";
    audio16.pause();
  }
};

button16.addEventListener("click", playAudio16);

//ÁUDIO 1.7

const playAudio17 = (event) => {
  if (event.target.id === "track1.7") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio17.play();
  } else {
    event.target.innerText = "1.7";
    event.target.id = "track1.7";
    audio17.pause();
  }
};

button17.addEventListener("click", playAudio17);

//ÁUDIO 1.8

const playAudio18 = (event) => {
  if (event.target.id === "track1.8") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio18.play();
  } else {
    event.target.innerText = "1.8";
    event.target.id = "track1.8";
    audio18.pause();
  }
};

button18.addEventListener("click", playAudio18);

//ÁUDIO 1.9

const playAudio19 = (event) => {
  if (event.target.id === "track1.9") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio19.play();
  } else {
    event.target.innerText = "1.9";
    event.target.id = "track1.9";
    audio19.pause();
  }
};

button19.addEventListener("click", playAudio19);

//ÁUDIO 1.10

const playAudio110 = (event) => {
  if (event.target.id === "track1.10") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio110.play();
  } else {
    event.target.innerText = "1.10";
    event.target.id = "track1.10";
    audio110.pause();
  }
};

button110.addEventListener("click", playAudio110);

//ÁUDIO 1.11

const playAudio111 = (event) => {
  if (event.target.id === "track1.11") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio111.play();
  } else {
    event.target.innerText = "1.11";
    event.target.id = "track1.11";
    audio111.pause();
  }
};

button111.addEventListener("click", playAudio111);

//ÁUDIO 1.12

const playAudio112 = (event) => {
  if (event.target.id === "track1.12") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio112.play();
  } else {
    event.target.innerText = "1.12";
    event.target.id = "track1.12";
    audio112.pause();
  }
};

button112.addEventListener("click", playAudio112);

//ÁUDIO 1.13

const playAudio113 = (event) => {
  if (event.target.id === "track1.13") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio113.play();
  } else {
    event.target.innerText = "1.13";
    event.target.id = "track1.13";
    audio113.pause();
  }
};

button113.addEventListener("click", playAudio113);

//ÁUDIO 1.14

const playAudio114 = (event) => {
  if (event.target.id === "track1.14") {
    event.target.innerText = "||";
    event.target.id = "teste";
    audio114.play();
  } else {
    event.target.innerText = "1.14";
    event.target.id = "track1.14";
    audio114.pause();
  }
};

button114.addEventListener("click", playAudio114);
