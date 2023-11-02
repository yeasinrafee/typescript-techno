{
  //Union Type
  //   type FrontendDeveloper = "FakibazzDeveloper" | "JuniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "ExpertDeveloper";
  //   type Developer = FrontendDeveloper | FullStackDeveloper;
  //   const newDeveloper: FrontendDeveloper = "JuniorDeveloper"; // Value should be those two
  //   type User = {
  //     name: string;
  //     email: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };
  //   const user1: User = {
  //     name: "Rafee",
  //     email: "rafee@gmail.com",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["Html", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
