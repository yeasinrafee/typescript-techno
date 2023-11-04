{
  //
  const kgToGram = (kg: number | string): number | string | undefined => {
    if (typeof kg === "string") {
      const convertedNumber = parseFloat(kg);
      return `The weight is ${convertedNumber * 1000}`;
    } else if (typeof kg === "number") {
      return kg * 1000;
    }
  };

  const result1 = kgToGram(100) as number;
  const result2 = kgToGram("100") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
