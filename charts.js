const years = [2019, 2020, 2021, 2022, 2023];

new Chart(document.getElementById('chart1'), {
  type: 'line',
  data: {
    labels: years,
    datasets: [{
      label: 'Зовнішній борг (% ВВП)',
      data: [88, 90, 92, 95, 97],
      borderWidth: 2
    }]
  }
});

new Chart(document.getElementById('chart2'), {
  type: 'bar',
  data: {
    labels: years,
    datasets: [{
      label: 'Частка ВДЕ (%)',
      data: [18, 19, 20, 21, 22]
    }]
  }
});

new Chart(document.getElementById('chart3'), {
  type: 'line',
  data: {
    labels: years,
    datasets: [{
      label: 'Рівень безробіття (%)',
      data: [5.7, 9.6, 7.5, 5.3, 5.4]
    }]
  }
});
