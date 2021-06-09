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
    var inputDate = d3.select('#datetime').property('value').toLowerCase();
    var inputCity = d3.select('#cities').property('value').toLowerCase();
    var inputState = d3.select('#statestate').property('value').toLowerCase();
    var inputCountry = d3.select('#usa').property('value').toLowerCase();
    var inputShape = d3.select('#shipshape').property('value').toLowerCase();

    console.log(inputState);

    if (inputDate.length > 0) {
        filteredData = filteredData.filter(filteredData => filteredData.datetime === inputDate); 
        console.log(filteredData);
    }

    if (inputCity.length > 0) {
        filteredData = filteredData.filter(filteredData => filteredData.city === inputCity);
        console.log(filteredData);
    }

    if (inputState.length > 0) {
        filteredData = filteredData.filter(filteredData => filteredData.state === inputState);
        console.log(filteredData);
    }

    if (inputCountry.length > 0) {
        filteredData = filteredData.filter(filteredData => filteredData.country === inputCountry);
        console.log(filteredData);
    }
    
    if (inputShape.length > 0){
        filteredData = filteredData.filter(filteredData => filteredData.shape === inputShape);
        console.log(filteredData);
    }
    
    createTable(filteredData);
}

d3.select("#filter-btn").on("click", runEnter);
//d3.selectAll("input").on("change", runEnter);

createTable(tableData);