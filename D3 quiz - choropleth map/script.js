// Sample data for counties (FIPS codes and education levels)
const educationData = [
  { fips: "01001", education: 12 },
  { fips: "01003", education: 10 },
  { fips: "01005", education: 14 },
  { fips: "01007", education: 16 },
  { fips: "01009", education: 8 },
  // Add more counties as needed
];

// Define color scale
const colorScale = d3
  .scaleQuantize()
  .domain([8, 16]) // Adjust according to your data range
  .range(["#f7f7f7", "#cccccc", "#969696", "#525252"]);

// Create SVG container
const svg = d3.select("#choropleth");

// Load GeoJSON data for counties
d3.json(
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-counties.geojson"
).then((geoData) => {
  // Join education data to GeoJSON features
  geoData.features.forEach((feature) => {
    const countyData = educationData.find((d) => d.fips === feature.id);
    feature.properties.education = countyData ? countyData.education : 0;
  });

  // Draw counties
  svg
    .selectAll(".county")
    .data(geoData.features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("d", d3.geoPath())
    .attr("fill", (d) => colorScale(d.properties.education))
    .attr("data-fips", (d) => d.id)
    .attr("data-education", (d) => d.properties.education)
    .on("mouseover", function (event, d) {
      const tooltip = d3.select("#tooltip");
      tooltip
        .style("display", "block")
        .attr("data-education", d.properties.education)
        .html(
          `County FIPS: ${d.id}<br>Education Level: ${d.properties.education}`
        );
    })
    .on("mousemove", function (event) {
      const tooltip = d3.select("#tooltip");
      tooltip
        .style("left", event.pageX + 5 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function () {
      d3.select("#tooltip").style("display", "none");
    });

  // Create legend
  const legend = d3.select("#legend");
  colorScale.range().forEach((color, i) => {
    legend
      .append("div")
      .style("background-color", color)
      .text(
        `${Math.round(colorScale.invertExtent(color)[0])} - ${Math.round(
          colorScale.invertExtent(color)[1]
        )}`
      );
  });
});
