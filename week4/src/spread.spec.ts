import { expect } from "chai";
import "mocha";
import {
  originalNumbers,
  originalNumbersNew,
  winners,
  runnerUps,
  contestants,
  originalPersons,
  originalPeople,
  originalUpdates,
  originalUpdatesNew,
} from "./spread";

describe("test for spread.ts", () => {
  it("Should indicate originalNumbers and originalNumbersNew are equivalent arrays", () => {
    expect(originalNumbersNew).to.eql(originalNumbers);
  });

  it("Should indicate the constestants array contains the values from the winners and runnerUps arrays", () => {
    expect(contestants).to.eql(winners.concat(runnerUps));
  });

  it("Should indicate the orignialPersons object and the originalPeople object are equivalent", () => {
    expect(originalPeople).to.eql(originalPersons);
  });

  it("Should indicate the orignialUpdates array and the orignialUpdatesNew array are equivalent", () => {
    expect(originalUpdatesNew).to.eql(originalUpdates);
  });
});
