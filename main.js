const w = 400;
const h = 200;
const padding = 5;
const dataset = [5, 10, 13, 19, 21, 25, 11, 25, 22, 18, 7];
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

function colorPicker(data) {
  console.log({ data });
  return data <= 20 ? "#666" : "#FF0033";
}

svg.selectAll("rect").data(dataset).enter().append("rect")
  .attr("x", (d, i) => (i * (w / dataset.length)))
  .attr("y", (d) => h - (d * 4))
  .attr("width", w / dataset.length - padding)
  .attr("height", (d) => d * 4)
  .attr("fill", (d) => colorPicker(d));

// An alternative to 👆🏽 is 👇🏽
// but for some weird reason it doesn't work
// svg.selectAll("rect").data(dataset).enter().append("rect")
//   .attr({
//     x: function (d, i) { return i * (w / dataset.length); },
//     y: function (d) { return h - (d * 4) },
//     width: w / dataset.length - padding,
//     height: function (d) { return d * 4; },
//     fill: function (d) { return colorPicker(d); }
//   });