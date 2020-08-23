

const btn = document.getElementById("button");
const content = document.getElementById("result");
const main = document.getElementsByTagName("main")[0];
let listening = false;

const greetings = ['Hello Sir, I am fine  Sir', 'There are burning news, i am fine, thanks for checking on me'];

const updates = ['There are no updates', 'You friend just texted you hi', 'i don\'t know what to tell you, there is just a lot'];

const modifications = ['i don\'t understand what you said becouse you have not programed me to say that yet.', 'you are currentl y working on adding the specs of opening the browser through voice comand'];

//declaring speech recognition 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//speech recognition object initialization
const recognition = new SpeechRecognition();



//method to listen to the speech
recognition.onstart = (e) => {
  main.classList.add("speaking");
};

recognition.onspeechend = () => {
  main.classList.remove("speaking");
}

//method to desplay the speech
recognition.onresult = (e) => {
  const current = e.resultIndex;
  const transcript = e.results[current][0].transcript;
  content.textContent = transcript;

  readOutRoud(transcript);
};



//event listener that trigers the listening method or that gets the michrophone ready
btn.addEventListener('click', () => {
  recognition.start();
});
//function to speak out the set messages or to initialize the audio
function readOutRoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'I don\'t understand what you said';

  function sayThis(textMessage) {
    const finalText = textMessage[Math.floor(Math.random() * updates.length)];
    speech.text = finalText;
  }

  if(message.includes('hello gedion')) {
    sayThis(greetings);
  }else if(message.includes('updates')) {
    sayThis(updates);
  }else if(message.includes('my goal')) {
    sayThis(modifications);
  }else if(message.includes('gedion open YouTube')) {
    const finalText = 'wait as i redirect you to the page';
    speech.text = finalText;
    window.open('https://www.youtube.com/?gl=KE&tab=w11', '_blank');
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

// window.addEventListener('DOMContentLoaded', helper, false);

// function helper() {
//   const speech = new SpeechSynthesisUtterance();
//   speech.text = 'Welcome to this page, my name is Gideon and i will be helping you around';
//   window.speechSynthesis.speak(speech);
// }
