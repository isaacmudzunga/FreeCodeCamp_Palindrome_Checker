function checkCashRegister(price, cash, cid) {
    // Currency unit values in cents
    const currencyUnit = {
      "PENNY": 1,
      "NICKEL": 5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000
    };
  
    // Calculating the change to be given
    let changeDue = (cash * 100) - (price * 100);
  
    // Calculating the total amount of cash in the register (in cents)
    const totalCashInDrawer = cid.reduce((acc, [currency, amount]) => acc + (amount * 100), 0);
  
    // Checking if the cash-in-drawer has enough money to give as change
    if (totalCashInDrawer < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Checking if the cash-in-drawer has exactly the same amount as the change due
    if (totalCashInDrawer === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    // Calculating the change to be returned (in cents) and create an array to store the change
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const [currency, amount] = cid[i];
      const valueInCents = currencyUnit[currency];
      let availableAmount = (amount * 100);
      let returnedAmount = 0;
  
      while (changeDue >= valueInCents && availableAmount > 0) {
        changeDue -= valueInCents;
        availableAmount -= valueInCents;
        returnedAmount += valueInCents;
      }
  
      if (returnedAmount > 0) {
        change.push([currency, returnedAmount / 100]);
      }
    }
  
    // If we can't return exact change
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change };
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);