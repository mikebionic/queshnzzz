const YELLOW = "#EBCB8B";
const BLUE = "#5E81AC";
const GREEN = "#A3BE8C";
const colors = [YELLOW, BLUE, GREEN];
const noCatch = document.querySelector("#no-catch");
const yesCatch = document.querySelector("#yes-catch");
const scoreBtn = document.querySelector("#score-button");
const speedBtn = document.querySelector("#speed-button");
const clickScoreSpan = document.querySelector("#score");
const speedSpan = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const start = document.querySelector(".start");
const game = document.querySelector(".spd-scr-btn");
const gameStart = document.querySelector(".game");

const notext = document.querySelector("#notext");
const yestext = document.querySelector("#yestext");

let lastSpeed; // Last speed button
let btnSpeed; // Speed noCatch button
let speed = "max"; // Is transition
let score = 0; // Amount click on noCatch button
let minScore = 0; //Amount click on noCatch button on minSpeed
let midScore = 0; //Amount click on noCatch button on midSpeed
let maxScore = 0; //Amount click on noCatch button on maxSpeed
let i = 0; // Just index for change btn position noCatch button
let index = 0; // Just index for change colors in noCatch button and scoreBtn

//launch animation Game start
startGame();
//Animation Game start
function startGame() {
	setTimeout(() => {
		gameStart.style.opacity = 1;
		gameStart.style.transition = "2s";
	}, 500);
}
// Get random int number
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
//Button speed change
function btnSpeeds() {
	if (speed === "min") {
		btnSpeed = "0.8s";
	} else if (speed === "mid") {
		btnSpeed = "0.6s";
	} else if (speed === "max") {
		btnSpeed = "0.3s";
	} else if (speed === "" || speed === null) {
		speed = prompt(
			"You must have entered something, the default will be: " + lastSpeed,
			[lastSpeed]
		);
		speed = lastSpeed;
	} else {
		speed = prompt(
			"You entered the wrong thing at all, select the speed min, mid, max",
			[lastSpeed]
		);
		speed = lastSpeed;
	}
}
//Enters speed and score values
//function spanValue() {
//	speedSpan.innerHTML = speed;
//	clickScoreSpan.innerHTML = score;
//}

//Animation button "Score"
function scoreBtnAnimation() {
	scoreBtn.style.backgroundColor = colors[index];
	scoreBtn.style.transition = "0.5s";
	index++;
	if (index === 3) {
		index = 0;
	}
	scoreBtn.style.padding = "8px 32px";
	scoreBtn.style.transition = "0.5s";
	setTimeout(() => {
		scoreBtn.style.padding = "8px 16px";
		scoreBtn.style.transition = "0.5s";
	}, 500);
}
//Random button "noCatch" movement
function randomMove() {
	let x = getRandomInt(50, 90);
	if (speed === "min" || speed === "mid" || speed === "max") {
		if (i === 0) {
			i++;
			noCatch.style.marginLeft = x + "%";
			noCatch.style.transition = btnSpeed;
		} else if (i === 1) {
			i++;
			noCatch.style.marginLeft = -x + "%";
			noCatch.style.transition = btnSpeed;
		} else {
			i = 0;
			noCatch.style.marginLeft = null;
			noCatch.style.transition = btnSpeed;
		}

		if (speed === "max") {
			let y = getRandomInt(10, 15);
			if (i === 0) {
				noCatch.style.marginTop = y + "%";
				noCatch.style.transition = btnSpeed;
			} else if (i === 1) {
				noCatch.style.marginTop = -y + "%";
				noCatch.style.transition = btnSpeed;
			} else {
				noCatch.style.marginTop = null;
				noCatch.style.transition = btnSpeed;
			}
		}
	}
}
//Animation after pressing the "Start" button
function startAnimation() {
	start.style.opacity = "0";
	start.style.transition = "0.5s";
	setTimeout(() => {
		game.style.display = "flex";
		start.style.display = "none";
		setTimeout(() => {
			game.style.transition = "0.5s";
			game.style.opacity = "1";
		}, 500);
	}, 500);
}
//Function call after pressing the "Start" button

startAnimation();
//spanValue();
//startBtn.onclick = function () {
//};

yesCatch.onclick = function () {
	yestext.style.display = "block";
	setTimeout(() => {
		yestext.style.opacity = 1;
		yestext.style.transition = "2s";
	}, 200);
};

//Function call after hover the "noCatch" button and change bg-color, btnSpeed;
noCatch.onmouseover = function () {
	btnSpeeds();
	randomMove();
	randomColor = colors[Math.floor(Math.random() * colors.length)];
	noCatch.style.backgroundColor = randomColor;
	noCatch.style.color = "#2e3440";
	noCatch.style.transition = btnSpeed;
};
// After pressing the "noCatch" button
noCatch.onclick = function () {
	randomMove();
	if (speed === "min") {
		minScore += 1;
		score += 1;
	} else if (speed === "mid") {
		midScore += 1;
		score += 2;
	} else if (speed === "max") {
		maxScore += 1;
		score += 3;
	}
	spanValue();
	scoreBtnAnimation();
};
//After pressing the "speed" button check the speed and its change
//speedBtn.onclick = function () {
//	lastSpeed = speed;
//	if (speed === "min") {
//		speed = prompt("Raise the difficulty? to mid or max ", ["mid"]);
//	} else if (speed === "mid") {
//		speed = prompt("Raise the difficulty? to max ", ["max"]);
//	} else if (speed === "max") {
//		speed = prompt("Tired? Change speed to min or mid", ["min"]);
//	}
//	if (speed === "min" || speed === "mid" || speed === "max") {
//		spanValue();
//	} else {
//		btnSpeeds();
//	}
//};
////Message after pressing the "score" button
//scoreBtn.onclick = function () {
//	alert(
//		"You score: " +
//			score +
//			"\nTimes passed speed min: " +
//			minScore +
//			"\nTimes passed speed mid: " +
//			midScore +
//			"\nTimes passed speed max: " +
//			maxScore
//	);
//	spanValue();
//};

var q_list = [
	{
		question: "Главный задаваемый вопрос японцев, если не о чем говорить",
		a: "Nani?",
		b: "what a nice weather?",
		a_text: "Nope, they also talk about weather",
		b_text: "Yes, Weather is the powerful tool to set up talk",
	},
	{
		question: "which color do you prefer",
		a: "grey",
		b: "pink",
		a_text: "Как мышь ахахах.",
		b_text: "Как закладка в книжке?)",
	},
	{
		question: "Can we celebrate New Year twice a year?",
		a: "yes",
		b: "no",
		a_text:
			"Sure, we can celebrate it whenever we want.. depends on location and 'New Year of (some kawaii book's release)...'",
		b_text:
			"why no :c | every day's the birthday, every holiday is the New Year!",
	},
	{
		question: "What is able to warm up in the coldest lonely day?",
		a: "Nuclear weapon",
		b: "Thoughts of you",
		a_text: "Nah, I don't think u able to carry it.. Physically or legally.",
		b_text:
			"This is what I carry in my mind, what is secured with hundred of cryptographic algorithms, and the only SALT* is You.",
	},
	{
		question: "Какого цвета солнце?",
		a: "Белый",
		b: "Мухамедий",
		a_text: "Ты что, не в первый раз проходишь этот тест?",
		b_text: "Я есть солнце в серые дни",
	},
	{
		question:
			"Какая группа больше всего подойдет для вечерней поездки загород в свежую дождливую погоду?",
		a: "BTS",
		b: "Coldplay",
		a_text: "Too active and hardcore...",
		b_text: "That's the 100% right answer",
	},
	// {
	// 	question: "Do you love me more than yaoi?",
	// 	a: "yes",
	// 	b: "no",
	// 	a_text: "",
	// 	b_text: "",
	// },
];

var current_q = 0;
$(document).ready(function (e) {
	console.log("ready");
	$(".questionz").show();
	replace_q(q_list[current_q]);
});

$(".a_btn").click(function (e) {
	$(".a_btn").css({ opacity: 0 });
	$(".b_btn").css({ opacity: 0 });
	show_answer_then_next_q(q_list[current_q], "a");
});
$(".b_btn").click(function (e) {
	$(".a_btn").css({ opacity: 0 });
	$(".b_btn").css({ opacity: 0 });
	show_answer_then_next_q(q_list[current_q], "b");
});

const show_answer_then_next_q = (q_dat, variant) => {
	$(".q_text").css({ opacity: 0 });
	setTimeout(() => {
		$(".q_text").text(variant == "a" ? q_dat.a_text : q_dat.b_text);
		$(".q_text").css({ opacity: 1 });
		setTimeout(() => {
			current_q++;
			if (current_q > 5) {
				$(".questionz").hide("slow");
				$(".game").show("slow");
			}
			replace_q(q_list[current_q]);
		}, 3000);
	}, 300);
};

const replace_q = (q_dat) => {
	$(".questionz").css({ opacity: 0 });
	$(".a_btn").css({ opacity: 0 });
	$(".b_btn").css({ opacity: 0 });
	setTimeout(() => {
		$(".q_text").text(q_dat.question);
		$(".a_btn").text(q_dat.a);
		$(".b_btn").text(q_dat.b);
		$(".questionz").css({ opacity: 1 });
		$(".q_text").css({ opacity: 1 });
		$(".a_btn").css({ opacity: 1 });
		$(".b_btn").css({ opacity: 1 });
	}, 300);
};
