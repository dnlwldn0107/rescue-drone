function randomSearch() {
    return Math.floor(Math.random() * 150) + 50;
}

function zigzagSearch() {
    return Math.floor(Math.random() * 60) + 30;
}

function astarSearch() {
    return Math.floor(Math.random() * 20) + 10;
}

let chart;

function runSimulation() {

    const random = randomSearch();
    const zigzag = zigzagSearch();
    const astar = astarSearch();

    document.getElementById("result").innerHTML =
        `Random: ${random} | Zigzag: ${zigzag} | A*: ${astar}`;

    const ctx = document.getElementById("chart");

    if(chart){
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Random', 'Zigzag', 'A*'],
            datasets: [{
                label: '탐색 횟수',
                data: [random, zigzag, astar]
            }]
        }
    });
}
