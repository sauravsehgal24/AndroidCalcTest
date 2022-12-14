# Android Native Calculator Automation

### Prerequisite
1. Download and install npm
2. Download and install nodejs
3. Download and install android studio and setup ANDROID_HOME environment and emulator with android platform version 9 and device name: 'Pixel 2' (refer to /config/AppiumConfig.js)
4. Download and install appium server or appium desktop application

### How to run the project locally
1. Clone the Repo in local and navigate to the root folder and in the terminal/console type `npm install` to install all the dependencies
2. Start Local Appium Desktop Server or Appium Server at localhost with port: 4723
3. Start the emulator from `avd` CLI or start android studio and navigate to tools>Device Manager and start the emulator
4. Once everything is up and running, navigate to the root folder of the repo again and execute `npm test` in the terminal/console 
5. You should be able to see the live test running in the android emulator

### Repo Folder Structure

/config/AppiumConfig.js -> Contains general configuration for appium server and device caps

/test/PageModal -> Contains the Page Modals for the android application

/test/testSuite -> Contains all the test cases to be executed