
// Page Modal: Calculator Home Page containing all the elements as properties and a logic function for addition
const CalculatorHomePage={
        digitEl:(digit)=>{ return "id=com.android.calculator2:id/digit_"+digit},
        resultScreenEl: "id=com.android.calculator2:id/result",
        formulaScreenEl: "id=com.android.calculator2:id/formula",
        logicButtonEl:(btn)=>{
            if(!["add","sub","mul","div"].includes(btn)) return "Invalid Logic Button";
            return "id=com.android.calculator2:id/op_"+btn;
        },
        decimalEl:"id=com.android.calculator2:id/dec_point",
        delButtonEl:"id=com.android.calculator2:id/del",
        equalsEl:"id=com.android.calculator2:id/eq",
        add:async (val1El, val2El, addBtnEl,formulaEl)=>{
            await val1El.click()
            await addBtnEl.click();
            await val2El.click()
            const result = await formulaEl.getText();
            return result;
        }
}

export {CalculatorHomePage}