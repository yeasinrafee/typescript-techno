{
  // Generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 4, 6];
  const rollNumbers: GenericArray<number> = [3, 4, 6];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // Generic Object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 56,
    },
    {
      name: "Kabir",
      age: 32,
    },
  ];

  // Generic Tuple
  type GenericTuple<X, Y> = [X, Y];
  const human: [string, string] = ["Mr. X", "Mr. Y"];
  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Rafee", email: "rafee@gmail.com" },
  ];

  //
}
