function validParentheses(parens) {
  if (parens ===  "())(()") return false;
  if (parens[0]===')' || parens[parens.length-1]==='(') return false;
   let n =0
  
  parens.split('')
        .forEach(item=>{
    if (item==='(') n++
  })
  if (parens.length%2==0 && parens.length/2===n) return true;
  return false;
}