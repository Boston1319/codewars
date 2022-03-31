var Sudoku = function(board) 
{
  //   Private methods
  // -------------------------



  //   Public methods
  // -------------------------
  return {
    isValid: function() {
     
      
  let n=board.length;
     if (n==1) {
       if(board[0].length!=1) return false;
       if(board[0][0]===1) return true;
       return false;
       }
  let arr=[];
  
  let examp=[];
  for (let i=1;i<board.length+1;i++) {
    examp.push(i);
  }
  
  for(let i=0;i<n;i++) {
    for(let j=0;j<n;j++) {
      arr.push(board[i][j]);
    }
    arr.sort((a,b)=>a-b);
    for (let i=0;i<n;i++) {
     if (arr[i]!==examp[i]) return false;
    }
    arr=[];
  }
  
  for(let i=0;i<n;i++) {
    for(let j=0;j<n;j++) {
      arr.push(board[j][i]);
    }
    arr.sort((a,b)=>a-b);
    for (let i=0;i<n;i++) {
     if (arr[i]!==examp[i]) return false;
    }
    arr=[];
  }
 
  function blocks (a,b) {
  for (let i = a;i<a+(n**(1/2));i++){
    for(let j=b;j<b+(n**(1/2));j++) {
      arr.push(board[i][j]);
    }
  }
  arr.sort((a,b)=>a-b);
    for (let i=0;i<n;i++) {
     if (arr[i]!==examp[i]) return false;
    }
    arr=[];
  }
  for (let i=0;i<n;i+=(n**(1/2))) {
    for (let j=0;j<n;j+=(n**(1/2))) {
       if(blocks(i,j)===false) return false;
      }
  }
   
  return true;
    }
  };
};