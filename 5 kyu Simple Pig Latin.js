function pigIt(str){
  str1='';   
  for (let i=0;i<str.length;i++) {
      let k=0;
    if (str[i]=='!'||str[i]=='?'||str[i]=='.'||str[i]==',') {
      str1+=' '+str[i];     
      continue;
    } 
    if (str[i-1]==' '||i==0) {
      if (str[i-1]==' ') {
      str1+=' ';              
        }
      for (let j=i+1;j<str.length;j++) {
        if (str[j]==' ') {
          str1+=`${str[i]}ay`; 
         i+=k+1;
          break;
        }
        if (str[j+1]=='!') {
          str1+=`${str[i]}ay !`;
          return str1;
        }
        str1+=str[j];    
          k++;
        
        if (j==str.length-1) {
           str1+=`${str[i]}ay`;    
           i++;
      }
    }
  }

  }
    return str1;
}