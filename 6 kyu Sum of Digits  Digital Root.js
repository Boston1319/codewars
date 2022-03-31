function digital_root(n) {
  let str;
  let n1=''+n;
  
  function m(n) {
    let arr=n.split('');
    str = ''+arr.reduce((sum,current)=>sum+ +current,0);
    if (str.length>1) {
      m(str);
    }
  }
  m(n1);
 return +str;
}