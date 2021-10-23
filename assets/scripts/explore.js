// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speech = window.speechSynthesis;
  const voices = speech.getVoices();
  const dropdown = document.getElementById('voice-select');
  loadVoices(dropdown, voices);
  const pressToTalkButton = document.querySelector('button');
  const textArea = document.querySelector('textarea');
  
  pressToTalkButton.addEventListener('click', function() {
    let textToSpeak = new SpeechSynthesisUtterance(textArea.value);
    let selectedOption = dropdown.selectedOptions[0].getAttribute('data-name');
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        textToSpeak.voice = voice;
      }
    }
    speech.speak(textToSpeak);

  });
}

function loadVoices(dropdown, voices) {
  for (const voice of voices) {
    let option = document.createElement('option');
    option.textContent = voice.name + ' (' + voice.lang + ')';

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    dropdown.appendChild(option);
  }
}

