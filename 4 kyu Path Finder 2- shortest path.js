function pathFinder(maze){
  
  let arrMain = maze.split('\n').map(item=>item.split(''));
  if (arrMain.length==1 && arrMain[0][0]=='.') return 0;
    console.log(arrMain);
   let n=arrMain.length-1; 
    let count = 0;
    let superArr=[];
    superArr.push(arrMain);
    let aFirst =[];
    aFirst[0]=0;
    let bFirst =[];
    bFirst[0]=0;
    function BFS (arr,a,b) {
        
        count++;
        let newArr=[];
        let newA=[];
        let newB=[];
        for (let i=0;i<arr.length;i++) {
            for (let j=0;j<a.length;j++) {
                arr[i][a[j]][b[j]]='q';
            }
        }
        for (let i=0;i<arr.length;i++) {
            
           if(arr[i][a[i]+1] && arr[i][a[i]+1][b[i]]!='W' && arr[i][a[i]+1][b[i]]!='q') {
               if (a[i]+1==n && b[i]==n) {
                   return true;
               }
               let miniArr=[];
               for (let j=0;j<arr[i].length;j++) {
                   miniArr[j]=arr[i][j].slice()
               }
               for (let j=0;j<arr.length;j++) {
                 arr[j][a[i]+1][b[i]]='q';
               }
               newArr.push(miniArr);
               newA.push(a[i]+1);
               newB.push(b[i]);
           }
            if(arr[i][a[i]][b[i]+1] && arr[i][a[i]][b[i]+1]!='W' && arr[i][a[i]][b[i]+1]!='q') {
               if (a[i]==n && b[i]+1==n) {
                   return true;
               }
               let miniArr=[];
               for (let j=0;j<arr[i].length;j++) {
                   miniArr[j]=arr[i][j].slice()
               }
               for (let j=0;j<arr.length;j++) {
                arr[j][a[i]][b[i]+1]='q';
               }
               newArr.push(miniArr);
               newA.push(a[i]);
               newB.push(b[i]+1);
           }
            if(arr[i][a[i]][b[i]-1] && arr[i][a[i]][b[i]-1]!='W' && arr[i][a[i]][b[i]-1]!='q') {
               let miniArr=[];
               for (let j=0;j<arr[i].length;j++) {
                   miniArr[j]=arr[i][j].slice()
               }
               for (let j=0;j<arr.length;j++) {
                arr[j][a[i]][b[i]-1]='q';
               }
               newArr.push(miniArr);
               newA.push(a[i]);
               newB.push(b[i]-1);
           }
            if(arr[i][a[i]-1] && arr[i][a[i]-1][b[i]]!='W' && arr[i][a[i]-1][b[i]]!='q') {
               let miniArr=[];
               for (let j=0;j<arr[i].length;j++) {
                   miniArr[j]=arr[i][j].slice()
               }
                for (let j=0;j<arr.length;j++) {
                    arr[j][a[i]-1][b[i]]='q';
               }
               newArr.push(miniArr);
               newA.push(a[i]-1);
               newB.push(b[i]);
           }
        }
        if (newArr.length!=0) {
         let next = BFS(newArr,newA,newB);
         if (next) return true;
        }
    }
        
        if (BFS(superArr,aFirst,bFirst)) {
            return count;
        } else {
            return false;
        }
}