{
  // Constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    id: 111,
    name: "Mr. Rafee",
    email: "rafee@gmail.com",
    devType: "nlwd",
  });
  const student2 = addCourseToStudent({
    id: 222,
    name: "Mr. Yeasin",
    email: "yeasin@gmail.com",
    hasWatch: "Apple Watch",
  });
  //
}
