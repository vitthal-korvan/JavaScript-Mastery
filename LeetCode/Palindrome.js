/*


9. Palindrome Number

Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 
*/

let x = 121;
let rem,
  num = x,
  mul = 0;

  while(num>0){
      rem=num%10;
      mul=mul*10+rem;
      num=Math.floor(num/10); //It is very IMP in JS because it take numerical value
  }
  if(mul===x)
      console.log(true);
  else
      console.log(false);