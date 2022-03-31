function sudoku(puzzle) {
    
    let superPuzzle = [];
    for(let i=0;i<9;i++) {
      superPuzzle[i]=puzzle[i].slice();
    }
    
    function enumiration (arr,a) {
        a= a|| [];
        let result=[];
        let version;
        let b;
        if (arr.length===1) return arr;
            for (let i=0;i<arr.length;i++) {
                if (arr.length===2) {
                    result.push(a.concat(arr[i],arr[(i+1)%2])); 
                } else {
                     version=arr.slice();
                     b=version.splice(i,1);
                     result = result.concat(enumiration(version,a.concat(b)));
                 }
            }
            return result;
    }  
    
    let perfect = [1,2,3,4,5,6,7,8,9];
      
    function createStringVariants (n) {

        function createArr (arr) {
            let newArr =[];
            newArr = perfect.filter(item=>{
                let n =0;
                for (let i=0;i<9;i++) {
                    if (item==arr[i]) {
                        n++;
                    }
                }
                if (n === 0) return item;
            });
            return newArr;
        }

        let arr = createArr(superPuzzle[n]);
        //console.log(arr);
        arr=enumiration(arr);
         //console.log(arr);
        let posArr=[];

        superPuzzle[n].forEach((item,index)=>{
            if (item===0) {
                posArr.push(index);
            }
        });

        for (let i=0;i<9;i++) {
            if (i===n) continue;
            arr = arr.filter(item=>{
                let n =0;
                for (let j=0;j<item.length;j++) {

                    if (puzzle[i][posArr[j]]===item[j]) {
                        n++;
                    }
                }
                if (n===0) return item;
            })
        }

        if ((n===0) || (n===1) || (n===2)) {
            let arrMini1=[];
            let arrMini2=[];
            let arrMini3=[];
            if (n===0) {
                arrMini1 = [puzzle[0][0],puzzle[0][1],puzzle[0][2],
                            puzzle[1][0],puzzle[1][1],puzzle[1][2],
                            puzzle[2][0],puzzle[2][1],puzzle[2][2]];
                arrMini2 = [puzzle[0][3],puzzle[0][4],puzzle[0][5],
                            puzzle[1][3],puzzle[1][4],puzzle[1][5],
                            puzzle[2][3],puzzle[2][4],puzzle[2][5]];
                arrMini3 = [puzzle[0][6],puzzle[0][7],puzzle[0][8],
                            puzzle[1][6],puzzle[1][7],puzzle[1][8],
                            puzzle[2][6],puzzle[2][7],puzzle[2][8]];    
            } else if (n===1) {
                arrMini1 = [puzzle[0][0],puzzle[0][1],puzzle[0][2],
                            superPuzzle[1][0],superPuzzle[1][1],superPuzzle[1][2],
                            superPuzzle[2][0],superPuzzle[2][1],superPuzzle[2][2]];
                arrMini2 = [puzzle[0][3],puzzle[0][4],puzzle[0][5],
                            superPuzzle[1][3],superPuzzle[1][4],superPuzzle[1][5],
                            superPuzzle[2][3],superPuzzle[2][4],superPuzzle[2][5]];
                arrMini3 = [puzzle[0][6],puzzle[0][7],puzzle[0][8],
                            superPuzzle[1][6],superPuzzle[1][7],superPuzzle[1][8],
                            superPuzzle[2][6],superPuzzle[2][7],superPuzzle[2][8]];
            } else if (n===2) {
                arrMini1 = [puzzle[0][0],puzzle[0][1],puzzle[0][2],
                            puzzle[1][0],puzzle[1][1],puzzle[1][2],
                            superPuzzle[2][0],superPuzzle[2][1],superPuzzle[2][2]];
                arrMini2 = [puzzle[0][3],puzzle[0][4],puzzle[0][5],
                            puzzle[1][3],puzzle[1][4],puzzle[1][5],
                            superPuzzle[2][3],superPuzzle[2][4],superPuzzle[2][5]];
                arrMini3 = [puzzle[0][6],puzzle[0][7],puzzle[0][8],
                            puzzle[1][6],puzzle[1][7],puzzle[1][8],
                            superPuzzle[2][6],superPuzzle[2][7],superPuzzle[2][8]];

            }

            arr=arr.filter(item=>{
                let n=0;
                for (let i=0;i<item.length;i++) {
                    if (posArr[i]===0 || posArr[i]===1 ||posArr[i]===2) {
                        for(let j=0;j<9;j++) {
                            if (arrMini1[j]===item[i]) {
                                n++;
                            }
                        }
                    } else if (posArr[i]===3 || posArr[i]===4 ||posArr[i]===5) {
                        for(let j=0;j<9;j++) {
                            if (arrMini2[j]===item[i]) {
                                n++;
                            }
                        }
                    } else if (posArr[i]===6 || posArr[i]===7 ||posArr[i]===8) {
                        for(let j=0;j<9;j++) {
                            if (arrMini3[j]===item[i]) {
                                n++;
                            }
                        }
                    }
                }
                if (n===0) return item;
            });
        } else if ((n===3) || (n===4) || (n===5)) {
            let arrMini1 = [];
            let arrMini2 = [];
            let arrMini3 = [];
            if (n === 3) {
                arrMini1 = [superPuzzle[3][0],superPuzzle[3][1],superPuzzle[3][2],
                            superPuzzle[4][0],superPuzzle[4][1],superPuzzle[4][2],
                            superPuzzle[5][0],superPuzzle[5][1],superPuzzle[5][2]];
                arrMini2 = [superPuzzle[3][3],superPuzzle[3][4],superPuzzle[3][5],
                            superPuzzle[4][3],superPuzzle[4][4],superPuzzle[4][5],
                            superPuzzle[5][3],superPuzzle[5][4],superPuzzle[5][5]];
                arrMini3 = [superPuzzle[3][6],superPuzzle[3][7],superPuzzle[3][8],
                            superPuzzle[4][6],superPuzzle[4][7],superPuzzle[4][8],
                            superPuzzle[5][6],superPuzzle[5][7],superPuzzle[5][8]];
            } else if (n === 4) {
                arrMini1 = [puzzle[3][0],puzzle[3][1],puzzle[3][2],
                            superPuzzle[4][0],superPuzzle[4][1],superPuzzle[4][2],
                            superPuzzle[5][0],superPuzzle[5][1],superPuzzle[5][2]];
                arrMini2 = [puzzle[3][3],puzzle[3][4],puzzle[3][5],
                            superPuzzle[4][3],superPuzzle[4][4],superPuzzle[4][5],
                            superPuzzle[5][3],superPuzzle[5][4],superPuzzle[5][5]];
                arrMini3 = [puzzle[3][6],puzzle[3][7],puzzle[3][8],
                            superPuzzle[4][6],superPuzzle[4][7],superPuzzle[4][8],
                            superPuzzle[5][6],superPuzzle[5][7],superPuzzle[5][8]];
            } else if (n === 5) {
                arrMini1 = [puzzle[3][0],puzzle[3][1],puzzle[3][2],
                            puzzle[4][0],puzzle[4][1],puzzle[4][2],
                            superPuzzle[5][0],superPuzzle[5][1],superPuzzle[5][2]];
                arrMini2 = [puzzle[3][3],puzzle[3][4],puzzle[3][5],
                            puzzle[4][3],puzzle[4][4],puzzle[4][5],
                            superPuzzle[5][3],superPuzzle[5][4],superPuzzle[5][5]];
                arrMini3 = [puzzle[3][6],puzzle[3][7],puzzle[3][8],
                            puzzle[4][6],puzzle[4][7],puzzle[4][8],
                            superPuzzle[5][6],superPuzzle[5][7],superPuzzle[5][8]];
            }


            arr=arr.filter(item=>{
                let n=0;
                for (let i=0;i<item.length;i++) {
                    if (posArr[i]===0 || posArr[i]===1 ||posArr[i]===2) {
                        for(let j=0;j<9;j++) {
                            if (arrMini1[j]===item[i]) {
                                n++;
                            }
                        }
                    } else if (posArr[i]===3 || posArr[i]===4 ||posArr[i]===5) {
                        for(let j=0;j<9;j++) {
                            if (arrMini2[j]===item[i]) {
                                n++;
                            }
                        }
                    } else if (posArr[i]===6 || posArr[i]===7 ||posArr[i]===8) {
                        for(let j=0;j<9;j++) {
                            if (arrMini3[j]===item[i]) {
                                n++;
                            }
                        }
                    }
                }
                if (n===0) return item;
            });
        } else if ((n===6) || (n===7) || (n===8)) {
            let arrMini1 = [];
            let arrMini2 = [];
            let arrMini3 = [];
            if (n===6) {
                arrMini1 = [superPuzzle[6][0],superPuzzle[6][1],superPuzzle[6][2],
                            superPuzzle[7][0],superPuzzle[7][1],superPuzzle[7][2],
                            superPuzzle[8][0],superPuzzle[8][1],superPuzzle[8][2]];
                arrMini2 = [superPuzzle[6][3],superPuzzle[6][4],superPuzzle[6][5],
                            superPuzzle[7][3],superPuzzle[7][4],superPuzzle[7][5],
                            superPuzzle[8][3],superPuzzle[8][4],superPuzzle[8][5]];
                arrMini3 = [superPuzzle[6][6],superPuzzle[6][7],superPuzzle[6][8],
                            superPuzzle[7][6],superPuzzle[7][7],superPuzzle[7][8],
                            superPuzzle[8][6],superPuzzle[8][7],superPuzzle[8][8]]; 
            } else if (n===7) {
                arrMini1 = [puzzle[6][0],puzzle[6][1],puzzle[6][2],
                            superPuzzle[7][0],superPuzzle[7][1],superPuzzle[7][2],
                            superPuzzle[8][0],superPuzzle[8][1],superPuzzle[8][2]];
                arrMini2 = [puzzle[6][3],puzzle[6][4],puzzle[6][5],
                            superPuzzle[7][3],superPuzzle[7][4],superPuzzle[7][5],
                            superPuzzle[8][3],superPuzzle[8][4],superPuzzle[8][5]];
                arrMini3 = [puzzle[6][6],puzzle[6][7],puzzle[6][8],
                            superPuzzle[7][6],superPuzzle[7][7],superPuzzle[7][8],
                            superPuzzle[8][6],superPuzzle[8][7],superPuzzle[8][8]]; 
            } else if (n===8) {
                arrMini1 = [puzzle[6][0],puzzle[6][1],puzzle[6][2],
                            puzzle[7][0],puzzle[7][1],puzzle[7][2],
                            superPuzzle[8][0],superPuzzle[8][1],superPuzzle[8][2]];
                arrMini2 = [puzzle[6][3],puzzle[6][4],puzzle[6][5],
                            puzzle[7][3],puzzle[7][4],puzzle[7][5],
                            superPuzzle[8][3],superPuzzle[8][4],superPuzzle[8][5]];
                arrMini3 = [puzzle[6][6],puzzle[6][7],puzzle[6][8],
                            puzzle[7][6],puzzle[7][7],puzzle[7][8],
                            superPuzzle[8][6],superPuzzle[8][7],superPuzzle[8][8]]; 
            }
     
            arr=arr.filter(item=>{
                let n=0;
                for (let i=0;i<item.length;i++) {
                    if (posArr[i]===0 || posArr[i]===1 ||posArr[i]===2) {
                        for(let j=0;j<9;j++) {
                            if (arrMini1[j]===item[i]) {
                                n++;
                            }
                        }
                    } else if (posArr[i]===3 || posArr[i]===4 ||posArr[i]===5) {
                        for(let j=0;j<9;j++) {
                            if (arrMini2[j]===item[i]) {
                                n++;
                            }
                        }
                    } else if (posArr[i]===6 || posArr[i]===7 ||posArr[i]===8) {
                        for(let j=0;j<9;j++) {
                            if (arrMini3[j]===item[i]) {
                                n++;
                            }
                        }
                    }
                }
                if (n===0) return item;
            });
        } 

        return arr;

    }
    
    
    function solver (n) {
        
       let arr =  createStringVariants(n);
        if (arr.length===0) {
            return;
        }
        let posArr=[];
        superPuzzle[n].forEach((item,index)=>{
            if (item===0) {
                posArr.push(index);
            }
        });
        for (let i=0;i<arr.length;i++) {  
            for (let j=0;j<posArr.length;j++) {
                puzzle[n][posArr[j]]=arr[i][j];    
            }     
            if (n >= 8) return true; 
            let a = solver(n+1);
            if (a==true) return true;   
        } 
    }
    
    solver(0);
    return puzzle;
}