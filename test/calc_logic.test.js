import { localDeviceAndroid } from "../config/AppiumConfig.js";
import { CalculatorHomePage } from "./PageModal/CalculatorPage.js";
import { remote } from "webdriverio";
import { assert } from "chai";

// Test Data
const testData={
    add:[{
        val1:6,
        val2:4,
        result:10,
        message:"Addition test failed; Expected: 10"
    }]
}

describe("Android Calculator Logic tests",function(){

    // For mobile devices, the latency can be high, so adding longer timeout
    this.timeout(100000);
    let _driver

    // initialize the session with local appium server
    before(async function(){
        _driver=await remote(localDeviceAndroid);
    })

    testData["add"].forEach((data)=>{
        it(`Verify Addition of two numbers; ${data.val1} + ${data.val2}`,async function(){

            // Allocate
            const val1El = await _driver.$(CalculatorHomePage.digitEl(data.val1));
            const val2El = await _driver.$(CalculatorHomePage.digitEl(data.val2));
            const addBtnEl = await _driver.$(CalculatorHomePage.logicButtonEl("add"));
            const resultEl = await _driver.$(CalculatorHomePage.resultScreenEl);

            // Act
            const addResult = await CalculatorHomePage.add(val1El,val2El,addBtnEl,resultEl);

            // Assert
            assert.equal(addResult,data.result,data.message)
        })
    })

    // Quit the session with local server
    after(async function(){
        await _driver.deleteSession();
    })
})