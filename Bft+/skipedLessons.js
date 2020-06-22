function missedLeasons() {
	let allMissed = 0;
	let allMissedNP;
	let i = 0;
	while (document.getElementsByClassName("marks_table_daymarks")[i] !== undefined) {
		let missed = document.getElementsByClassName("marks_table_daymarks")[i].innerText.trim().split("");
		for (let x = 0; x < missed.length; x++) {
			if (missed[x] === "n") {
				allMissed += 1;
			}
		}
		i++;
	}
	console.log("allmissed", allMissed);
	allMissedNP = document.getElementsByClassName("pointer marks_td_escapeN_NP").length;
	console.log("allMissedNP", allMissedNP);

	//Create missedLessonsDiv
	var missedLessonsDiv = document.createElement("div");
	missedLessonsDiv.id = "missedLessonsDiv";
	missedLessonsDiv.style.width = "relative";
	missedLessonsDiv.style.marginTop = "15px";
	missedLessonsDiv.style.padding = "5px";
	missedLessonsDiv.style.backgroundColor = "#cce7c8";
	document.getElementById("marks_table").appendChild(missedLessonsDiv);

	//Create h3
	let htwo3 = document.createElement("h3");
	let h3Text1 = document.createTextNode("Praleistos pamokos");
	htwo3.appendChild(h3Text1);
	htwo3.style.marginTop = "0px";
	htwo3.style.marginLeft = "0px";
	document.getElementById("missedLessonsDiv").appendChild(htwo3);

	//textdiv1
	var textContainer1 = document.createElement("div");
	textContainer1.id = "textContainer1";
	textContainer1.style.width = "relative";
	textContainer1.style.backgroundColor = "#cce7c8";
	document.getElementById("missedLessonsDiv").appendChild(textContainer1);

	//Create "Praleistų pamokų skaičius šį semestrą: "
	var nsBold = document.createElement("p");
	nsBold.innerHTML = "Praleistų pamokų skaičius šį semestrą: ";
	nsBold.id = "nsBold";
	nsBold.style.display = "inline-block";
	nsBold.style.backgroundColor = "#cce7c8";
	nsBold.style.marginTop = "10px";
	nsBold.style.fontWeight = "bold";
	document.getElementById("textContainer1").appendChild(nsBold);

	//Print missedAll
	var MissedNum = document.createElement("p");
	MissedNum.id = "MissedNum";
	MissedNum.innerHTML = allMissed;
	MissedNum.style.display = "inline-block";
	MissedNum.style.backgroundColor = "#cce7c8";
	MissedNum.style.marginLeft = "5px";
	MissedNum.style.color = "rgb(255, 128, 0)";
	document.getElementById("textContainer1").appendChild(MissedNum);

	//textdiv2
	var textContainer2 = document.createElement("div");
	textContainer2.id = "textContainer2";
	textContainer2.style.width = "relative";
	textContainer2.style.marginTop = "10px";
	textContainer2.style.backgroundColor = "#cce7c8";
	document.getElementById("missedLessonsDiv").appendChild(textContainer2);

	//Create "Nepateisintų pamokų skaičius šį semestrą: "
	var nepateisintosBold = document.createElement("p");
	nepateisintosBold.innerHTML = "Nepateisintų pamokų skaičius šį semestrą: ";
	nepateisintosBold.id = "nepateisintosBold";
	nepateisintosBold.style.display = "inline-block";
	nepateisintosBold.style.backgroundColor = "#cce7c8";
	nepateisintosBold.style.marginTop = "0px";
	nepateisintosBold.style.fontWeight = "bold";
	document.getElementById("textContainer2").appendChild(nepateisintosBold);

	//Print missedAllNP
	var MissedNPNum = document.createElement("p");
	MissedNPNum.id = "MissedNPNum";
	MissedNPNum.innerHTML = allMissedNP;
	MissedNPNum.style.display = "inline-block";
	MissedNPNum.style.backgroundColor = "#cce7c8";
	MissedNPNum.style.marginLeft = "5px";
	MissedNPNum.style.color = "rgb(255, 0, 0)";
	document.getElementById("textContainer2").appendChild(MissedNPNum);
}

function missedLeasonsPerMonth() {
	let i = 2;
	let monthMissed = 0;
	let monthMissedNP = 0;

	while (true) {
		if (document.getElementsByClassName("marks_tr_daysrow")[0].cells[i].style.display !== "none") {
			break;
		}
		i++;
	}
	let a = i.valueOf();
	for (var x = 0; x < document.getElementsByClassName("marks_tr_discrow").length; x++) {
		a = i.valueOf();
		while (true) {
			let elementsDays = document.getElementsByClassName("marks_tr_daysrow")[0].cells[a];
			if (elementsDays === undefined || (elementsDays.style.display === "none" && document.getElementsByClassName("marks_tr_daysrow")[0].cells[a].innerText.match(/(\d+)/)[0] === "01")) {
				break;
			}
			let missed = document.getElementsByClassName("marks_tr_discrow")[x].cells[a].innerText.trim().split("");
			for (let y = 0; y < missed.length; y++) {
				if (missed[y] === "n") {
					monthMissed += 1;
				}
			}
			a++;
		}
	}
	console.log("monthMissed", monthMissed);

	i = 0;

	for (let i = 0; i < document.getElementsByClassName("pointer marks_td_escapeN_NP").length; i++) {
		let Ns = document.getElementsByClassName("pointer marks_td_escapeN_NP")[i];
		var closestElement = Ns.closest(".marks_td_daymarks_PirVD");
		var closestElement1 = Ns.closest(".marks_td_daymarksVD");
		if (closestElement !== null) {
			if (closestElement.style.display !== "none") {
				monthMissedNP += 1;
			}
		}
		if (closestElement1 !== null) {
			if (closestElement1.style.display !== "none") {
				monthMissedNP += 1;
			}
		}
	}
	console.log("monthMissedNP", monthMissedNP);

	if (document.getElementById("missedMonth")) {
		document.getElementById("missedMonth").remove();
		document.getElementById("missedNPMonth").remove();
	}

	if (!document.getElementById("praleistuMenBold")) {
		//Create "Praleistų pamokų skaičius šį mėnesį: "
		var praleistuMenBold = document.createElement("p");
		praleistuMenBold.innerHTML = "Praleistų pamokų skaičius šį mėnesį: ";
		praleistuMenBold.id = "praleistuMenBold";
		praleistuMenBold.style.display = "inline-block";
		praleistuMenBold.style.backgroundColor = "#cce7c8";
		praleistuMenBold.style.marginTop = "0px";
		praleistuMenBold.style.fontWeight = "bold";
		praleistuMenBold.style.marginLeft = "30px";
		document.getElementById("textContainer1").appendChild(praleistuMenBold);
	}

	//Print missedMonth
	var missedMonth = document.createElement("p");
	missedMonth.id = "missedMonth";
	missedMonth.innerHTML = monthMissed;
	missedMonth.style.display = "inline-block";
	missedMonth.style.backgroundColor = "#cce7c8";
	missedMonth.style.color = "rgb(255, 128, 0)";
	missedMonth.style.marginLeft = "5px";
	document.getElementById("textContainer1").appendChild(missedMonth);

	if (!document.getElementById("nepateisintosMenBold")) {
		//Create "Nepateisintų pamokų skaičius šį mėnesį: "
		var nepateisintosMenBold = document.createElement("p");
		nepateisintosMenBold.innerHTML = "Nepateisintų pamokų skaičius šį mėnesį: ";
		nepateisintosMenBold.id = "nepateisintosMenBold";
		nepateisintosMenBold.style.display = "inline-block";
		nepateisintosMenBold.style.backgroundColor = "#cce7c8";
		nepateisintosMenBold.style.marginTop = "0px";
		nepateisintosMenBold.style.fontWeight = "bold";
		nepateisintosMenBold.style.marginLeft = "30px";
		document.getElementById("textContainer2").appendChild(nepateisintosMenBold);
	}

	//Print missedMonth
	var missedNPMonth = document.createElement("p");
	missedNPMonth.id = "missedNPMonth";
	missedNPMonth.innerHTML = monthMissedNP;
	missedNPMonth.style.display = "inline-block";
	missedNPMonth.style.backgroundColor = "#cce7c8";
	missedNPMonth.style.marginLeft = "5px";
	missedNPMonth.style.color = "rgb(255, 0, 0)";
	document.getElementById("textContainer2").appendChild(missedNPMonth);
}

function removerAll() {
	document.getElementById("praleistuMenBold").remove();
	document.getElementById("nepateisintosMenBold").remove();
	document.getElementById("missedMonth").remove();
	document.getElementById("missedNPMonth").remove();
}
