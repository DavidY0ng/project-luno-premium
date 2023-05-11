import { priceDiff1 } from "../lib/priceCalc";
import { lunoPremium } from "../lib/priceCalc";


test("Returns the correct difference operation", () => {
    expect(priceDiff1(4,2)).toEqual(2);
  });

test("Returns the correct division operation", () => {
    expect(lunoPremium(10,2)).toEqual(80);
  });