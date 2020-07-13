const height = 350;
const width = 400;

const monthlySales = [
  { month: 10, sales: 100 },
  { month: 20, sales: 130 },
  { month: 30, sales: 250 },
  { month: 40, sales: 300 },
  { month: 50, sales: 265 },
  { month: 60, sales: 225 },
  { month: 70, sales: 180 },
  { month: 80, sales: 120 },
  { month: 90, sales: 145 },
  { month: 100, sales: 130 },
];

// KPI color
const salesKPI = d => d.sales >= 250 ? '#33CC66' : '#666';

const showMinMax = (ds, col, val, type) => {
  const max = d3.max(ds, (d) => d[col]);
  const min = d3.min(ds, (d) => d[col]);

  if (type === 'minmax' && (val == min || val == max)) {
    return val;
  }

  if (type === 'all') {
    return val;
  }
}

const svg = d3
  .select("body")
  .append("svg")
  .attr({ width, height });

const dots = svg.selectAll("circle")
  .data(monthlySales)
  .enter()
  .append("circle")
  .attr({
    cx: d => d.month * 3,
    cy: d => height - d.sales,
    r: 5,
    fill: d => salesKPI(d)
  });

const labels = svg
  .selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(d => showMinMax(monthlySales, 'sales', d.sales, 'minmax'))
  // .text(d => showMinMax(monthlySales, 'sales', d.sales, 'all'))
  .attr({
    x: d => (d.month * 3) - 30,
    y: d => height - d.sales,
    "font-size": "12px",
    "font-family": "san-serif",
    "text-anchor": "start",
    "fill": "#666"
  })