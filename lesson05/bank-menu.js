
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
        balance = balance - Number(withdrawAmt);
        alert('Your balance is: $' + balance);
        bankingApp();
        break;
    
      case 'D':
        depositAmt = prompt("Enter deposit amount");
        balance = balance + Number(depositAmt);
        alert('Your balance is: $' + balance);
        bankingApp();
        break;
    }
    return balance;
}
