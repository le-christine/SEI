mocha.setup('bdd');
const assert = chai.assert;
const expect = chai.expect;

//A basic test
describe("My First Test Suite", function() {
  it("introduces a test suite", function() {
    expect(true).to.equal(true);
  });

  it("introduces a failing test", function() {
    expect(false).to.equal(true);
  })
});

mocha.run();
