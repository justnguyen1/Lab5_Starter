// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  let speech = window.speechSynthesis;
  let voices = [];
  setTimeout(function() {
    voices = speech.getVoices();
    const dropdown = document.getElementById('voice-select');
    loadVoices(dropdown, voices);
    const pressToTalkButton = document.querySelector('button');
    const textArea = document.querySelector('textarea');
    const faceImage = document.querySelector('img');
  
    pressToTalkButton.addEventListener('click', function() {
      let textToSpeak = new SpeechSynthesisUtterance(textArea.value);
      let selectedOption = dropdown.selectedOptions[0].getAttribute('data-name');
      for (const voice of voices) {
        if (voice.name === selectedOption) {
          textToSpeak.voice = voice;
        }
      }
      speech.speak(textToSpeak);
      faceImage.setAttribute('src', 'assets/images/smiling-open.png');
      faceImage.setAttribute('alt', 'Open mouth');
      textToSpeak.onend = function() {
        faceImage.setAttribute('src', 'assets/images/smiling.png');
        faceImage.setAttribute('alt', 'Smiling face');
      }
    });
  }, 50);
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

