let balance = 1000;
  
const bankingApp = function(input = prompt('Enter: W to withdraw, D to deposit, B to view balance, Q to quit')) {
  
  switch (input) {

    case 'Q':
      alert('Your banking session has ended');
      break;
      
    case 'B':0
      alert('Your balance is: $' + balance);
      bankingApp();
      break;

      case 'W':
        withdrawAmt = prompt("Enter withdrawal amount");

        if (balance - Number(withdrawAmt) < 0) {
          alert('Insufficient funds. Withdrawal of more than $' + balance + ' not permitted.');
          bankingApp();
        } 
          if (balance - Number(withdrawAmt) < 300) {
            lowBalance = prompt('Your balance will be less than $300. Do you want to continue: Enter Y for Yes or N for No'); {

            switch (lowBalance) {
              case 'Y':
                balance = balance - Number(withdrawAmt);
                alert('Your balance is: $' + balance);
                bankingApp();
                break;

              case 'N':
                bankingApp();
            }
          }
        } else {   
          if (balance - Number(withdrawAmt) >= 0) {
            balance = balance - Number(withdrawAmt);
            alert('Your balance is $' + balance);
            bankingApp();
          }
        }
        break;
    
    case 'D':
      depositAmt = prompt("Enter deposit amount");
      
      if (depositAmt >= 50000) {
        alert('Deposits of more than $50,000 not permitted.');
        bankingApp();
      } else {
        if (depositAmt < 50000) {
          balance = balance + Number(depositAmt);
          alert('Your balance is $' + balance);
          bankingApp();
        }
      }
      break;
  }
  return balance;
}