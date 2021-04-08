const { getMyName } = require("./index");

test("should say jamcry as default", () => {
  expect(getMyName()).toBe("jamcry");
});

test("should say given name", () => {
  expect(getMyName("myname")).toBe("myname");
});
