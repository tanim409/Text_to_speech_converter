let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");
let button = document.querySelector("button");
let textarea = document.querySelector("textarea");
let voiceLoaded = false;

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    voiceSelect.add(option);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
