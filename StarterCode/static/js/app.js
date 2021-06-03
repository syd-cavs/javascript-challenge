// from data.js
var tableData = data;
//console.log(tableData);
var tbody = d3.select('tbody');

function createTable(x){
    tbody.html('')
    x.forEach(function(ufo) {
        //console.log(ufo);
        var row = tbody.append('tr');
        Object.entries(ufo).forEach(([key, value]) => {
            //console.log(`${key}: ${value}`);
            var cell = row.append('td');
            cell.text(value);
        });     
    });
};

function runEnter() {
    

    var filteredData = tableData;
    var inputValue = d3.select('#datetime').property('value');
    
    filteredData = filteredData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    createTable(filteredData);
}

d3.select("#filter-btn").on("click", runEnter);

//d3.selectAll("input").on("change", runEnter);




createTable(tableData);