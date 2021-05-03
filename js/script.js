// CREATE AN ARRAY OF EMPLOYEES
// GET DOM ELEMENTS
let empTable = document.querySelector('#employees');
let empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {

    (async function(){ // my write
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    const employees = await facuser('./data/employees.json');
    
   console.log(employees);
    for (let employee of employees.employees) {
        tbody.innerHTML +=
            `
        <tr>
            <td>${employee.ID}</td>
            <td>${employee.Name}</td>
            <td>${employee.Ext}</td>
            <td><a href="mailto:${employee.Email}">${employee.Email}</a></td>
            <td>${employee.Department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${employees.employees.length})`;
})();
};
