// Step 1: Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Example of using the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher3);

// Step 2: Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example of using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Step 3: Define the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example of using the printTeacher function
console.log(printTeacher("John", "Doe"));

