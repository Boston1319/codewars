function nextSmaller(n) {
  console.log(n);
  n+='';
  let last=0;
  for (let i=0;i<n.length-1;i++) {
    if (n[i]<=n[i+1]) {
      last++;
    } 
    if (last==n.length-1) return -1;
  }
    if (last==n.length-2 && n[0]>n[1] && n.length>7) {
      let next=n[0];
      let arr = n.slice(1).split('');
      arr.sort();
      for (let i=0;i<n.length-1;i++) {
        if (arr[i]<next) {
          arr.unshift(arr[i]);
          arr[i+1]=next;
          arr=+arr.join('');
          arr+='';
          if (arr.length<n.length) return -1;
          return +arr;
        }
      }
    }
  let m=n;
  n=(''+n).split('');
  let min=0;
  let newStr=0;
    let second;

  function enumiration (arr,a) {
      a= a|| [];
      
      let version;
      let b;
      if (arr.length===1) return arr;
      for (let i=0;i<arr.length;i++) {
          if (arr.length===2) {
            let c = (a.concat(arr[i],arr[(i+1)%2])).join('');
              
              if (second===1) {
                  if (c<m) {
                      if (min==0) {
                          min=c;
                      } else if (c>min) {
                          min=c;
                      }
                  }
              }else if (c<m ) {
                    min=c;
                return 1;
                }      
          } else {
              version=arr.slice();
              b=version.splice(i,1);
              let count = enumiration(version,a.concat(b));
              if (count===1) return 1;
          }
      }    
  }
    enumiration(n);
    if (min===0) return -1;
    let str = m.toString();
    for (let i=0;i<min.length;i++) {
        if (min[i]!=str[i]) {
            newStr=i;
            break;
        }
    }
    let str1=str.slice(newStr);
    second=1;
    m=(''+m).slice(newStr);
    min=0;
    enumiration(str1.split(''));
    min=str.slice(0,newStr)+min;
    if (min[0]==0) return -1;
    return +min;

}