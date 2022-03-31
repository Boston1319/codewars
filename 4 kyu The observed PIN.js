function getPINs(observed) {
 
  let arr1 = observed.split('');
  arr1 = arr1.map(item=>{
    if (item==='1') {
      return [1,2,4];
    } else if (item==='2') {
      return [1,2,3,5];
    } else if (item==='3') {
      return [2,3,6];
    } else if (item==='4') {
      return [1,4,7,5];
    } else if (item==='5') {
      return [2,5,8,4,6];
    } else if (item==='6') {
      return [3,6,9,5];
    } else if (item==='7') {
      return [4,7,8];
    } else if (item==='8') {
      return [5,8,0,7,9];
    } else if (item==='9') {
      return [6,8,9]
    } else if (item==='0') {
      return [0,8]
    }
  })
 

 let arrFinal = [];
 
let num=0;
let n=0;
let key=true;
 function search (arr) {
     for (let i=0;i<arr.length;i++){
         if (n!=0 && arrFinal[num-1]!=undefined && arrFinal[num-1].length==arr1.length && arrFinal[num]===undefined) {
             arrFinal[num]=arrFinal[num-1].slice(0,n);
         }
         if (arrFinal[num]!=undefined) {
         arrFinal[num]+=''+arr[i];
         } else {
             arrFinal[num]=''+arr[i];
         }
         
         
         if (arrFinal[num].length<arr1.length) {
             n++;
             search(arr1[n]);
             n--;
             key=true;
             continue;
         }
         if (arrFinal[num].length===arr1.length) {
             if (key) {
             for(let i =1;i<arr.length;i++) {
                 arrFinal[num+i]=arrFinal[num].slice(0,arrFinal[num].length-1);
             }
             num++;
             key=false;
             } else {
                 num++;
             }
         }
     }
 }
  
    search(arr1[0]);
  
    return(arrFinal);
    
}