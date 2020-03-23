const unit = require("./index").unit

it("should run unit test", () => {
  expect(unit()).toEqual("strang")
})