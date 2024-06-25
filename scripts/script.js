 //define employee data
 employeeData = {
  firstName: [],
  lastName: [],
  salary: [],
}

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
    // prompt for the users name
    let person = prompt("Please enter your first and last name!");

    //take name and split to be a first name and a last name. Push the 
    const fullname = person.split(" ", 2);
    employeeData.firstName.push(fullname[0]);
    employeeData.lastName.push(fullname[1]);

    //prompt user for salary
    let salaryP = prompt("Please enter your salary.");
    // let convSal = parseInt(salary)
    employeeData.salary.push(parseInt(salaryP));

    //add 1 to emplength
    empLength++

    redo = confirm("Would you like to log another employee?")

  }

  // reset redo so that the loop can run again when the button is pressed again.
  redo = true;

  // return the data from employee Data 
  return employeeData
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let sum = 0;
  for (x = 0; x < employeeData.salary.length; x++){
    sum += employeeData.salary[x]
  }
  let average = sum / employeeData.salary.length

  console.log(`The average salary between our ${employeeData.firstName.length} employee(s) is ${average}`)
};

// Select a random employee. 
const getRandomEmployee = function (employeesArray) {
  // get a random employee and give them a reward in the console
  randomEmployee = Math.floor(Math.random() * empLength)
  console.log(`Congrats ${employeeData.firstName[randomEmployee]} ${employeeData.lastName[randomEmployee]}! You have just won a one way ticket to the bahamas!`)
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
  for (let i = 0; i < employeesArray.firstName.length; i++) {
    // const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employeesArray.firstName[i];
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employeesArray.lastName[i];
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = employeesArray.salary[i].toLocaleString("en-US", {
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

  employeeData.firstName.sort(function (a, b) {
    if (this.lastName < this.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employeeData);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
