

window.onload = function() { 
	console.log('Simple Counter made with enthusiasm looking for programming cool stuff :)');
	activateButtons();
}

	const minutes = document.getElementById('min');
	const seconds = document.getElementById('sec');

	var isPaused = true;

	var min = 0, sec = 0;

	var t;
	

	function count() {
		sec += 1;
		if(sec===60){
			min += 1;
			showMinutes();
			sec = 0;
		}
		displayCount();
	};

	function startCounter() {
		if(isPaused && t === undefined){
			t = setInterval(count, 1000);
			isPaused = false;
			activateButtons();
		} else {
			pauseCounter();
		}
	};

	function resetCounter() {
		min = 0;
		sec = 0;
		displayCount();
		activateButtons();
		showMinutes();
	};

	function pauseCounter() {
		if(!isPaused){
			clearInterval(t);
			t = undefined;
			isPaused = true;	
			activateButtons();
		}
	};
/* Displaying the counter into seconds and minutes */
	function displayCount() {
		minutes.innerHTML = padVal(min);
		seconds.innerHTML = padVal(sec);
	}
/* Parses the values to be shown correctly */
	function padVal(val) {
		var valString = val + "";
		if(valString.length < 2) {
			return "0" + valString;
		} else {
			return valString;
		}
	}
/* Activate or Deactivate buttons */
function activateButtons() {
	let startBtn = document.getElementById('startBtn');
	let resetBtn = document.getElementById('resetBtn');

	if(isPaused){
		if(min === 0 && sec === 0){
			resetBtn.disabled = true;
			resetBtn.style.opacity = 0.5;	
		} else {
			resetBtn.disabled = false;
			resetBtn.style.opacity = .9;

			startBtn.style.opacity = 1;
			startBtn.classList.remove('active');
		}
	} else {
		resetBtn.disabled = true;
		resetBtn.style.opacity = 0.5;

		startBtn.style.opacity = 1;
		startBtn.classList.add('active');
	}	
}
/* Show or hide the minutes */
function showMinutes() {
	if(min !== 0) {
		minutes.classList.add('on');
		document.getElementById('controls').classList.add('on');	
	} else {
		minutes.classList.remove('on');
		document.getElementById('controls').classList.remove('on');
	}
	
}