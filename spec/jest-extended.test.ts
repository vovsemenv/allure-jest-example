describe("drinks", () => {
  it("everyone can buy drinks", () => {
    expect([
      { name: "vova", age: 22 },
      { name: "egor", age: 28 },
    ]).toSatisfyAll((person) => person.age > 18);
  });
});
