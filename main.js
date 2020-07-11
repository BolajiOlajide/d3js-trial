const w = 400;
const h = 200;
const padding = 5;
const dataset = [5, 10, 15, 20, 25, 30, 35];
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg.selectAll("rect").data(dataset).enter().append("rect")
  .attr("x", (d, i) => (i * (w / dataset.length)))
  .attr("y", (d) => h - (d * 4))
  .attr("width", w / dataset.length - padding)
  .attr("height", (d) => d * 4);
