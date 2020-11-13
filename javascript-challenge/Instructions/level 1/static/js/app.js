// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


tableData.forEach(AddRow)


function AddRow(item){
var row = tbody.append("tr");

var result = Object.values(item);
    result.forEach(data => {
    row.append('td').text(data)
});

}


var button = d3.select("#filter-btn");

button.on("click", function(){


    tbody.html("");

     var InputValue = d3.select("#datetime").property("value");

     var filteredData = tableData.filter(result => result.datetime=== InputValue);
      

     console.log(filteredData);
     filteredData.forEach(AddRow);



});



