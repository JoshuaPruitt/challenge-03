
//No. of employees tracker
let empNo = 0;

var empTable = document.getElementById('employee-table')

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  //define employee data
  employeeData = {
    firstName: "",
    lastName: "",
    salary: 0,
  }
  
  // prompt for the users name
  let person = prompt("Please enter your first and last name!");

  //take name and split to be a first name and a last name. Plug them into employee data table
  const fullname = person.split(" ", 2);
  employeeData.firstName = fullname[0];
  employeeData.lastName = fullname[1];
  
  // return the data from employee Data 
  return employeeData
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let row = document.createElement("tr")

  //prompt user for salary
  employeesArray.salary = prompt("Please enter your salary.");
  // employeesArray.salary = salary;

  //take first name, last name, and salary and display them
  let tabForm = '<td>' + employeesArray.firstName + '</td><td>' + employeesArray.lastName + '</td><td>' + "$" + employeesArray.salary + ".00" + '</td>';
  row.innerHTML = tabForm;
  empTable.appendChild(row);

  //add 1 to the employee tracker.
  empNo++
  console.log(empNo);
};

// Select a random employee. 
const getRandomEmployee = function (employeesArray) {
  // 
};


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

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
addEmployeesBtn.addEventListener("click", trackEmployeeData);
