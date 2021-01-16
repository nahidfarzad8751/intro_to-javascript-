// from data.js
var tabledata = data;


//refrences 
var tbody = d3.select("tbody");

function buildTable (data) {
    tbody.html("");
    data.forEach((dataRow) => {



    d3.select("body")
        .selectAll("tr")
         .data(data)
        .enter()
        .append("tr")

    .html((item)=>{
    return `<td>${}</td>`
});



function handleClick(){
    // Prevent from Refreshing
    d3.event.preventDefault();
    // Choose Input
    let date = d3.select("#datetime").property("value");
    let filteredData = data;



// no matching results
if (results.length === 0) {
    tbody.text(`No sightings on ${inputDate}.`);
}
// matching results 
else {
var AddData = (input) => {
    input.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}}
AddData(data);




if(date) {
   
    filteredData = filteredData.filter((row) => row.datetime === date);
}
    // Table with filtered data
    buildTable(filteredData);



d3.selectAll("#filter-btn").on("click", handleClick);

// Table with data.js 
buildTable(tableData);