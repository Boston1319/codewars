function pathFinder(maze){
 
  let arr = maze.split('\n').map(item=>item.split(''));
  let n =0;
  
  if (arr[0][0]==='W'||arr[arr.length-1][arr.length-1]==='W') return false;
  function step(a,b) {
    if (n==5000) return 5000;
    if (a==arr.length-1 && b==arr.length-1) return true;
      let k = 0;
      if (arr[a][b+1]==='q'&& (arr[a-1]==undefined || arr[a][b-1]=='.'||arr[a-1][b]=='.')) {
          k=1;
          if (arr[a]!=undefined && arr[a][b-1]!=undefined && arr[a][b-1]!='W') {
     
            if (a<arr.length && b<arr.length && a>=0 && b>0) {
                if (arr[a][b-1]==='q') {
                    arr[a][b]='W';
                } else {
                    arr[a][b]='q'; 
                }
         
                n++;
                if (arr[a][b-1]!='q') {
                let res = step(a,b-1);
                if (res) return true;
                if (res==5000) return 5000;
                }
            }
        } 
        if (arr[a-1]!=undefined && arr[a-1][b]!=undefined && arr[a-1][b]!='W') {
      
            if (a<arr.length && b<arr.length && a>0 && b>=0) {
                n++;
                arr[a][b]='q';
                if (arr[a-1][b]!='q') {
                let res = step(a-1,b);
                if (res) return true;
                if (res==5000) return 5000;
                }
            }
        }
      }
    if (arr[a+1]!=undefined && arr[a+1][b]!=undefined && arr[a+1][b]!='W') {
      
      if (a<arr.length && b<arr.length && a>=0 && b>=0) {
        n++;
        arr[a][b]='q';
        if (arr[a-1] && arr[a-1][b]=='W' && (arr[a][b+1]=='W'||arr[a][b+1]==undefined||arr[a][b+1]=='q') && (arr[a][b-1]=='W'||arr[a][b-1]==undefined)) {
            arr[a][b]='W';
        }
        if (arr[a+1][b]!='q') {
        let res = step(a+1,b);
        if (res) return true;
        if (res==5000) return 5000;
        }
      }
    }
    if (arr[a]!=undefined && arr[a][b+1]!=undefined && arr[a][b+1]!='W') {
      
      if (a<arr.length && b<arr.length && a>=0 && b>=0) {
        n++;
          arr[a][b]='q';
          if ((arr[a][b-1]=='W'||arr[a][b-1]==undefined) && (arr[a+1]==undefined || arr[a+1][b]=='W') && (arr[a-1]==undefined || arr[a-1][b]=='W')) {
            arr[a][b]='W';
         }
          if (arr[a][b+1]!='q') {
          let res = step(a,b+1);
          if (res) return true;
          if (res==5000) return 5000;
          }
      }
    }
    
    
    if (k==0 && arr[a]!=undefined && arr[a][b-1]!=undefined && arr[a][b-1]!='W') {
     
     if (a<arr.length && b<arr.length && a>=0 && b>0) {
         if (arr[a][b-1]==='q') {
         arr[a][b]='W';
         } else {
            arr[a][b]='q'; 
         }
         
       n++;
         if (arr[a][b-1]!='q') {
         let res = step(a,b-1);
         if (res) return true;
         if (res==5000) return 5000;
         }
      }
   }
    if (k==0) {
    arr[a][b]='W';
    }
    
   if (k==0 && arr[a-1]!=undefined && arr[a-1][b]!=undefined && arr[a-1][b]!='W') {
      
      if (a<arr.length && b<arr.length && a>0 && b>=0) {
        n++;
          if (arr[a-1][b]!='q') {
          let res = step(a-1,b);
          if (res) return true;
          if (res==5000) return 5000;
          }
      }
    }
  
  }
  let result;
  do {
     
      for (let i=0;i<arr.length;i++) {
          for(let j=0;j<arr.length;j++) {
              if (arr[i][j]==='q') {
                  arr[i][j]='.';
              }
          }
      }
    n=0;
  result = step(0,0);
      
    } while (n===5000);
  return (result||false);
}