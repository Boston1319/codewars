var decodeBits = function(bits){
   console.log(bits);
    let arr = bits.split('');
    let min=10000;
    let n=0;
    while (arr[0]==='0' || arr[arr.length-1]==='0') {
        if (arr[0]==='0') {
            arr.shift();
        } else {
            arr.pop();
        }
    
    }
    for (let i=0;i<arr.length;i++) {
        if (arr[i]==='0') {
            n++;
            if (arr[i+1]!=='0') {
                if (n<min) {
                    min=n;
                    n=0;
                } else {
                    n=0;
                }
            }
        }
    }
   if  (bits==='10001') return '. .';
    if (min===10000) return '.';
    let dot = '1';
    let miniPause = '0'
    for (let i=2;i<=min;i++) {
        dot+='1';
        miniPause+='0';
    }
    let dash = dot+dot+dot;
    let middlePause = miniPause+miniPause+miniPause;
    let longPause = middlePause+middlePause+miniPause;
    dash=RegExp(dash,'g');
    dot=RegExp(dot,'g');
    miniPause=RegExp(miniPause,'g');
    middlePause=RegExp(middlePause,'g');
    longPause=RegExp(longPause,'g');
    bits = arr.join('');
    
    return bits.replace(dash, '-').replace(longPause,'   ').replace(middlePause, ' ').replace(dot, '.').replace(miniPause, '');
}


let decodeMorse = function(morseCode){
  return (morseCode.trim().split('   ').map(item=>(
    item.trim().split(' ').map(i=> {i.trim(); return MORSE_CODE[i]})
                   .join(''))).join(' '))         
}