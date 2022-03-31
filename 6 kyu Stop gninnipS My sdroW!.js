function spinWords(string){
  let a = string.split(' ');
   let b =  a.map(item=>{
    if (item.length>=5) {
      let c='';
      for(let i=item.length-1;i>-1;i--) {
        c+=item[i];
      }
    item=c;
    }
    return item;
  });
  return b.join(' ');
}