

window.onload = function() { 
	console.log('Simple Counter made with enthusiasm looking for programming cool stuff :)');
}
	document.getElementById('startBtn').style.opacity = 0.95;
	const minutes = document.getElementById('min');
	const seconds = document.getElementById('sec');

	var isPaused = true;

	var min = 0, sec = 0;

	var t;
	
	function count() {
		sec += 1;
		if(sec===60){
			min += 1;
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

	if(isPaused) {
		resetBtn.disabled = false;
		resetBtn.style.opacity = .85;

		startBtn.style.opacity = 0.95;
	} else {
		resetBtn.disabled = true;
		resetBtn.style.opacity = 0.5;

		startBtn.style.opacity = 0.85;
	}
	
}