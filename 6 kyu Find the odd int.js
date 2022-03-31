function findOdd(A) {
  for (let i=0;i<A.length;i++) {
     let count = 0;
    for (let j=0;j<A.length;j++) {
     
      if (A[i]==A[j]){
        count++;
      }  
    }
    if (count%2==1) {
      return A[i];
    }
  }
  return 0;
}