{
  // Conditional type
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type assets = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof assets ? true : false;

  type HasBike = CheckVehicle<"bike">;

  //
}
