{
  // type guards

  // typeof --> type guard

  type Alphaneumeric = string | number;
  const add = (para1: Alphaneumeric, para2: Alphaneumeric): Alphaneumeric => {
    if (typeof para1 === "number" && typeof para2 === "number") {
      return para1 + para2;
    } else {
      return para1.toString() + para2.toString();
    }
  };
  const result1 = add("4", "6");
  console.log(result1);

  // in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr .Normal",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  };
  getUser(normalUser);
  getUser(adminUser);
  //
}
