export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);
    if (filteredGrades.length > 0) {
      return {
        ...student,
        grade: filteredGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
