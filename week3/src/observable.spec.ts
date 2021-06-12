import { expect } from "chai";
import "mocha";
import { Marsupials } from "./observable";

describe("test for observable.ts", () => {
  const marsupials = new Marsupials();
  const marsupialList = [
    {
      name: "Koala",
      status: "threatened",
    },
    {
      name: "Wombat",
      status: "endangered",
    },
    {
      name: "Quoll",
      status: "endangered",
    },
  ];
  // const expectedEndangeredAnmials = ["Wombat"];
  it("should indicate false when determining is a koala is enadangered", () => {
    expect(marsupials.isEndangered(marsupialList, "Koala")).to.equal(false);
  });
  it("should indicate true when determining is a wombat is enadangered", () => {
    expect(marsupials.isEndangered(marsupialList, "Wombat")).to.equal(true);
  });
  it("should return an array of endangered marsupials", () => {
    expect(marsupials.getEndangeredMarsupials(marsupialList)).to.contain(
      "Wombat"
    );
  });
});
