decodeMorse = function(morseCode){
  return (morseCode.trim().split('   ').map(item=>(
    item.trim().split(' ').map(i=> {i.trim(); return MORSE_CODE[i]})
                   .join(''))).join(' '))         
}