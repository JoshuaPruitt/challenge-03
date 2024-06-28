//define employee data
let employee = []

//redo for retun to adding employee
let redo = true;

//track number of employees
let empLength = 0;

var empTable = document.getElementById('employee-table')

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  let row = document.createElement("tr")
  
  
  while (redo == true){
    let employeeAddArray = [];

    // prompt for the users name
    let person = prompt("Please enter your first and last name!");

    //take name and split to be a first name and a last name. Push the 
    const fullname = person.split(" ", 2);
    
    //prompt user for salary
    let salaryP = prompt("Please enter your salary.");
   
    //add added info to object
    employeeAddObj = {firstName: fullname[0] ,lastName: fullname[1] ,salary: salaryP }

    employee.push(employeeAddObj)
    // console.log(employee)

    //add 1 to emplength
    empLength++

    redo = confirm("Would you like to log another employee?")

  }

  // reset redo so that the loop can run again when the button is pressed again.
  redo = true;

  // return the data from employee Data 
  return employee
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let sum = 0;
  
  for (x = 0; x < employee.length; x++){
    sum += employee[x].salary
  }
  let average = sum / employee.length
  //convert averge to usd with 2 decimal places
  average = average.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

  console.log(`The average salary between our ${employee.length} employee(s) is ${average}`)
};

// Select a random employee. 
const getRandomEmployee = function (employeesArray) {
  // get a random employee and give them a reward in the console
  let randomEmployee = Math.floor(Math.random() * empLength)
  
  // make employee logging easier
  let employeeFirstName = employee[randomEmployee].firstName;
  let employeeLastName = employee[randomEmployee].lastName;

  console.log(`Congrats ${employeeFirstName} ${employeeLastName}! You have just won a one way ticket to the bahamas!`)
};


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
