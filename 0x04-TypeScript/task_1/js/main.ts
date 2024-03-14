interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: true | false;
  yearsOfExperience?: number;
  location: string;
  contract?: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string; lastName: string;): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string; => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () : string => 'Currently working';

  displayName = () : string => this.firstName;
}

interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Ami", "Choudhary");
console.log(student.displayName())
console.log(student.workOnHomework())
