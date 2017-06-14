import helloBossHog from "./hello-boss-hog";
import { expect } from "chai";

describe("helloBossHog", () => {
  context('when number is multiples of 3', () => {
    [3, 6, 9, 33, 66, 93].forEach((number) => {
      it(`should return 'Boss' on ${number}`, () => {
        const result = helloBossHog(number);

        expect(result).to.equal("Boss");
      });
    });
  });

  context('when number is multiples of 5', () => {
    [5,35,50,80,85,95].forEach((number) => {
      it(`should return 'Hog' on ${number}`,() => {
        const result = helloBossHog(number);

        expect(result).to.equal("Hog");
      });
    });
  });

  context('when numnber is multiples of 3 and 5',()=>{
    [30,45,60,90].forEach((number)=>{
      it(`should return 'BossHog' on ${number}`,()=>{
        const result = helloBossHog(number);

        expect(result).to.equal("BossHog");

      });
    });
  });

  context('when number is not multiples of 3 and 5',()=>{
    [4,7,11,43,53,94,98].forEach((number)=>{
      it(`should return ${number} on ${number}`, ()=>{
        const result = helloBossHog(number);

        expect(result).to.equal(number);
      });
    });
  });
});
