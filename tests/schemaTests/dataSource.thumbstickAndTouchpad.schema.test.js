const TestHelpers = require("../testHelpers.js");
const validator = TestHelpers.getValidator("dataSource.thumbstickAndTouchpad.schema.json", ["dataSource.properties.schema.json"]);
const validDataSource = Object.freeze({
  "id": "a thumbstick or touchpad",
  "dataSourceType": "thumbstickSource",
  "xAxisIndex": 0,
  "yAxisIndex": 1
});

test("Valid thumbstick sources", () => {
  let valid = false;
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  
  valid = validator(dataSource);
  if (!valid) {
    expect(validator.errors).toBeNull();
  }

  dataSource.buttonIndex = 0;
  valid = validator(dataSource);
  if (!valid) {
    expect(validator.errors).toBeNull();
  }

  dataSource.analogButtonValues = true;
  valid = validator(dataSource);
  if (!valid) {
    expect(validator.errors).toBeNull();
  }
});

test("Valid touchpad source", () => {
  let valid = false;
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  dataSource.dataSourceType = "touchpadSource";
  
  valid = validator(dataSource);
  if (!valid) {
    expect(validator.errors).toBeNull();
  }
});

test("No id", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  delete dataSource.id;
  expect(validator(dataSource)).toBe(false);
});

test("Invalid dataSourceType", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  
  delete dataSource.dataSourceType;
  expect(validator(dataSource)).toBe(false);

  dataSource.dataSourceType = "some nonsense";
  expect(validator(dataSource)).toBe(false);
});

test("Invalid xAxisIndex", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  
  dataSource.xAxisIndex = -1;
  expect(validator(dataSource)).toBe(false);
});

test("Invalid yAxisIndex", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  
  dataSource.yAxisIndex = -1;
  expect(validator(dataSource)).toBe(false);
});

test("Invalid buttonIndex", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  
  dataSource.buttonIndex = -1;
  expect(validator(dataSource)).toBe(false);
});

test("Invalid analogButtonValues", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  dataSource.analogButtonValues = true;
  expect(validator(dataSource)).toBe(false);
});

test("invalid additional properties", () => {
  let dataSource = TestHelpers.copyJsonObject(validDataSource);
  dataSource.someNonsense = {};
  expect(validator(dataSource)).toBe(false);
});
