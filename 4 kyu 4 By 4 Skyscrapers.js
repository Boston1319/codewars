function solvePuzzle (clues) {
  let res=[];   
  function enumiration (arr,a) {
      a= a|| [];
      let result=[];
      let version;
      let b;
      if (arr.length===1) return arr;
          for (let i=0;i<arr.length;i++) {
              if (arr.length===2) {
                  result.push(a.concat(arr[i],arr[(i+1)%2])); 
              } else {
                   version=arr.slice();
                   b=version.splice(i,1);
                   result = result.concat(enumiration(version,a.concat(b)));
               }
          }
          return result;
  }
  let variants = enumiration([1,2,3,4]);
  
  function clueValidator(arr,a,b) {
      let set = new Set(arr);
      if (set.size!=arr.length) return false;
      if ((a===0) && (b===0)) return true;
      let n=1;
      let max = arr[0];
      for (let i=1;i<arr.length;i++) {
          if (arr[i]>max) {
              max=arr[i];
              n++;
          }
      }
      if ((b===0) && (a===n)) return true;
      max = arr[arr.length-1];
      let m =1;
      for (let i=arr.length-2;i>-1;i--) {
          if (arr[i]>max) {
              max=arr[i];
              m++;
          }
      }
      if ((a===0) && (b===m)) return true;
      if ((b===m) && (a===n)) return true;

  }
  let arr=[];
   for (let i=0;i<variants.length;i++) {
       if (clueValidator(variants[i],clues[15],clues[4])) {
         res[0]= variants[i];
           
          for (let i=0;i<variants.length;i++) {
             if (clueValidator(variants[i],clues[14],clues[5])) {
                 res[1]= variants[i];
                 
                 for(let i=0;i<variants.length;i++) {
                    if (clueValidator(variants[i],clues[13],clues[6])) {
                      res[2]= variants[i];
                        
                      for(let i=0;i<variants.length;i++) {
                          if (clueValidator(variants[i],clues[12],clues[7])) {
                              res[3]= variants[i];
                              
                              for (let i=0;i<4;i++) {
                                  arr[i]=res[i][0];
                              }
                              if (clueValidator(arr,clues[0],clues[11])) {
                                 for (let i=0;i<4;i++) {
                                  arr[i]=res[i][1];
                                  }
                                  if (clueValidator(arr,clues[1],clues[10])) {
                                      for (let i=0;i<4;i++) {
                                      arr[i]=res[i][2];
                                      }
                                      if (clueValidator(arr,clues[2],clues[9])) {
                                          for (let i=0;i<4;i++) {
                                          arr[i]=res[i][3];
                                          }
                                          if (clueValidator(arr,clues[3],clues[8])) {
                                              return res;
                                          }
                                      } 
                                  }
                              }
                          }
                      }
                  }
              }
            }

          }
       }
   }
}