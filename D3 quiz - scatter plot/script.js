// script.js
// Sample data
const data = [
  { year: new Date(2000, 0, 1), minutes: 120 },
  { year: new Date(2001, 0, 1), minutes: 150 },
  // ... more data points ...
];

// Create x and y scales
const xScale = d3
  .scaleTime()
  .domain(d3.extent(data, (d) => d.year))
  .range([0, 600]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.minutes)])
  .range([400, 0]);

// Append x-axis
d3.select("#x-axis")
  .attr("transform", "translate(0,400)")
  .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")));

// Append y-axis
d3.select("#y-axis").call(
  d3
    .axisLeft(yScale)
    .tickFormat((d) => d3.timeFormat("%M:%S")(new Date(d * 60000)))
);

// Append dots
d3.select("#dots")
  .selectAll(".dot")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "dot")
  .attr("cx", (d) => xScale(d.year))
  .attr("cy", (d) => yScale(d.minutes))
  .attr("r", 5)
  .attr("data-xvalue", (d) => d.year)
  .attr("data-yvalue", (d) => d.minutes)
  .on("mouseover", function (event, d) {
    d3.select("#tooltip")
      .style("display", "block")
      .attr("data-year", d.year)
      .text(`Year: ${d3.timeFormat("%Y")(d.year)}, Minutes: ${d.minutes}`);
  })
  .on("mouseout", function () {
    d3.select("#tooltip").style("display", "none");
  });
