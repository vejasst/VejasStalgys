function getAveragesArray(discNum) {
	let marksArray = [];
	let averagesArray = [];
	let i = 2;
	let markSum = 0;

	while (true) {
		if (document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i].style.display !== "none") {
			break;
		}
		if (!isNaN(parseInt(document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i].innerText))) {
			marksArray.push(parseInt(document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i].innerText));
		}
		i++;
	}

	for (let y = 0; y < marksArray.length; y++) {
		markSum += marksArray[y];
	}

	let marksCount = marksArray.length;

	while (true) {
		let elements = document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i];
		if (elements === undefined || (elements.style.display === "none" && elements.innerText !== "")) {
			break;
		}

		if (!isNaN(parseInt(elements.innerText))) {
			markSum += parseInt(elements.innerText);
			marksCount++;
			averagesArray.push(Math.round((markSum / marksCount) * 100) / 100);
		}
		if (isNaN(parseInt(elements.innerText))) {
			averagesArray.push(Math.round((markSum / marksCount) * 100) / 100);
		}
		i++;
	}

	let dataObj = getMarksObj(discNum);
	dataObj.avrg = averagesArray;

	if (document.getElementById("chartDiv")) {
		document.getElementById("chartDiv").remove();
		let chartDiv = document.createElement("div");
		chartDiv.id = "chartDiv";
		chartDiv.style.width = "relative";
		chartDiv.style.height = "400px";
		document.querySelector("#chartDivParent").appendChild(chartDiv);

		let chartCanvas = document.createElement("canvas");
		chartCanvas.id = "chartCanvas";
		chartCanvas.style.width = "100%";
		chartCanvas.style.height = "400px";
		document.getElementById("chartDiv").appendChild(chartCanvas);

		console.log("istryne ir sukure");
	}

	chartRender(dataObj);
}

function createChartsCont() {
	//Create parent (chart's canvas and div container)
	let chartDivParent = document.createElement("div");
	chartDivParent.id = "chartDivParent";
	chartDivParent.style.width = "relative";
	chartDivParent.style.height = "470px";
	chartDivParent.style.backgroundColor = "#cce7c8";
	chartDivParent.style.padding = "5px";
	chartDivParent.style.marginTop = "15px";
	document.getElementById("marks_table").appendChild(chartDivParent);

	//Create h2
	let htwo2 = document.createElement("h3");
	htwo2.id = "htwo2";
	let h2Text = document.createTextNode("Mėnesio apžvalga");
	htwo2.style.marginTop = "0px";
	htwo2.appendChild(h2Text);
	document.getElementById("chartDivParent").appendChild(htwo2);

	//Create chart's canvas and div container
	let chartDiv = document.createElement("div");
	chartDiv.id = "chartDiv";
	chartDiv.style.width = "relative";
	chartDiv.style.height = "400px";
	document.querySelector("#chartDivParent").appendChild(chartDiv);

	let chartCanvas = document.createElement("canvas");
	chartCanvas.id = "chartCanvas";
	chartCanvas.style.width = "100%";
	chartCanvas.style.height = "400px";
	document.getElementById("chartDiv").appendChild(chartCanvas);
	createSelect();
	console.log("createCharCont done!");
}

function getMarksObj(discNum) {
	let marksObject = {
		marks: [],
		date: [],
		avrg: [],
	};
	let i = 2;

	while (true) {
		if (document.getElementsByClassName("marks_tr_daysrow")[0].cells[i].style.display !== "none") {
			break;
		}
		i++;
	}

	while (true) {
		let elementsDays = document.getElementsByClassName("marks_tr_daysrow")[0].cells[i];
		let elementMark = document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i];
		if (elementsDays === undefined || (elementsDays.style.display === "none" && document.getElementsByClassName("marks_tr_daysrow")[0].cells[i].innerText.match(/(\d+)/)[0] === "01")) {
			break;
		}
		marksObject.date.push(elementsDays.innerText.replace(/(\r\n|\n|\r)/gm, ""));
		marksObject.marks.push(parseInt(elementMark.innerText));
		i++;
	}
	return marksObject;
}

function getMarksObjVisi(discNum) {
	let marksObjectAll = {
		marks: [],
		date: [],
		avrg: [],
	};
	let i = 2;
	while (true) {
		let elementsDays = document.getElementsByClassName("marks_tr_daysrow")[0].cells[i];
		let elementMark = document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i];
		if (elementsDays === undefined) {
			break;
		}
		marksObjectAll.date.push(elementsDays.innerText.replace(/(\r\n|\n|\r)/gm, ""));
		marksObjectAll.marks.push(parseInt(elementMark.innerText));
		i++;
	}
	return marksObjectAll;
}

function clickedVisi(discNum) {
	let marksArray = [];
	let averagesArrayAll = [];
	let i = 2;
	let markSumAll = 0;
	/*
	while (true) {
		if (document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i] === undefined) {
			break;
		}
		if (!isNaN(parseInt(document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i].innerText))) {
			marksArray.push(parseInt(document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i].innerText));
		}
		i++;
	}*/
	console.log("visi marksarray:", marksArray);

	for (let y = 0; y < marksArray.length; y++) {
		markSumAll += marksArray[y];
	}

	let marksCount = marksArray.length;
	i = 2;
	let elements;
	while (true) {
		elements = document.getElementsByClassName("marks_tr_discrow")[discNum].cells[i];

		if (elements === undefined) {
			break;
		}
		if (!isNaN(parseInt(elements.innerText))) {
			markSumAll += parseInt(elements.innerText);
			marksCount++;
			averagesArrayAll.push(Math.round((markSumAll / marksCount) * 100) / 100);
		}
		if (isNaN(parseInt(elements.innerText))) {
			averagesArrayAll.push(Math.round((markSumAll / marksCount) * 100) / 100);
		}
		i++;
	}

	let dataObj = getMarksObjVisi(discNum);
	dataObj.avrg = averagesArrayAll;

	if (document.getElementById("chartDiv")) {
		document.getElementById("chartDiv").remove();
		let chartDiv = document.createElement("div");
		chartDiv.id = "chartDiv";
		chartDiv.style.width = "relative";
		chartDiv.style.height = "400px";
		document.querySelector("#chartDivParent").appendChild(chartDiv);

		let chartCanvas = document.createElement("canvas");
		chartCanvas.id = "chartCanvas";
		chartCanvas.style.width = "100%";
		chartCanvas.style.height = "400px";
		document.getElementById("chartDiv").appendChild(chartCanvas);

		console.log("istryne ir sukure visi");
	}

	console.log(dataObj);
	chartRender(dataObj);
}

function createSelect() {
	//Create array of options to be added
	var array = [];
	let y = 0;
	while (true) {
		if (document.getElementsByClassName("marks_tr_discrow")[y] === undefined) {
			break;
		}
		array.push(document.getElementsByClassName("marks_tr_discrow")[y].cells[0].innerText);
		y++;
	}

	//Create and append select list
	var selectList = document.createElement("select");
	selectList.id = "chartSelect";
	selectList.style.marginTop = "10px";
	document.getElementById("chartDivParent").appendChild(selectList);

	for (var z = 0; z < array.length; z++) {
		var option = document.createElement("option");
		option.value = array[z];
		option.text = array[z];
		selectList.appendChild(option);
	}

	listeners();

	console.log("select created!");
}

function listeners() {
	let elements = Array.from(document.querySelector("#marks_table > div:nth-child(1)").children);

	document.getElementById("chartSelect").addEventListener("change", () => {
		var discName = document.getElementById("chartSelect").value;
		let discNum = discipline(discName);
		chartData(discNum);
	});

	elements.map((elem) =>
		elem.addEventListener("click", () => {
			var discName = document.getElementById("chartSelect").value;
			let discNum = discipline(discName);
			console.log(elements.map((elem) => elem));
			setTimeout(chartData(discNum), 100);
			setTimeout(missedLeasonsPerMonth(discNum), 100);
		})
	);

	document.querySelector("#monthMenu00").addEventListener("click", () => {
		var discName = document.getElementById("chartSelect").value;
		let discNum = discipline(discName);
		chartData(discNum);
		removerAll();
	});

	let semestrai = Array.from(document.querySelector("#marks_semcombo > div:nth-child(2)").children);
	semestrai.map((elem) =>
		elem.addEventListener("click", () => {
			callCheck();
			console.log(elem);
		})
	);
}

/*function onChangeChart() {
	var discName = document.getElementById("chartSelect").value;
	let discNum = discipline(discName);
	console.log("select changed");
	setTimeout(chartData(discNum), 1000);
}*/

function chartData(discNum) {
	if (!document.querySelector("#chartDivParent")) {
		createChartsCont();
	}
	if (document.querySelector("#monthMenu00").className === "monthLinkSelected") {
		console.log("visi");
		clickedVisi(discNum);
	}
	if (document.querySelector("#monthMenu00").className === "monthLink") {
		getAveragesArray(discNum);
		console.log("!visi");
	}
}
