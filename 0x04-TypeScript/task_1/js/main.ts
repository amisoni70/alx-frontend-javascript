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
