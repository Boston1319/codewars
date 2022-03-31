function solution(input, markers) {
    let arr = input.split('');
    let q = false;
    let index1;
    let index2;
    for (let i=0;i<markers.length;i++) {
        if (arr.includes(markers[i],0)) {
           index1=arr.indexOf(markers[i],0);
           q=true;
            break;
        }
    }
    function whitespace (a) {
        if (arr[a-1]===" ") {
            index1=a-1;
            whitespace(index1-1);
        } 
        
    }
    
    while (q) {
        whitespace(index1);
        index2=arr.indexOf('\n',index1);
        if (index2!=-1) {
        arr.splice(index1,index2-index1);
        } else {
            arr.splice(index1,arr.length-index1);
        }
        q=false;
         for (let i=0;i<markers.length;i++) {
            if (arr.includes(markers[i],0)) {
                index1=arr.indexOf(markers[i],0);
                q=true;
                break;
            }
         }
    }
    return arr.join('');
}