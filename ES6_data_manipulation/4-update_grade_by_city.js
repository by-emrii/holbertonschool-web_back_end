export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find(
        (grade) => grade.studentId === student.id,
      );

      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
