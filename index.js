/* 1) Fibonaci series
function fibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(5)); // 0, 1, 1, 2, 3
console.log(fibonacci(2)); // 0, 1
console.log(fibonacci(10)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 */

/* 2) Factorial of number
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
    console.log(i);
  }
  return result;
}
console.log(factorial(5)); */

/* 3)Sum of natural number
function sumOfNaturalNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}
console.log(sumOfNaturalNum(5));*/

/* 4) Sum of digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(1287)); */

/*5) Count digits
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(countDigits()); */

/*6) Palindrome Number
function palindrome(num) {
  let copyNum = num,
    reverseNum = 0;
  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return num === reverseNum;
}

console.log(palindrome(121)) */

/*7) Fibonaci number
function fibonacci(n) {
  if (n < 2) return n;
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i < n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
}
console.log(fibonacci(53)); */

/*8) Find missing numbers 
function missingNum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return (num.length * (num.length + 1)) / 2 - sum;
}

console.log(missingNum([1, 2, 3, 4, 0]));*/

/*9) Function loop
function number(i) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(i), i * 1000);
  });
}
async function loop() {
  console.log("Start");

  for (let i = 1; i <= 10; i++) {
    const result = await number(i);
    console.log(result);
  }
  console.log("End");
}
loop(); */

/*10) find studendName
const name = ["John", "Honstan", "Main", "Knee", "Max"];
function findName(allName, studentName) {
  for (let i = 0; i < allName.length; i++) {
    if (allName[i] === studentName) {
      console.log(`Here is our student ${i} and ${studentName}`);
    }
  }
}
findName(name, "Knee"); */

/*11) Pushing arr
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastIndex = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastIndex;
  }

  shift() {
    let firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const deleteItem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deleteItem;
  }
}

const newArray = new MyArray();
newArray.push("apple");
newArray.push("Mango");
newArray.push("banana");
newArray.push("pinaple");
newArray.push("orange");
// newArray.pop();

console.log(newArray);
console.log(newArray.deleteByIndex(1)); */

/*12) Reverse a string
function reverse(name) {
  let reverseName = name.split("").reverse().join("");
  console.log(reverseName);
}

reverse("Apple"); */

/*13) Reverse a number
function reverseInt(str) {
  if (str < 2) return str;
  if (isNaN(str)) return console.log("Please enter number");
  const reverseNum = str.toString().split("").reverse("").join("");
  return parseInt(reverseNum) === Math.floor(str);
}
console.log(reverseInt(525));*/

/*14) Capitalize str
function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize("code for interview"));*/

/*15) alter the number
function alterNum(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
alterNum(10);*/

/*16) Find the max price
function maxPrice(price) {
  let minPrice = price[0];
  let maxProfit = 0;
  for (let i = 1; i < price.length; i++) {
    const currentPrice = price[i];
    minPrice = Math.min(minPrice, currentPrice);
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    console.log(maxProfit);
  }
  return maxProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxPrice(prices);
console.log("Max profit is: ", profit);*/

/*17) Array Chunk 
function chunk(arr, size) {
  let chunked = [];
  let index = 0;
  while (index < arr.length) {
    let chunk = arr.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));*/

/*18) Sum of two numbers index
function twoSum(numbs, target) {
  for (let i = 0; i < numbs.length; i++) {
    for (let j = i + 1; j, numbs.length; j++) {
      if (numbs[i] + numbs[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const res = twoSum([5, 4, 3, 2, 1], 4);
console.log(res); */

//** */)Linked Lists

//1)
