// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

	const dropdown = document.getElementById('horn-select');
	const hornImage = document.querySelector('#expose img');
	const hornAudio = document.querySelector('audio.hidden');
	dropdown.addEventListener('change', function() {
		if (dropdown.value == 'air-horn') {
			hornImage.setAttribute('src', 'assets/images/air-horn.svg');
			hornImage.setAttribute('alt', 'air horn');
			hornAudio.setAttribute('src', 'assets/audio/air-horn.mp3')
		} 
		else if (dropdown.value == 'car-horn') {
			hornImage.setAttribute('src', 'assets/images/car-horn.svg');
			hornImage.setAttribute('alt', 'car horn');
			hornAudio.setAttribute('src', 'assets/audio/car-horn.mp3')
		} 
		else if (dropdown.value == 'party-horn') {
			hornImage.setAttribute('src', 'assets/images/party-horn.svg');
			hornImage.setAttribute('alt', 'party horn');
			hornAudio.setAttribute('src', 'assets/audio/party-horn.mp3')
		}
	});

	const volumeIcon = document.querySelector('#volume-controls img');
	const volume = document.getElementById('volume');
	volume.addEventListener('change', function() {
		if (volume.value == 0) {
			volumeIcon.setAttribute('src', 'assets/icons/volume-level-0.svg');
		} 
		else if (volume.value < 33) {
			volumeIcon.setAttribute('src', 'assets/icons/volume-level-1.svg');
		} 
		else if (volume.value < 67) {
			volumeIcon.setAttribute('src', 'assets/icons/volume-level-2.svg');
		} 
		else {
			volumeIcon.setAttribute('src', 'assets/icons/volume-level-3.svg');
		}
		hornAudio.volume = volume.value / 100;
	});

	const playButton = document.querySelector('button');
	const confetti = new JSConfetti();
	playButton.addEventListener('click', function() {
		hornAudio.play();
		if (dropdown.value == 'party-horn' && volume.value > 0) {
			confetti.addConfetti();
		}
	});
}