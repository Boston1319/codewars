function permutations(n) {
    if (n.length===1) return [n];
    n=n.split('');
  
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
    let res = enumiration(n);
    res=res.map(item=>item.join(''));
    let set = new Set;
    for (let i=0;i<res.length;i++) {
      set.add(res[i]);
    }
    let arr1=[];
    for(let value of set) {
      arr1.push(value);
    }
    return arr1;  
}