// from data.js
var tableData = data;

// YOUR CODE HERE!
//Create table using D3 and function
var ufodata=d3.select ("tbody")
function myFunction(data){
// clear the existing output
    ufodata.html("");
    data.forEach((ufo) => {
// Appendtable row `tr` to the table body
    var row = ufodata.append("tr");
    Object.values(ufo).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
});
});
}
//Create for loop & function to run
function datetimeFunction(){
// Get value property of the date element
var date=d3.selectAll("#datetime").property("value");
var table=tableData;
if (date){
    table = table.filter(location => location.datetime === date);
}
myFunction(table)
}
// Update HTML
d3.selectAll("#filter-btn").on("click", datetimeFunction);
myFunction(tableData)

