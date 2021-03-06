const { join } = require('path');

const MappingType = Object.freeze({
  WEBXR: "WebXR",
  WEBVR: "WebVR",
  MOCK: "mock"
});

const Constants = {
  MappingType: MappingType,

  MappingFolders: Object.freeze({
    [MappingType.WEBXR]: join(__dirname, "../mappings/WebXR/"),
    [MappingType.WEBVR]: join(__dirname, "../mappings/WebVR/"),
    [MappingType.MOCK]: join(__dirname, "../tests/mockMappings/")
  }), 

  Handedness: Object.freeze({
    NONE: "none",
    LEFT: "left",
    RIGHT: "right"
  }),

  ComponentState: Object.freeze({
    DEFAULT: "default",
    TOUCHED: "onTouch",
    PRESSED: "onPress"
    }),
  
  DataSourceType: Object.freeze({
    BUTTON: "buttonSource",
    DPAD_FROM_AXES: "dpadFromAxesSource",
    DPAD_FROM_BUTTONS: "dpadFromButtonsSource",
    THUMBSTICK: "thumbstickSource",
    TOUCHPAD: "touchpadSource"
  }),

  TouchThreshold: 0.2,
  
  PressThreshold: 0.95
};

module.exports = Constants;