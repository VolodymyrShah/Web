// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML5 - 50%', 'C# - 15%', 'JavaScript - 16%'],
        datasets: [{
            label: 'Рівень знань',
            data: [50,20,16],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
             
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
               
            ],
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Мої знання',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 60
                    
                }
            }]
        }
    }
});