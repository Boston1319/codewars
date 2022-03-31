function solvePuzzle (clues) {
    let res=[]; 
    let count = 0;
    let sum1 = clues[23]+clues[22]+clues[21]+clues[6]+clues[7]+clues[8];
    let sum2 = clues[20]+clues[19]+clues[18]+clues[9]+clues[10]+clues[11];
    if (sum1<sum2) {
        let clues1=[...clues];
        clues[0]=clues1[12];
        clues[1]=clues1[13];
        clues[2]=clues1[14];
        clues[3]=clues1[15];
        clues[4]=clues1[16];
        clues[5]=clues1[17];

        clues[6]=clues1[18];
        clues[7]=clues1[19];
        clues[8]=clues1[20];
        clues[9]=clues1[21];
        clues[10]=clues1[22];
        clues[11]=clues1[23];

        clues[12]=clues1[0];
        clues[13]=clues1[1];
        clues[14]=clues1[2];
        clues[15]=clues1[3];
        clues[16]=clues1[4];
        clues[17]=clues1[5];

        clues[18]=clues1[6];
        clues[19]=clues1[7];
        clues[20]=clues1[8];
        clues[21]=clues1[9];
        clues[22]=clues1[10];
        clues[23]=clues1[11];
        count=1;

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
    let variants = enumiration([1,2,3,4,5,6]);
    //console.log(variants);
    //console.log('variants');
    function verticalClue(a,b,constraint,n,arr) {
        if (n===1) {
            for (let i=0;i<6;i++) {
               if (arr[i] === 1) {
                   constraint = constraint.filter(item=>item[i]===6);
               } else if (arr[i] === 2) {
                   constraint = constraint.filter(item=>item[i]!==6);
               } else if (arr[i] === 3) {
                   constraint = constraint.filter(item=>item[i]!==5 && item[i]!==6);
               } else if (arr[i] === 4) {
                   constraint = constraint.filter(item=>item[i]!==5 && item[i]!==6 && item[i]!==4);
               } else if (arr[i] === 5) {
                   constraint = constraint.filter(item=>item[i]!==5 && item[i]!==6 && item[i]!==4 && item[i]!==3);
               } else if (arr[i] === 6) {
                   constraint = constraint.filter(item=>item[i]===1);
               }
            }
        } else if (n===2) {
            for (let i=0;i<6;i++) {
              if (arr[i] === 1) {

               } else if (arr[i] === 2) {
                   constraint = constraint.filter(item=>item[i]!==6);
               } else if (arr[i] === 3) {
                   constraint = constraint.filter(item=>item[i]!==5 && item[i]!==6);
               } else if (arr[i] === 4) {
                   constraint = constraint.filter(item=>item[i]!==5 && item[i]!==6 && item[i]!==4);
               } else if (arr[i] === 5) {
                   constraint = constraint.filter(item=>item[i]!==5 && item[i]!==6 && item[i]!==4 && item[i]!==3);
               } else if (arr[i] === 6) {
                   constraint = constraint.filter(item=>item[i]===1);
               }  
            }

        }
        if (a ===1) {
            constraint = constraint.filter(item=>item[0]===6);
        } else if (a === 2) {
            constraint = constraint.filter(item=>item[0]!==6);
        } else if (a === 3) {
            constraint = constraint.filter(item=>item[0]!==5 && item[0]!==6);
        } else if (a === 4) {
            constraint = constraint.filter(item=>item[0]!==5 && item[0]!==6 && item[0]!==4);
        } else if (a === 5) {
            constraint = constraint.filter(item=>item[0]!==5 && item[0]!==6 && item[0]!==4 && item[0]!==3);
        } else if (a === 6) {
            constraint = constraint.filter(item=>item[0]===1);
        }
        if (b ===1) {
            constraint = constraint.filter(item=>item[5]===6);
        } else if (b === 2) {
            constraint = constraint.filter(item=>item[5]!==6);
        } else if (b === 3) {
            constraint = constraint.filter(item=>item[5]!==5 && item[5]!==6);
        } else if (b === 4) {
            constraint = constraint.filter(item=>item[5]!==5 && item[5]!==6 && item[5]!==4);
        } else if (b === 5) {
            constraint = constraint.filter(item=>item[5]!==5 && item[5]!==6 && item[5]!==4 && item[5]!==3);
        } else if (b === 6) {
            constraint = constraint.filter(item=>item[5]===1);
        }


        return constraint;
    }

    function clueValidator(arr,a,b) {
        let set = new Set(arr);
        if (set.size!=arr.length) return false;
        if ((a===0) && (b===0)) return true;
        let n=1;
        let max = arr[0];
        for (let i=1;i<arr.length;i++) {
            if (arr[i]>max) {
                max=arr[i];
                n++;
            }
        }
        if ((b===0) && (a===n)) return true;
        max = arr[arr.length-1];
        let m =1;
        for (let i=arr.length-2;i>-1;i--) {
            if (arr[i]>max) {
                max=arr[i];
                m++;
            }
        }
        if ((a===0) && (b===m)) return true;
        if ((b===m) && (a===n)) return true;

    }
    let arr=[];
    let individ1 = [...variants];
    individ1 = verticalClue(clues[23],clues[6],individ1,1,[clues[0],clues[1],clues[2],clues[3],clues[4],clues[5]]);
    console.log(individ1);

     for (let i=0;i<individ1.length;i++) {
         let constraint = [...variants];
         if (clueValidator(individ1[i],clues[23],clues[6])) {
             res[0]= individ1[i];
             constraint = constraint.filter(item=>{
                 let n = 0;
                 for (let i=0;i<6;i++) {
                   if (item[i]  == res[0][i]) {
                       n++;
                   } 
                 }
                 if (n===0) return item;

             });
             //console.log(constraint);
             let individ2=[...constraint];
             individ2 = verticalClue(clues[22],clues[7],individ2,0);
             //console.log(individ2);


           for (let i=0;i<individ2.length;i++) {
               let constraint1 = [...constraint];
               if (clueValidator(individ2[i],clues[22],clues[7])) {
                   res[1]= individ2[i];
                   constraint1 = constraint1.filter(item=>{
                    let n = 0;
                    for (let i=0;i<6;i++) {
                        if (item[i]  == res[1][i]) {
                            n++;
                        } 
                    }
                    if (n===0) return item;

                    });
                    //console.log(constraint1);
                   let individ3=[...constraint1];
                    individ3 = verticalClue(clues[21],clues[8],individ3,0);
                    //console.log(individ3);


                   for(let i=0;i<individ3.length;i++) {
                       let constraint2 = [...constraint1];
                      if (clueValidator(individ3[i],clues[21],clues[8])) {
                        res[2]= individ3[i];
                        constraint2 = constraint2.filter(item=>{
                            let n = 0;
                            for (let i=0;i<6;i++) {
                                if (item[i]  == res[2][i]) {
                                    n++;
                                } 
                            }
                            if (n===0) return item;

                        });
                        //console.log(constraint2);
                          let individ4=[...constraint2];
                          individ4 = verticalClue(clues[20],clues[9],individ4,0);
                          //console.log(individ4);


                        for(let i=0;i<individ4.length;i++) {
                            let constraint3 = [...constraint2];
                            if (clueValidator(individ4[i],clues[20],clues[9])) {
                                res[3]= individ4[i];
                                constraint3 = constraint3.filter(item=>{
                                    let n = 0;
                                    for (let i=0;i<6;i++) {
                                        if (item[i]  == res[3][i]) {
                                            n++;
                                        } 
                                    }
                                    if (n===0) return item;

                                });
                                //console.log(constraint3);
                                let individ5=[...constraint3];
                                individ5 = verticalClue(clues[19],clues[10],individ5,0);
                                //console.log(individ5);


                                 for(let i=0;i<individ5.length;i++) {
                                     let constraint4 = [...constraint3];
                                    if (clueValidator(individ5[i],clues[19],clues[10])) {
                                        res[4]= individ5[i];
                                        constraint4 = constraint4.filter(item=>{
                                            let n = 0;
                                            for (let i=0;i<6;i++) {
                                                if (item[i]  == res[4][i]) {
                                                    n++;
                                                } 
                                            }
                                            if (n===0) return item;

                                        });
                                       // console.log(constraint4);


                                         for(let i=0;i<constraint4.length;i++) {
                                            if (clueValidator(constraint4[i],clues[18],clues[11])) {
                                                res[5]= constraint4[i];



                                                for (let i=0;i<6;i++) {
                                                    arr[i]=res[i][0];
                                                }
                                                if (clueValidator(arr,clues[0],clues[17])) {
                                                   for (let i=0;i<6;i++) {
                                                        arr[i]=res[i][1];
                                                    }
                                                    if (clueValidator(arr,clues[1],clues[16])) {
                                                        for (let i=0;i<6;i++) {
                                                            arr[i]=res[i][2];
                                                        }
                                                        if (clueValidator(arr,clues[2],clues[15])) {
                                                            for (let i=0;i<6;i++) {
                                                                arr[i]=res[i][3];
                                                            }
                                                            if (clueValidator(arr,clues[3],clues[14])) {
                                                                for (let i=0;i<6;i++) {
                                                                    arr[i]=res[i][4];
                                                                }
                                                                if (clueValidator(arr,clues[4],clues[13])) {
                                                                   for (let i=0;i<6;i++) {
                                                                        arr[i]=res[i][5];
                                                                    }
                                                                    if (clueValidator(arr,clues[5],clues[12])) {
                                                                        if (count==1) {
                                                                            res.reverse();
                                                                            res = res.map(item=>item.reverse());
                                                                        }
                                                                        return res;
                                                                    }
                                                                }

                                                            }
                                                        } 
                                                    }
                                                }
                                            }
                                         }
                                    }
                                 }
                           }
                        }
                    }
                }
              }

            }
        }
     }
}