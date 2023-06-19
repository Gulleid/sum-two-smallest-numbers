// Good Luck 💪🏾
function sumTwo(numbers) {
   
    numbers.sort(function(a, b) {
      return a - b;
    });
  
    return numbers[0] + numbers[1];
  }
  const numbers = [12, 5, 24, 55, 18];
  const sum = sumTwo(numbers);
  console.log(sum);