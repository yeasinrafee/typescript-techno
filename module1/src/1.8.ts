{
  // Object Destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Yeasin",
      middleName: "Arefin",
      lastName: "Rafee",
    },
    contactNo: "234353534",
    address: "uttara",
  };
  const {
    contactNo,
    name: { middleName },
  } = user;

  // array destructuring
  const myFriends = [
    "Ragnar",
    "Lothbrok",
    "Floki",
    "Herrald",
    "Rollo",
    "Bjorn",
  ];
  const [a, b, bestfriend, ...rest] = myFriends;
}
