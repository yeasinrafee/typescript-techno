{
  const bros1: string[] = ["Shakil", "Alif", "Mamun"];
  const bros2: string[] = ["Kew", "Nai", "Kew"];
  bros1.push(...bros2);

  const sem1 = {
    DLD: "Alamgir",
    Stat: "Ratna",
    Assembly: "Moumitu",
  };

  const sem2 = {
    compiler: "Mahmudul",
    architecture: "Asif",
    java: "Rana",
  };

  const facultyList = {
    ...sem1,
    ...sem2,
  };

  //   rest operators
  const greetFriends = (...friends: string[]) => {
    // console.log(`hey, ${friend1}, ${friend2}, ${friend3}`)
    friends.forEach((friend) => `Hi ${friend}`);
  };
  greetFriends("hola", "mola", "kola", "gola");
}
