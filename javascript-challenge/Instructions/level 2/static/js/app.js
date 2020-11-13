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

     var date = d3.select("#datetime").property("value");
     var city = d3.select('#city').property('value');
     var state = d3.select('#state').property('value');
     var country = d3.select('#country').property('value');
     var shape = d3.select('#shape').property('value');
     var comment = d3.select('#comment').property('value');
     
     var filteredData = tableData.filter(result => result.datetime===date 
        || result.city===city || result.state===state || result.country===country || result.shape===shape 
        || result.comment===comment);

     console.log(filteredData);
     filteredData.forEach(AddRow);

});