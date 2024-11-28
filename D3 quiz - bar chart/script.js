// Sample data for the bar chart
const data = [
  { date: "2021-01-01", gdp: 1000 },
  { date: "2021-02-01", gdp: 1500 },
  { date: "2021-03-01", gdp: 2000 },
  { date: "2021-04-01", gdp: 2500 },
  { date: "2021-05-01", gdp: 3000 },
];

// Set dimensions and margins for the chart
const margin = { top: 20, right: 30, bottom: 40, left: 40 },
  width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// Create SVG container
const svg = d3
  .select("svg")
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Set the x scale
const x = d3
  .scaleBand()
  .domain(data.map((d) => d.date))
  .range([0, width])
  .padding(0.1);

// Set the y scale
const y = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.gdp)])
  .nice()
  .range([height, 0]);

// Append x-axis
svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x));

// Append y-axis
svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));

// Create bars
svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.date))
  .attr("y", (d) => y(d.gdp))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d.gdp));
