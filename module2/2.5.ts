{
  // Function with generics
  const createArray = (para: string): string[] => {
    return [para];
  };
  const res1 = createArray("Yeasin");

  const createArrayWithGenerics = <T>(para: T): T[] => {
    return [para];
  };
  const resGenerics = createArrayWithGenerics<string>("Rafee");

  type User = {
    name: string;
    id: number;
  };
  const resGenericsObj = createArrayWithGenerics<User>({
    name: "Rafee",
    id: 234356,
  });

  const createArrayWithTuple = <T, Q>(para1: T, para2: Q): [T, Q] => {
    return [para1, para2];
  };
  const resGenericTup = createArrayWithTuple<string, string>("Yeain", "Rafee");

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Mr. Rafee",
    email: "rafee@gmail.com",
    devType: "nlwd",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Yeasin",
    email: "yeasin@gmail.com",
    devType: "nlwd",
  });
  //
}
