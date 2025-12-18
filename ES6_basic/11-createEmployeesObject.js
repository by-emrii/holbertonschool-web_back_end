export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

createEmployeesObject('Software', ['Bob', 'Sylvie']);
