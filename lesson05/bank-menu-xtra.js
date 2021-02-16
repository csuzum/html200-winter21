
  let balance = 1000;
  
  const bankingApp = function(input = prompt('Enter: W to withdraw, D to deposit, B to view balance, Q to quit')) {
    
    switch (input) {

      case 'Q':
        alert('Your banking session has ended');
        break;
        
      case 'B':
        alert('Your balance is: $' + balance);
        bankingApp();
        break;

        case 'W':
          withdrawAmt = prompt("Enter withdrawal amount");
  
          if (balance - Number(withdrawAmt) < 0) {
            alert('Insufficient funds. Withdrawal of more than $' + balance + ' not permitted.');
            bankingApp();
          } else { 
            if (balance - Number(withdrawAmt) >= 0) {
              balance = balance - Number(withdrawAmt);
              alert('Your balance is $' + balance);
            }
          }
          bankingApp();
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
          }
        }
        break;
    }
    return balance;
}


