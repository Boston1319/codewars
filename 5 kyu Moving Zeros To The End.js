function moveZeros(arr) {
  let m = arr.filter(item=>item!==0);
  let a= arr.filter(item=>item===0);
  
  return [...m,...a];
}