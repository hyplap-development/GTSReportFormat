var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
  chart1.render();
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
  chart2.render();
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
  chart3.render();
  
  var chart4 = new ApexCharts(document.querySelector("#chart4"), options);
  chart4.render();
  var chart5 = new ApexCharts(document.querySelector("#chart5"), options);
  chart5.render();
  var chart6 = new ApexCharts(document.querySelector("#chart6"), options);
  chart6.render();
  var chart7 = new ApexCharts(document.querySelector("#chart7"), options);
  chart7.render();
  var chart8 = new ApexCharts(document.querySelector("#chart8"), options);
  chart8.render();
  var chart9 = new ApexCharts(document.querySelector("#chart9"), options);
  chart9.render();
  var chart10 = new ApexCharts(document.querySelector("#chart10"), options);
  chart10.render();
  var chart11 = new ApexCharts(document.querySelector("#chart11"), options);
  chart11.render();
  var chart12 = new ApexCharts(document.querySelector("#chart12"), options);
  chart12.render();
  var chart13 = new ApexCharts(document.querySelector("#chart13"), options);
  chart13.render();
  var chart14 = new ApexCharts(document.querySelector("#chart14"), options);
  chart14.render();
  var chart15 = new ApexCharts(document.querySelector("#chart15"), options);
  chart15.render();

