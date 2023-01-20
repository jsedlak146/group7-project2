function createChart() {
    // fetch data from the specified api endpoint
    fetch('/api/journal')
      .then(response => response.json())
      .then(data => {
        // extract the date and number of cigarettes from the "daily_forms" array
        const dates = data.daily_forms.map(form => form.date.slice(0,10));
        const numCigs = data.daily_forms.map(form => form.howManyCigs);

        // get the canvas element from the HTML where the chart will be rendered
        const ctx = document.getElementById('myChart').getContext('2d');

        // create a new chart using Chart.js with the extracted data and options
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates, // set the x-axis labels to the extracted dates
                datasets: [{
                    label: 'Cigarettes Smoked per Day',
                    data: numCigs, // set the data points to the extracted number of cigarettes
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time', 
                        time: {
                            unit: 'day'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
      });
}

// event listener to call the "createChart" function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    createChart();
});