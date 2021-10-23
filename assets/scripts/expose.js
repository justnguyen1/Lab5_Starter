// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	// TODO
	const dropdown = document.getElementById('horn-select');
	const hornImage = document.querySelector('header+img');
	const soundImage = document.querySelector('input+img');
	const playButton = document.querySelector('button');
	const audio = document.querySelector('audio');
	const volume = document.getElementById('volume');
	const confetti = new JSConfetti();

	audio.volume = volume.value / 100;

	dropdown.addEventListener('change', function() {
		if (dropdown.value == 'air-horn') {
			hornImage.setAttribute('src', 'assets/images/air-horn.svg');
			hornImage.setAttribute('alt', 'air horn');
			audio.setAttribute('src', 'assets/audio/air-horn.mp3')
		} 
		else if (dropdown.value == 'car-horn') {
			hornImage.setAttribute('src', 'assets/images/car-horn.svg');
			hornImage.setAttribute('alt', 'car horn');
			audio.setAttribute('src', 'assets/audio/car-horn.mp3')
		} 
		else {
			hornImage.setAttribute('src', 'assets/images/party-horn.svg');
			hornImage.setAttribute('alt', 'party horn');
			audio.setAttribute('src', 'assets/audio/party-horn.mp3')
		}
	});

	volume.addEventListener('change', function() {
		if (volume.value == 0) {
			soundImage.setAttribute('src', 'assets/icons/volume-level-0.svg');
		} 
		else if (volume.value < 33) {
			soundImage.setAttribute('src', 'assets/icons/volume-level-1.svg');
		} 
		else if (volume.value < 67) {
			soundImage.setAttribute('src', 'assets/icons/volume-level-2.svg');
		} 
		else {
			soundImage.setAttribute('src', 'assets/icons/volume-level-3.svg');
		}
		audio.volume = volume.value / 100;
	});

	playButton.addEventListener('click', function() {
		audio.play();
		if (dropdown.value == 'party-horn' && volume.value > 0) {
			confetti.addConfetti();
		}
	});
}