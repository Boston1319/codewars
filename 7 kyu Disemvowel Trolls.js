function disemvowel(str) {
  let str1='';
  for (let i=0;i<str.length;i++) {
    if (str[i]!='a'&& str[i]!='e'&& str[i]!='u'&& str[i]!='o'&& str[i]!='i'&& str[i]!='A'&& str[i]!='E'&& str[i]!='U'&& str[i]!='O'&& str[i]!='I') {
      str1+=str[i];
  
    }
  }
  str=str1;
  return str;
}