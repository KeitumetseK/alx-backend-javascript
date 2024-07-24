export default function createIteratorObject(report) {
  function* employeeGenerator(allEmployees) {
    for (const department of Object.values(allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenerator(report.allEmployees);
}
