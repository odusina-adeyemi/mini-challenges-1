/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// function isValid(str) 
    
// function isValid(str) {
//     let brackets = "[]{}()<>"
//     let stack = []
//     for(let bracket of str) {
//       let bracketsIndex = brackets.indexOf(bracket)
//     }   
//       if (bracketsIndex === -1) || (bracketsIndex % 2 === 0) {
//         stack.push(bracketsIndex + 1) 
//     }
//      else {
//         if(stack.pop() !== bracketsIndex) {
//           return false;
//         }
//       }
     
//     return stack.length === 0 ? "valid" : "invalid";
//     }
  
//   console.log(stack)




// function isValid(str) {
	
// 	// Using ArrayDeque is faster
// 	// than using Stack class
// 	let stack = [];

// 	// Traversing the Expression
// 	for(let i = 0; i < str.length; i++)
// 	{
// 		let x = str[i];

// 		if (x == '(' || x == '[' || x == '{')
// 		{
			
// 			// Push the element in the stack
// 			stack.push(x);
// 			continue;
// 		}

// 		// If current character is not opening
// 		// bracket, then it must be closing.
// 		// So stack cannot be empty at this point.
// 		if (stack.length == 0)
// 			return false;
			
// 		let check;
// 		switch (x){
// 		case ')':
// 			check = stack.pop();
// 			if (check == '{' || check == '[')
// 				return false;
// 			break;

// 		case '}':
// 			check = stack.pop();
// 			if (check == '(' || check == '[')
// 				return false;
// 			break;

// 		case ']':
// 			check = stack.pop();
// 			if (check == '(' || check == '{')
// 				return false;
// 			break;
// 		}
// 	}

// 	// Check Empty Stack
// 	return (stack.length == 0);
// }

// // Driver code
// let str = "([{}])";

// // Function call
// if (isValid(str))
// 	document.write("valid ");
// else
// 	document.write("invalid ");

function isValid(str) {
    let curStr, curStr1, curStr2;
    let result;
    let count = 0;
    let all = ["()", "[]", "{}"]
    const search = (str) => {
      curStr = str.split("()").join("");
      curStr1 = curStr.split("{}").join("");
      curStr2 = curStr1.split("[]").join("");
      return curStr2;
    }
    for (let i = 0; i < str.length; i++){
    result = search(str);
    }
    if (result.length === 0) return "valid";
    if (result.includes("(]") || result.includes("(}") || result.includes("[)") || result.includes("[}") ||  result.includes("{)") || result.includes("{]")) return "invalid";
    if (!all.includes(result[0] + result[result.length - 1])) return "invalid";
    if (result.length > 0) {    for (let i = 0; i < result.length; i++) {
        let bracket = result[i];
        if (bracket === "[" || bracket === "{" || bracket === "(") count++;
        if (bracket === "]" || bracket === "}" || bracket === ")") count--;
    }
     }
    if (count === 0) return "valid";
    return "invalid";
  }
  module.exports = isValid;


module.exports = isValid;
