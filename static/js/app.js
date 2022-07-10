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