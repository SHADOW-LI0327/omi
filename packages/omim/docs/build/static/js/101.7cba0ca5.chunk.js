webpackJsonp([101],{41:function(n,a){n.exports="## Bar\n\nBar chart.\n\n## Usage\n\n```html\n<m-bar id=\"myBar\" width=\"600\" height=\"300\" data=\"{\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    backgroundColor: [\n      'rgba(255, 99, 132, 0.2)',\n      'rgba(54, 162, 235, 0.2)',\n      'rgba(255, 206, 86, 0.2)',\n      'rgba(75, 192, 192, 0.2)',\n      'rgba(153, 102, 255, 0.2)',\n      'rgba(255, 159, 64, 0.2)'\n    ],\n    borderColor: [\n      'rgba(255,99,132,1)',\n      'rgba(54, 162, 235, 1)',\n      'rgba(255, 206, 86, 1)',\n      'rgba(75, 192, 192, 1)',\n      'rgba(153, 102, 255, 1)',\n      'rgba(255, 159, 64, 1)'\n    ],\n    borderWidth: 1\n  }]\n}\"\n  options=\"{\n  legend: {\n    display: false\n  },\n  scales: {\n    yAxes: [{\n      ticks: {\n        beginAtZero: true\n      }\n    }]\n  }\n}\"></m-bar>\n```\n\n## Update the chart\n\n```js\n//get the element\nvar chart = document.querySelector('#myBar')\n//change data of chart\nchart.props.data.datasets.forEach(dataset => {\n  dataset.data.forEach((item, index) => {\n    dataset.data[index] = Math.random() * 100\n  })\n})\n//update chart\nchart.update()\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  data: object,\n  options: object,\n  width: number,\n  height: number,\n  horizontal?: string\n}\n```"}});
//# sourceMappingURL=101.7cba0ca5.chunk.js.map