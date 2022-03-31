function snail(array) {
  let n = array.length;
  let arr=[];
  if (array[0].length==0) {
    return arr;
  }
  function zmei (x,y,n) {
    let a = x;
    let b = y;
    while (b<n) {
      arr.push(array[x][b]);
        
      b++;
    }
    b--;
    while (a<n-1) {
      a++;
      arr.push(array[a][b]);
        
    }
    while (b>y) {
      b--;
      arr.push(array[a][b]);
        
    }
    while (a>x+1) {
      a--;
      arr.push(array[a][y]);
        
    }
    if (n>=3) {
      zmei(x+1,y+1,n-1);
    }
  }
  zmei(0,0,n);
   return arr; 
}