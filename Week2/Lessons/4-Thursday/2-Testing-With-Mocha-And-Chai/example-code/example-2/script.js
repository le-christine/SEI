mocha.setup('bdd');
const assert = chai.assert;
const expect = chai.expect;

function pigLatin(phrase) {
  const pigLatinWords = [];

  phrase.split(' ').forEach((word) => {
    const firstLetter = word.substring(0,1);
    word = word.substr(1);
    pigLatinWords.push(`${word}-${firstLetter}ay`);
  });

  return pigLatinWords.join(' ');
}

describe("Testing pigLatin", function() {
  it("Converts 'hello world' into pig latin", function() {
    expect(pigLatin("hello world")).to.equal("ello-hay orld-way");
  });
})

mocha.run();
