
// Appium server config and device capabilities
const localDeviceAndroid= {
    protocol: "http",
    hostname: "localhost",
    path: "/wd/hub",
    port: 4723,
    logLevel: "error",
    capabilities: {
        autoWebview: false,
        platformName: "Android",
        deviceName: "Pixel 2",
        appPackage: "com.android.calculator2",
        appActivity: "com.android.calculator2.Calculator",
        ignoreUnimportantViews: false,
        automationName: "Appium",
        unexpectedAlertBehaviour: "accept",
        "platformVersion": "9.0"
    }
}

export {localDeviceAndroid}