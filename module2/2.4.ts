{
  //
  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poshDeveloper: Developer<EmilabWatch> = {
    name: "Rafee",
    computer: {
      brand: "Dell",
      model: "Ex-3320",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Xaomi",
      model: "BXTD",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: true;
    sleepTrack: true;
  }
  interface Bike {
    model: string;
    engineCapacity: string;
  }
  const smartDeveloper: Developer<AppleWatch, Bike> = {
    name: "Yeasin",
    computer: {
      brand: "HP",
      model: "830",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple",
      model: "i-03",
      display: "Super OLED",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "150cc",
    },
  };
  //
}
