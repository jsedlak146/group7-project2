const router = require('express').Router();
const { QuitPlan } = require("../../models");
const Chart = require('chart');


router.get('/api/Users/:id', (req, res) => {
    QuitPlan.findByPk(req.params.id).then(user => {
        const howManyCigs = user.howManyCigs;
        const cigPrice = user.cigPrice;

        // chart.js needs a "canvas" to render the graph
        // <canvas id='myChart'> </canvas> to wrap the graph
        const ctx = document.getElementById('myChart').getContext('2d');
        // this is where you create a graph with the data
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                // x and y axis?
                labels: ['Cigarettes per week', 'Money spent per week'],
                datasets: [{
                    // label of the data set / graph
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
        // this is to render the data to the handlebar
        res.render('../../views/layouts/graph-card'), {
            howManyCigs: howManyCigs,
            cigPrice: cigPrice,
            chart: chart.toBase64Image()
        }

    })

})

module.exports = router;