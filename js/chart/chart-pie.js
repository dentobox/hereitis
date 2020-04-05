var ageDeathsPer_구분 = [];
var ageDeathsPer_확진자 = [];
var ageDeathsPer_사망자 = [];
var ageDeathsPer_치명율 = [];

for (var i = 0; i < ageDeathsPer.length; i++) {
  ageDeathsPer_구분.push(ageDeathsPer[i]['구분']);
  ageDeathsPer_확진자.push(parseFloat(ageDeathsPer[i]['확진자(%)'].replace(',','')));
  ageDeathsPer_사망자.push(parseFloat(ageDeathsPer[i]['사망자(%)'].replace(',','')));
  ageDeathsPer_치명율.push(parseFloat(ageDeathsPer[i]['치명율'].replace(',','')));
}

console.log(ageDeathsPer_구분);
console.log(ageDeathsPer_확진자);
console.log(ageDeathsPer_사망자);
console.log(ageDeathsPer_치명율);


var ctxD = document.getElementById('koreaDeathsPerPieChart').getContext('2d');
var myChart = new Chart(ctxD, {
    type: 'polarArea',
    data: {
        labels: ageDeathsPer_구분,
        datasets: [{
            label: '# of Votes',
            data: ageDeathsPer_확진자,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxD_ = document.getElementById('koreaDeathsPerPieChart_two').getContext('2d');
var myChart = new Chart(ctxD_, {
    type: 'polarArea',
    data: {
        labels: ageDeathsPer_구분,
        datasets: [{
            label: '# of Votes',
            data: ageDeathsPer_치명율,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
