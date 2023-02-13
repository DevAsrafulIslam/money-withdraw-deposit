// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // setp-2: get the deposit amount from the deposit input field

    // for input field use .value to the value indide the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the current total amount
    // for non-input (element other then input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositeTotalString = depositTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    // step-4: add numbers to set the otal deposit
    const currentDepositTotal = previousDepositeTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balanceTotal');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal; 

    // step-7: clear the deposit field
    depositField.value = '';
})