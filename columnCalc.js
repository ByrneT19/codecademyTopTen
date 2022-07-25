// Finds the value of a column total 
function tableLoop() {
    let row = document.querySelectorAll('tr');
    let column = [];
    // Use desiredColumn to specify which column to get the total for
    let desiredColumn = 5;
    row.forEach((row) => {
        let value = row.cells;
        let tableData = value[desiredColumn].innerText;
        column.push(tableData);
    });
    let lastArray = column.map(num => {
        return Number(num);
    });
    let result = lastArray.reduce((a, b) => a + b);
    let div1 = document.createElement('div');
    div1.setAttribute('id', 'columnRender');
    document.getElementById('colTot').parentNode.insertBefore(div1, Node.nextSibling);
    const heading = document.createElement('h2');
    heading.innerHTML = 'Column Total';
    document.getElementById('columnRender').appendChild(heading);
    const p1 = document.createElement('p');
    p1.innerHTML = (`
        The total for column ${desiredColumn + 1} is ${result}.
    `);
    document.getElementById('columnRender').appendChild(p1);
};
tableLoop();