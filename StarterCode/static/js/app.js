// from data.js
var tableData = data;
console.log(tableData);

var body = d3.select('tbody');
tableData.forEach(function(ufo) {
    var row = body.append('tr');
    Object.entries(ufo).forEach()
});