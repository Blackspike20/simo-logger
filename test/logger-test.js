let chai = require("chai");
let assert = chai.assert;
let { logger } = require("../src/index");

let output = "";

const originalStdoutWrite = process.stdout.write.bind(process.stdout);

process.stdout.write = (chunk, encoding, callback) => {
  if (typeof chunk === "string") {
    output += chunk;
  }

  return originalStdoutWrite(chunk, encoding, callback);
};

describe("Tests aea-logger", function() {
  it("isNotEmpty", async function() {
    output = "";
    logger.level = "info";
    logger.info("test logger");
    assert.include(output, "[info] test logger");
  });
});
