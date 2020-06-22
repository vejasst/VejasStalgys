let discMarks = [];
let allMarks = [];

function vidPlanMenu() {
	var myParent = document.getElementById("marks_table");

	//Create array of options to be added
	var array = [];
	let y = 0;
	while (true) {
		if (document.getElementsByClassName("marks_tr_discrow")[y] === undefined) {
			array.unshift("Pasirinkite discipliną");
			break;
		}
		array.push(document.getElementsByClassName("marks_tr_discrow")[y].cells[0].innerText);
		y++;
	}

	//Create parent div
	var container = document.createElement("div");
	container.id = "containerdiv";
	container.style.width = "relative";
	container.style.marginTop = "15px";
	container.style.padding = "5px";
	container.style.backgroundColor = "#cce7c8";
	myParent.appendChild(container);

	//Create h3
	let htwo1 = document.createElement("h3");
	let h2Text1 = document.createTextNode("Vidurkių planavimas");
	htwo1.appendChild(h2Text1);
	htwo1.style.marginTop = "0px";
	htwo1.style.width = "200px";
	document.getElementById("containerdiv").appendChild(htwo1);

	//Create and append select list
	var selectList = document.createElement("select");
	selectList.id = "mySelect";
	selectList.style.marginTop = "10px";
	document.getElementById("containerdiv").appendChild(selectList);

	//Create and append the options
	for (var z = 0; z < array.length; z++) {
		var option = document.createElement("option");
		option.value = array[z];
		option.text = array[z];
		selectList.appendChild(option);
	}

	//Create "Pažymiai: "
	var marksBold = document.createElement("p");
	marksBold.innerHTML = "Pažymiai: ";
	marksBold.id = "marksBold";
	marksBold.style.display = "inline-block";
	marksBold.style.backgroundColor = "#cce7c8";
	marksBold.style.marginLeft = "20px";
	marksBold.style.fontWeight = "bold";
	document.getElementById("containerdiv").appendChild(marksBold);

	//Print marks
	var marksline = document.createElement("p");
	marksline.id = "marksline";
	marksline.style.display = "inline-block";
	marksline.style.backgroundColor = "#cce7c8";
	marksline.style.marginLeft = "5px";
	document.getElementById("containerdiv").appendChild(marksline);

	//Create form
	var formDiv = document.createElement("div");
	formDiv.id = "newMarks";
	formDiv.style.marginTop = "20px";
	document.getElementById("containerdiv").appendChild(formDiv);

	//Print "Planuojami pažymiai"
	var potencialMarks = document.createElement("p");
	potencialMarks.innerHTML = "Įveskite pažymius:";
	potencialMarks.id = "potencialMarks";
	potencialMarks.style.display = "inline-block";
	potencialMarks.style.fontWeight = "bold";
	potencialMarks.style.backgroundColor = "#cce7c8";
	document.getElementById("newMarks").appendChild(potencialMarks);

	//Create input1
	var input1 = document.createElement("input");
	input1.className = "input";
	input1.type = "number";
	input1.min = "1";
	input1.max = "10";
	input1.style.display = "inline-block";
	input1.style.width = "30px";
	input1.style.marginLeft = "4px";
	document.getElementById("newMarks").appendChild(input1);

	//Create input2
	var input2 = document.createElement("input");
	input2.className = "input";
	input2.type = "number";
	input2.min = "1";
	input2.max = "10";
	input2.style.display = "inline-block";
	input2.style.width = "30px";
	input2.style.marginLeft = "5px";
	document.getElementById("newMarks").appendChild(input2);

	//Create input3
	var input3 = document.createElement("input");
	input3.className = "input";
	input3.type = "number";
	input3.min = "1";
	input3.max = "10";
	input3.style.display = "inline-block";
	input3.style.width = "30px";
	input3.style.marginLeft = "5px";
	document.getElementById("newMarks").appendChild(input3);

	//Create input4
	var input4 = document.createElement("input");
	input4.className = "input";
	input4.type = "number";
	input4.min = "1";
	input4.max = "10";
	input4.style.display = "inline-block";
	input4.style.width = "30px";
	input4.style.marginLeft = "5px";
	document.getElementById("newMarks").appendChild(input4);

	//Create input5
	var input5 = document.createElement("input");
	input5.className = "input";
	input5.type = "number";
	input5.min = "1";
	input5.max = "10";
	input5.style.display = "inline-block";
	input5.style.width = "30px";
	input5.style.marginLeft = "5px";
	document.getElementById("newMarks").appendChild(input5);

	//Create submit button
	var submitButton = document.createElement("BUTTON");
	submitButton.id = "submitButton";
	submitButton.onclick = calcAvrg;
	submitButton.innerText = "Skaičiuoti";
	submitButton.style.display = "inline-block";
	submitButton.style.width = "fixed";
	submitButton.style.marginLeft = "5px";
	document.getElementById("newMarks").appendChild(submitButton);

	//Create "Vidurkis: "
	var marksBold = document.createElement("p");
	marksBold.innerHTML = "Vidurkis: ";
	marksBold.id = "marksBold";
	marksBold.style.display = "inline-block";
	marksBold.style.marginLeft = "20px";
	marksBold.style.fontWeight = "bold";
	marksBold.style.backgroundColor = "#cce7c8";
	document.getElementById("newMarks").appendChild(marksBold);

	//Print average
	var marksAverage = document.createElement("p");
	marksAverage.id = "marksAverage";
	marksAverage.style.display = "inline-block";
	marksAverage.style.marginLeft = "5px";
	marksAverage.style.backgroundColor = "#cce7c8";
	document.getElementById("newMarks").appendChild(marksAverage);

	document.getElementById("mySelect").addEventListener("change", function onChangeAvrg() {
		allMarks = [];
		var discName = document.getElementById("mySelect").value;

		if (document.getElementById("mySelect").value === "Pasirinkite discipliną") {
			marksline.innerHTML = "";
			marksAverage.innerHTML = "";
		} else {
			let discNum = discipline(discName);
			console.log(discNum);
			discMarks = marks(discNum);
			marksline.innerHTML = discMarks;
			marksAverage.innerHTML = document.getElementsByClassName("marks_tr_discrow")[discNum].cells[1].innerText;
		}

		for (let i = 0; i < 5; i++) {
			document.getElementsByClassName("input")[i].value = null;
		}
	});
}

function discipline(disc) {
	let discNum = 0;
	while (true) {
		if (document.getElementsByClassName("marks_tr_discrow")[discNum].cells[0].innerText === disc) {
			return discNum;
			break;
		}
		discNum++;
	}
}

function marks(discNum) {
	let i = 2;
	let discArray = [];
	discMarks = [];

	while (true) {
		if (document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i] === undefined) {
			break;
		}
		let possibleArray = document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i].innerText.trim().split("");

		for (let x = 0; x < possibleArray.length; x++) {
			if (!isNaN(parseInt(possibleArray[x]))) {
				if (possibleArray[x] === "0") {
					discArray.pop();
					discArray.push(parseInt("10"));
				}
				if (parseInt(possibleArray[x]) > 0) {
					discArray.push(parseInt(possibleArray[x]));
				}
			}
		}
		i++;
	}

	for (let y = 0; y < discArray.length; y++) {
		if (!isNaN(parseInt(discArray[y]))) {
			discMarks.push(parseInt(discArray[y]));
		}
	}
	console.log(discMarks);
	return discMarks;
}

function calcAvrg() {
	allMarks = discMarks.slice(0);
	let newAvrg;

	for (let i = 0; i < 5; i++) {
		if (parseInt(document.getElementsByClassName("input")[i].value) > 10 || parseInt(document.getElementsByClassName("input")[i].value) < 1) {
			alert("Įveskite pažymius nuo 1 iki 10.");
			return 1;
		}
		if (!isNaN(parseInt(document.getElementsByClassName("input")[i].value))) {
			allMarks.push(parseInt(document.getElementsByClassName("input")[i].value));
		}
	}
	let marksSum = 0;
	for (let y = 0; y < allMarks.length; y++) {
		marksSum += allMarks[y];
	}
	newAvrg = marksSum / allMarks.length;
	console.log("discMarks:", discMarks);
	console.log("allMarks", allMarks);
	console.log("avrg:", newAvrg);

	if (document.getElementById("mySelect").value === "Pasirinkite discipliną") {
		marksAverage.innerHTML = "";
	} else {
		marksAverage.innerHTML = Math.round(newAvrg * 100) / 100;
	}
}

const Interval = function (fn, interval) {
	this.id = setInterval(fn, interval);

	this.clear = function () {
		clearInterval(this.id);
	};
};

let checkMarks = setInterval(checkForMarks, 100);
function callCheck() {
	console.log("b");
	const callCheckMarks = new Interval(checkForMarks, 100);
}

let oldInnerHTML;

function checkForMarks() {
	console.log("a");

	if (oldInnerHTML !== document.getElementById("marks_table").innerHTML) {
		if (
			document.getElementById("marks_table").innerText !== "Netrukus pateiksime įvertinimų lentelę..." &&
			document.getElementById("marks_table").innerText !== "Pasirinkite mokslo metus, semestrą." &&
			document.getElementById("marks_table").innerText !== "Šiek tiek kantrybės, surenkame duomenis..."
		) {
			if (document.getElementById("containerdiv")) {
				document.getElementById("containerdiv").remove();
			}
			if (document.getElementById("chartDivParent")) {
				document.getElementById("chartDivParent").remove();
			}
			console.log("in");
			clearInterval(checkMarks);
			vidPlanMenu();
			createChartsCont();
			missedLeasons();
		} else {
			if (document.getElementById("containerdiv")) {
				document.getElementById("containerdiv").remove();
			}
			if (document.getElementById("chartDivParent")) {
				document.getElementById("chartDivParent").remove();
			}
		}
	}
	oldInnerHTML = document.getElementById("marks_table").innerHTML;
}
/*

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░░░
░░░░░░░░░▄▀▀▀░░░░░░░▀▄░░░░░░░
░░░░░░░▄▀░░░░░░░░░░░░▀▄░░░░░░
░░░░░░▄▀░░░░░░░░░░▄▀▀▄▀▄░░░░░
░░░░▄▀░░░░░░░░░░▄▀░░██▄▀▄░░░░
░░░▄▀░░▄▀▀▀▄░░░░█░░░▀▀░█▀▄░░░
░░░█░░█▄▄░░░█░░░▀▄░░░░░▐░█░░░
░░▐▌░░█▀▀░░▄▀░░░░░▀▄▄▄▄▀░░█░░
░░▐▌░░█░░░▄▀░░░░░░░░░░░░░░█░░
░░▐▌░░░▀▀▀░░░░░░░░░░░░░░░░▐▌░
░░▐▌░░░░░░░░░░░░░░░▄░░░░░░▐▌░
░░▐▌░░░░░░░░░▄░░░░░█░░░░░░▐▌░
░░░█░░░░░░░░░▀█▄░░▄█░░░░░░▐▌░
░░░▐▌░░░░░░░░░░▀▀▀▀░░░░░░░▐▌░
░░░░█░░░░░░░░░░░░░░░░░░░░░█░░
░░░░▐▌▀▄░░░░░░░░░░░░░░░░░▐▌░░
░░░░░█░░▀░░░░░░░░░░░░░░░░▀░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
