function squareDigits(num){  
  let a = num.toString();
   a = a.split('');
   a = a.map((item)=>item**2)
  return (+a.join(''));
}