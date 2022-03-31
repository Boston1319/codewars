function solution(list){
  let str='';
  let n=0;
  for(let i=0;i<list.length;i++) {
    
    if (list[i]+1===list[i+1]) {
      n++;
    } else if (n>=2) {
      str+=list[i-n]+'-'+list[i]+',';
      n=0;
    } else if (n==1) {
      str+=list[i-n]+','+list[i]+',';
      n=0;
    } else {
      str+=list[i]+',';
    }
  }
  
  return str.slice(0,str.length-1);
}