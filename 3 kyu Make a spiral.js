function spiralize (n) {
  console.log(n);
  let arr =[];
  for (let i=0;i<n;i++){
      arr[i]=[];
    for (let j=0;j<n;j++) {
      arr[i][j]=0;
    }
  }
  
 
  function spiral(a,b) {
    for (let i=a;i<a+b;i++) {
      arr[a][i]=1;
      arr[i][a+b-1]=1;
    }
    for (let i=a+b-1;i>=a;i--) {
      arr[a+b-1][i]=1;
    }
    for (let i=a+b-1;i>a+1;i--) {
      arr[i][a]=1;
    }
    if (b!=4) {
      arr[a+2][a+1]=1;
    }
    
    if (b==5) {
      arr[a+2][a+2]=1;
      return;
    } else if (b==6) {
      arr[a+2][a+2]=1;
      arr[a+2][a+3]=1;
      arr[a+3][a+3]=1;
      return;
    } else if (b==4) {
      return;
    } else if (b==7) {
        arr[a+2][a+2]=1;
        arr[a+2][a+3]=1;
        arr[a+2][a+4]=1;
        arr[a+4][a+2]=1;
        arr[a+4][a+3]=1;
        arr[a+4][a+4]=1;
        arr[a+3][a+4]=1;
        return;
    }
    spiral (a+2,b-4);
  }
  spiral(0,n);
  
  
    return arr;
}