Khushpreet Kaur
c0886593
26july


function calculate(num1, num2, operator) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if(num2 != 0) {
          return num1 / num2;
        } else {
          return 'Error: Division by zero is not allowed.';
        }
      default:
        return 'Error: Unknown operator.';
    }
  }
