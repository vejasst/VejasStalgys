function chartRender(data) {
	var ctx = document.getElementById("chartCanvas").getContext("2d");
	var myChart = new Chart(ctx, {
		type: "line",
		data: {
			labels: data.date,
			datasets: [
				{
					label: "Pažymiai",
					fill: false,
					data: data.marks,
					borderWidth: 1,
					pointBackgroundColor: "rgb(87, 166, 197)",
					pointHoverRadius: 4,
					pointHitRadius: 5,
					backgroundColor: "rgb(87, 166, 197)",
					borderColor: "rgb(87, 166, 197)",
				},
				{
					label: "Vidurkis",
					fill: false,
					data: data.avrg,
					borderWidth: 1,
					borderColor: "rgb(0, 0, 0)",
					lineTension: 0.3,
					pointRadius: 0,
					pointHoverRadius: 3,
					pointHitRadius: 5,
					pointBackgroundColor: "rgb(0, 0, 0)",
					steppedLine: true,
					borderWidth: 3,
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							steps: 10,
							stepValue: 1,
							max: 10,
						},
					},
				],
			},
		},
	});
}
