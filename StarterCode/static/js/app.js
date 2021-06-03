// from data.js
var tableData = data;
console.log(tableData);

var body = d3.select('tbody');
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = body.append('tr');
    Object.entries(ufo).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        var cell = row.append('td');
        cell.text(value);
    });     
});