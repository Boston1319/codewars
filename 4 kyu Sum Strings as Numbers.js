function sumStrings(a, b) {
  
  let arr1=a.split('');
   arr1 = arr1.map(item=>+item);
   arr1.reverse();
  let arr2=b.split('');
    arr2 = arr2.map(item=>+item);
  arr2.reverse();
  let arr =[];
  if (arr1.length>=arr2.length) {
    for (let i=0;i<arr1.length+1;i++) {
      arr[i]=0;
    }
  } else {
    for (let i=0;i<arr2.length+1;i++) {
      arr[i]=0;
    }
  }
  for (let i=0;i<arr.length;i++) {
      if (arr1[i]!==undefined && arr2[i]!==undefined) {
      arr[i]+=arr1[i]+arr2[i];
      if (arr[i]>=10) {
        arr[i]=arr[i]-10;
        arr[i+1]=1;
      }
    } else if (arr1[i]!==undefined) {
      arr[i]+=arr1[i];
      if (arr[i]>=10) {
        arr[i]=arr[i]-10;
        arr[i+1]=1;
      }
    } else if (arr2[i]!==undefined) {
      arr[i]+=arr2[i];
      if (arr[i]>=10) {
        arr[i]=arr[i]-10;
        arr[i+1]=1;
      }
    }

  }
 arr.reverse();
  if (arr[0]===0) arr.shift();
  
 arr=arr.map(item=>''+item);
  while (arr[0]==0) {
        arr.shift();
    }
  return arr.join('');
  }