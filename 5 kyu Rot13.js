function rot13(message){
  let message1='';
  let str = '';
    for (let i =0;i<2;i++) {
      for (let i = 65; i <= 90; i++) {
        str += String.fromCodePoint(i);
      }
    }
  let str1 = '';
    for (let i =0;i<2;i++) {
      for (let i = 97; i <= 122; i++) {
        str1 += String.fromCodePoint(i);
      }
    }
  for (let i=0;i<message.length;i++) {
    if (message.codePointAt(i)>=65 && message.codePointAt(i)<=90) {
      for (let j=0;j<str.length;j++) {
        if (message[i]===str[j]) {
          message1+=str[j+13];
          break;
        }
      }
    } else if (message.codePointAt(i)>=97 && message.codePointAt(i)<=122) {
      for (let j=0;j<str1.length;j++) {
        if (message[i]===str1[j]) {
          message1+=str1[j+13];
          break;
        }
      }
    } else {
      message1+=message[i];
    }
  }
  return message1;
}