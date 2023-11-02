// unknown type
const getSpeedMPS = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The speed is ${convertedSpeed} ms`);
  }
  if (typeof value === "string") {
    const [valueInNumber, unit] = value.split(" ");
    const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
  } else {
    console.log("wrong input");
  }

  // Never type
  function throwError(msg: string): never {
    throw new Error(msg);
  }
};
