function validSolution(board){
  let arr=[];
  let examp=[1,2,3,4,5,6,7,8,9];
  for(let i=0;i<9;i++) {
    for(let j=0;j<9;j++) {
      arr.push(board[i][j]);
    }
    arr.sort((a,b)=>a-b);
    for (let i=0;i<9;i++) {
     if (arr[i]!=examp[i]) return false;
    }
    arr=[];
  }
  
  for(let i=0;i<9;i++) {
    for(let j=0;j<9;j++) {
      arr.push(board[j][i]);
    }
    arr.sort((a,b)=>a-b);
    for (let i=0;i<9;i++) {
     if (arr[i]!=examp[i]) return false;
    }
    arr=[];
  }
 
  function blocks (a,b) {
  for (let i = a;i<a+3;i++){
    for(let j=b;j<b+3;j++) {
      arr.push(board[i][j]);
    }
  }
  arr.sort((a,b)=>a-b);
    for (let i=0;i<9;i++) {
     if (arr[i]!=examp[i]) return false;
    }
    arr=[];
  }
  for (let i=0;i<9;i+=3) {
    for (let j=0;j<9;j+=3) {
       if(blocks(i,j)===false) return false;
      }
  }
  return true;
}