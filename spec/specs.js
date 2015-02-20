describe("Pizza", function() {
  describe("slices", function() {
    it("will tell you how many slices (rounded up) are in a pizza of a certain diameter given a pizza slice of the size 14.13 sq inches.", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 12
      expect(testPizza.slices()).to.equal(8);
    });
  });
  describe("feed", function() {
    it("will give you how many average adults the pizza will feed", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 12
      expect(testPizza.feed()).to.equal(3);
    });
  });
});
