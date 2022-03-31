var calc = function (expression) {
  
  console.log(expression);
   let exp0=''; 
  for (let i=0;i<expression.length;i++) {
     if (expression[i]!==' ') {
      exp0+=expression[i]
     }
  }
  expression=exp0;
  
  
  function add(a,b) {
    return (a+b);
  }
  function minus(a,b) {
      return (a-b);
  }
  function division(a,b) {
      return (a/b);
  } 
  function multiply(a,b) {
      return (a*b);
  }
    
    function parse (exp) {
        do {
        let pos1 = exp.indexOf('(');
        let pos2;
        
        let innerExp='';
            if (pos1 !== -1) {
                let pos1Count=1;
                let pos2Count=0;
                for(let i=pos1+1;i<exp.length;i++) {
                    if (exp[i]=='(') {
                        pos1Count++;
                    }
                    if (exp[i]==')') {
                        pos2Count++;
                        if (pos1Count==pos2Count) {
                            pos2=i;
                            break;
                        }
                    }  
                }
                innerExp = parse(exp.slice(pos1+1,pos2));
                         let minusCount = 0;
                        if (innerExp[0]=='-') {
                            minusCount++;

                        }
                        if (exp[pos1-1]=='-') {
                            minusCount++;
                        }
                        if (exp[pos1-2]=='-') {
                            minusCount++;
                        }
                        if (minusCount==0 || minusCount==1) {
                            exp = exp.slice(0,pos1)+innerExp+exp.slice(pos2+1);
                        } else if (minusCount==2) {
                            if (innerExp[0]=='-') {
                                if (exp[pos1-2]=='+' || exp[pos1-2]=='/'|| exp[pos1-2]=='*') {
                                    exp=exp.slice(0,pos1-1)+innerExp.slice(1)+exp.slice(pos2+1);  
                                } else {
                                exp=exp.slice(0,pos1-1)+'+'+innerExp.slice(1)+exp.slice(pos2+1);
                                }
                            } else {
                                exp=exp.slice(0,pos1-2)+'+'+innerExp+exp.slice(pos2+1);
                            }
                        } else if (minusCount==3){
                            exp=exp.slice(0,pos1-2)+innerExp+exp.slice(pos2+1);
                        }
            }
      
        } while (exp.indexOf('(')!=-1);
                
        let arrNumbers=[];  
        let arrOperators=[];
        let num='';
        
        for (let i=0;i<exp.length;i++) {
                if (i==0 && exp[i]=='-') {
                    num+='-';
                }
                if (exp[i]=='.' || exp[i]=='0' || exp[i]=='1' || exp[i]=='2' || exp[i]=='3' || exp[i]=='4' || exp[i]=='5' || exp[i]=='6' || exp[i]=='7' || exp[i]=='8' || exp[i]=='9') { 
                    num+=exp[i];
                } else if (i!=0 && (exp[i]=='+' || exp[i]=='*' || exp[i]=='/' || exp[i]=='-')) {
                    if (exp[i]=='-' && exp[i-1]=='-') {
                        arrOperators.push('+');
                        arrNumbers.push(num);
                        num='';
                    } else if (exp[i]=='-' && exp[i+1]!='-' && exp[i-1]!='-' && exp[i+1]!='+' && exp[i-1]!='+' && exp[i+1]!='/' && exp[i-1]!='/' && exp[i+1]!='*' && exp[i-1]!='*') {
                        arrOperators.push('-');
                        arrNumbers.push(num);
                        num='';
                    } else if (exp[i]=='+' || exp[i]=='*' || exp[i]=='/') {
                        arrOperators.push(exp[i]);
                        arrNumbers.push(num);
                        num='';
                        if (exp[i+1]=='-') {
                            num='-';
                        }
                    }
                    
                }
                
        }
        arrNumbers.push(num);
        if (arrOperators.length==0) return (''+arrNumbers[0]);
        while (arrOperators.length>0) {
            let a = arrOperators.findIndex(it=>it=='*');
            let b = arrOperators.findIndex(it=>it=='/');
            if (a==-1 && b==-1) {
                if (arrOperators[arrOperators.length-1]=='+') {
                    let c = add(+arrNumbers[arrNumbers.length-2],+arrNumbers[arrNumbers.length-1]);
                    arrOperators.pop();
                    arrNumbers.pop();
                    arrNumbers.pop();
                    arrNumbers.push(c);
                } else {
                   let c = minus(+arrNumbers[arrNumbers.length-2],+arrNumbers[arrNumbers.length-1]);
                    arrOperators.pop();
                    arrNumbers.pop();
                    arrNumbers.pop();
                    arrNumbers.push(c); 
                }
            } else if (a!=-1 && (a<b || b==-1)) {
                let c = multiply(+arrNumbers[a],+arrNumbers[a+1]);
                arrOperators.splice(a,1);
                arrNumbers[a+1]=c;
                arrNumbers.splice(a,1);
                
            } else if (b!=-1) {
                let c = division(+arrNumbers[b],+arrNumbers[b+1]);
                arrOperators.splice(b,1);
                arrNumbers[b+1]=c;
                arrNumbers.splice(b,1);
            }
        }
        return (''+arrNumbers[0]);
              
    }
    
    return (+parse(expression));    
    };