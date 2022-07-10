// import data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select("tbody");

function buildtable(data) {
    tbody.html(""); //clear out existing data
    //loop through each object in data and append to a row and cells for each value in row
    data.forEach((dataRow) => {
        //append row to table body
        let row = tbody.append("tr");
        //loop through each field in dataRow, add each value as table cell (td)  
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

//function handles what to do after input is given
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData

    //check if date was entered, filter data using date
    if (date) {
        // apply "filter" to table data, only keep rows where "datetime" matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //attach event to listen for form button
    d3.selectAll("#filter-btn").on("click",handleClick);
    
    //build table when page loads
    buildtable(filteredData);
};