const { sayMyName } = require("./index");

test("should say jamcry as default", () => {
  expect(sayMyName()).toBe("jamcry");
});

test("should say given name", () => {
  expect(sayMyName("myname")).toBe("myname");
});
