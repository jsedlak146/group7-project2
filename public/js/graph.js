function createChart(userId) {
    // where should the data be retrieved from?
    fetch('/api/Users/'+userId)
      .then(response => response.json())
      .then(data => {
        const howManyCigs = data.howManyCigs;
        const cigPrice = data.cigPrice;
        // chart.js needs a "canvas" to render the graph
        const ctx = document.getElementById('myChart').getContext('2d');
        // this is where you create a graph with the data
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Cigarettes per week', 'Money spent per week'],
                datasets: [{
                    label: 'Weekly use and cost of cigarettes',
                    data: [howManyCigs, cigPrice],
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
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
      });
}

document.addEventListener("DOMContentLoaded", function() {
    createChart(userId);
});