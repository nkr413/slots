function random_emoji() {
	let emoji_base = ['&#127808;', '&#127853;', '&#128142;', '&#128125;'];
	let one = document.getElementById("arcade-one");
	let two = document.getElementById("arcade-two");
	let the = document.getElementById("arcade-the");
	let slots = [one, two, the];

	for (i = 0; i < slots.length; i++) {
		slots[i].innerHTML = emoji_base[Math.floor(Math.random() * emoji_base.length)];
	}

	if (one.innerHTML == '💎' && two.innerHTML == '💎' && the.innerHTML == '💎') {
		for (i = 0; i < slots.length; i++) slots[i].style = 'background: mediumspringgreen;';
	} else {
		for (i = 0; i < slots.length; i++) slots[i].style = 'background: white;';
	}
}

document.getElementById('again-btn').addEventListener('click', () => random_emoji());

