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
