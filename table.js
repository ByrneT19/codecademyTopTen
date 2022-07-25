// Generates a times table 
function generate_table() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // With a form these values would be passed as arguments so any table could be made
    let nums1 = 10;
    let nums2 = 10;

    for (let i = 1; i <= nums1; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= nums2; j++) {
            const cell = document.createElement('td');
            const cellNum = document.createTextNode(i * j);
            cell.appendChild(cellNum);
            cell.style.padding = '0.6em';
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById('tableTimes').innerHTML = '<h1 id="tableHead">Times Tables</h1>';
    document.getElementById('tableTimes').appendChild(table);

    table.style.fontSize = '1.4em';
    table.style.fontWeight = '900';
    document.getElementById('tableHead').style.textDecoration = 'underline';
};
generate_table();