function toCamelCase(str){
  let str1;
  if (str.length==0) {
  return '';
}
  for (let i=0;i<str.length;i++) {
      if (i==0) {
          str1=str[i];
      }else if (str[i]=='-' || str[i]=='_') {
    }else if (str[i-1]=='-' || str[i-1]=='_') {
      str1 += str[i].toUpperCase();
    } else {
      str1 += str[i];
    }
  }
  return str1;
}