// Sample data
const data = [
  { month: 1, year: 2000, temp: 30 },
  { month: 2, year: 2000, temp: 25 },
  // Add more data points as needed
];

const svg = d3.select("svg");
const heatmap = svg.select("#heatmap");
const tooltip = d3.select("#tooltip");

// Create heatmap cells
heatmap
  .selectAll(".cell")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "cell")
  .attr("data-month", (d) => d.month)
  .attr("data-year", (d) => d.year)
  .attr("data-temp", (d) => d.temp)
  .attr("x", (d, i) => (i % 12) * 30) // Adjust x position based on month
  .attr("y", (d) => (d.month - 1) * 30) // Adjust y position based on month
  .attr("width", 20)
  .attr("height", 20)
  .attr("fill", (d) => {
    if (d.temp < 20) return "color1"; // Example color logic
    if (d.temp < 25) return "color2";
    if (d.temp < 30) return "color3";
    return "color4";
  })
  .on("mouseover", function (event, d) {
    tooltip
      .style("display", null)
      .attr("transform", `translate(${event.pageX},${event.pageY})`);
    tooltip.select("text").text(`Year: ${d.year}, Temp: ${d.temp}`);
  })
  .on("mouseout", function () {
    tooltip.style("display", "none");
  });

// Create axes (you can customize this further)
const xScale = d3
  .scaleBand()
  .domain(data.map((d) => d.year))
  .range([0, 800])
  .padding(0.1);

const yScale = d3
  .scaleBand()
  .domain(data.map((d) => d.month))
  .range([0, 400])
  .padding(0.1);

svg
  .select("#x-axis")
  .attr("transform", "translate(0,400)")
  .call(d3.axisBottom(xScale));

svg
  .select("#y-axis")
  .call(
    d3
      .axisLeft(yScale)
      .tickFormat((d) => d3.timeFormat("%B")(new Date(0, d - 1)))
  );
