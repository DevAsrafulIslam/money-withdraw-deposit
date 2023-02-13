/*
1.ass event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
2-5. aslo make sure to convert the input into a number by using parseFloat
3. get previous withdraw total

4.calculate total withdraw amount
4-5.set total withdraw amount
5. get the prevous balance total
6. calculate new balance otoal
6-5. set the new balacne total
7.clear the input field
*/





document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdraw-field');
    const newDepositAmountString = withdrowField.value;
    const newWithdrawAmount = parseFloat(newDepositAmountString);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step-7:
    withdrowField.value = '';
})