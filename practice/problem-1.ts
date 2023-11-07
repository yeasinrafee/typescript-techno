{
  // Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.
  // After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects.

  type Arr = {
    id: number;
    name: string;
  };

  const user: Arr[] = [
    {
      id: 101,
      name: "Yeasin",
    },
    {
      id: 102,
      name: "Rafee",
    },
    {
      id: 103,
      name: "Arefin",
    },
  ];

  const getProperty = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
    return array.map((el) => el[key]);
  };

  console.log(getProperty(user, "name"));
}
