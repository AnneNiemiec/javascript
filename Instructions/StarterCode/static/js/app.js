// from data.js
var tableData = data;

// YOUR CODE HERE!
var ufodata=d3.select ("tbody")
function myFunction(data){
    ufodata.html("");
    data.forEach((ufo) => {
    var row = ufodata.append("tr");
    Object.values(ufo).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
});
});
}
function datetimeFunction(){
var date=d3.selectAll("#datetime").property("value");
var table=tableData;
if (date){
    table = table.filter(location => location.datetime === date);
}
myFunction(table)
}
d3.selectAll("#filter-btn").on("click", datetimeFunction);
myFunction(tableData)

