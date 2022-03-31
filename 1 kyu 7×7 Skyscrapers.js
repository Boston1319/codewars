function solvePuzzle (clues) {
    console.log(clues);
    let reverse = false;
    let res=[[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]]; 
    let sum1 = clues[0]+clues[1]+clues[2]+clues[3]+clues[4]+clues[5]+clues[6]+clues[20]+clues[19]+clues[18]+clues[17]+clues[16]+clues[15]+clues[14];
    let sum2 = clues[7]+clues[8]+clues[9]+clues[10]+clues[11]+clues[12]+clues[13]+clues[21]+clues[22]+clues[23]+clues[24]+clues[25]+clues[26]+clues[27];
    if (sum1>sum2) {
        reverse = true;
        let clues1= [...clues];
        clues[0]=clues1[21];
        clues[1]=clues1[22];
        clues[2]=clues1[23];
        clues[3]=clues1[24];
        clues[4]=clues1[25];
        clues[5]=clues1[26];
        clues[6]=clues1[27];

        clues[7]=clues1[0];
        clues[8]=clues1[1];
        clues[9]=clues1[2];
        clues[10]=clues1[3];
        clues[11]=clues1[4];
        clues[12]=clues1[5];
        clues[13]=clues1[6];

        clues[14]=clues1[7];
        clues[15]=clues1[8];
        clues[16]=clues1[9];
        clues[17]=clues1[10];
        clues[18]=clues1[11];
        clues[19]=clues1[12];
        clues[20]=clues1[13];

        clues[21]=clues1[14];
        clues[22]=clues1[15];
        clues[23]=clues1[16];
        clues[24]=clues1[17];
        clues[25]=clues1[18];
        clues[26]=clues1[19];
        clues[27]=clues1[20];
    }
     let queue = [[0,clues[27],clues[7]],[1,clues[26],clues[8]],[2,clues[25],clues[9]],[3,clues[24],clues[10]],[4,clues[23],clues[11]],[5,clues[22],clues[12]],[6,clues[21],clues[13]]];
     console.log(queue);
    queue.sort((a,b)=>((a[1]+a[2])-(b[1]+b[2])));
    queue.reverse();
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
    let variants = enumiration([1,2,3,4,5,6,7]);



           function leftRightClue (constraint,a,b) {
               if (a===0 && b===0) return constraint;
                if (a ===1) {
                    constraint = constraint.filter(item=>item[0]===7);
                } else if (a === 2) {
                    constraint = constraint.filter(item=>item[0]!==7);
                } else if (a === 3) {
                    constraint = constraint.filter(item=>item[0]!==6 && item[0]!==7 && item[1]!==7);
                } else if (a === 4) {
                    constraint = constraint.filter(item=>item[0]!==5 && item[0]!==6 && item[0]!==7 && item[1]!==6 && item[1]!==7 && item[2]!==7);
                } else if (a === 5) {
                    constraint = constraint.filter(item=>item[0]!==4 && item[0]!==5 && item[0]!==6 && item[0]!==7 && item[1]!==5 && item[1]!==6 && item[1]!==7 && item[2]!==6 && item[2]!==7 && item[3]!==7);
                } else if (a === 6) {
                    constraint = constraint.filter(item=>item[0]!==3 && item[0]!==4 && item[0]!==5 && item[0]!==6 && item[0]!==7 && item[1]!==4 && item[1]!==5 && item[1]!==6 && item[1]!==7 && item[2]!==5 && item[2]!==6 && item[2]!==7 && item[3]!==6 && item[3]!==7 && item[4]!==7);
                } else if (a === 7) {
                    constraint = constraint.filter(item=>item[0]===1 && item[1]===2 && item[2]===3 && item[3]===4 && item[4]===5 && item[5]===6 && item[6]===7);
                }

                if (b ===1) {
                    constraint = constraint.filter(item=>item[6]===7);
                } else if (b === 2) {
                    constraint = constraint.filter(item=>item[6]!==7);
                } else if (b === 3) {
                    constraint = constraint.filter(item=>item[6]!==6 && item[6]!==7 && item[5]!==7);
                } else if (b === 4) {
                    constraint = constraint.filter(item=>item[6]!==5 && item[6]!==6 && item[6]!==7 && item[5]!==6 && item[5]!==7 && item[4]!==7);
                } else if (b === 5) {
                    constraint = constraint.filter(item=>item[6]!==4 && item[6]!==5 && item[6]!==6 && item[6]!==7 && item[5]!==5 && item[5]!==6 && item[5]!==7 && item[4]!==6 && item[4]!==7 && item[3]!==7);
                } else if (b === 6) {
                    constraint = constraint.filter(item=>item[6]!==3 && item[6]!==4 && item[6]!==5 && item[6]!==6 && item[6]!==7 && item[5]!==4 && item[5]!==5 && item[5]!==6 && item[5]!==7 && item[4]!==5 && item[4]!==6 && item[4]!==7 && item[3]!==6 && item[3]!==7 && item[2]!==7);
                } else if (b === 7) {
                    constraint = constraint.filter(item=>item[6]===1 && item[5]===2 && item[4]===3 && item[3]===4 && item[2]===5 && item[1]===6 && item[0]===7);
                }
               if (a!=0) {
                constraint=constraint.filter(item=>{
                   let n=1;
                    let max = item[0];
                    for (let i=1;i<7;i++) {
                        if (item[i]>max) {
                            n++;
                            max=item[i];
                        }
                    }
                    if (a==n) return item;
                });
               }
               if (b!=0) {
                   constraint=constraint.filter(item=>{
                       let n=1;
                       let max = item[6];
                       for (let i=5;i>-1;i--) {
                           if (item[i]>max) {
                               n++;
                               max=item[i];
                           }
                       }
                       if (b==n) return item;
                   });
               }


                return constraint;
        }

        let vertical0 = [...variants];
        vertical0=leftRightClue(vertical0,clues[0],clues[20]);
        let vertical1 = [...variants];
        vertical1=leftRightClue(vertical1,clues[1],clues[19]);  
        let vertical2 = [...variants];
        vertical2=leftRightClue(vertical2,clues[2],clues[18]);  
        let vertical3 = [...variants];
        vertical3=leftRightClue(vertical3,clues[3],clues[17]);  
        let vertical4 = [...variants];
        vertical4=leftRightClue(vertical4,clues[4],clues[16]);  
        let vertical5 = [...variants];
        vertical5=leftRightClue(vertical5,clues[5],clues[15]);  
        let vertical6 = [...variants];
        vertical6=leftRightClue(vertical6,clues[6],clues[14]);  


           function verticalConstraint (arr,n,v0,v1,v2,v3,v4,v5,v6) {
               arr=arr.filter(item=>{
                   if (v0.find(it=>it[n]==item[0]) &&
                       v1.find(it=>it[n]==item[1]) &&
                       v2.find(it=>it[n]==item[2]) &&
                       v3.find(it=>it[n]==item[3]) &&
                       v4.find(it=>it[n]==item[4]) &&
                       v5.find(it=>it[n]==item[5]) &&
                       v6.find(it=>it[n]==item[6])) {
                       return item;
                       }    
               });
                return arr;
           }


    let count = -1;
           function hope (arr,queue,z0,z1,z2,z3,z4,z5,z6) {
                 count++;  
               let individ = [...arr];
               let v0 = [...z0];
               let v1 = [...z1];
               let v2 = [...z2];
               let v3 = [...z3];
               let v4 = [...z4];
               let v5 = [...z5];
               let v6 = [...z6];
               individ = verticalConstraint(individ,queue[count][0],z0,z1,z2,z3,z4,z5,z6);
                   v0=v0.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][0]) {
                              return it;
                          }
                      }
                   });
                   v1=v1.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][1]) {
                              return it;
                          }
                      }
                   });
                   v2=v2.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][2]) {
                              return it;
                          }
                      }
                   });
                   v3=v3.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][3]) {
                              return it;
                          }
                      }
                   });
                   v4=v4.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][4]) {
                              return it;
                          }
                      }
                   });
                   v5=v5.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][5]) {
                              return it;
                          }
                      }
                   });
                   v6=v6.filter(it=>{
                      for (let i=0;i<arr.length;i++) {
                          if (it[queue[count][0]]==arr[i][6]) {
                              return it;
                          }
                      }
                   });
               let g0=[];
               let g1=[];
               let g2=[];
               let g3=[];
               let g4=[];
               let g5=[];
               let g6=[];



                let superIndivid = [...individ];
               superIndivid=leftRightClue(superIndivid,queue[count][1],queue[count][2]);

                for (let i =0;i<superIndivid.length;i++) {
                    res[queue[count][0]]=superIndivid[i];
                    g0=[...v0];
                    g1=[...v1];
                    g2=[...v2];
                    g3=[...v3];
                    g4=[...v4];
                    g5=[...v5];
                    g6=[...v6];
                    g0=g0.filter(it=>it[queue[count][0]]==res[queue[count][0]][0]);
                    g1=g1.filter(it=>it[queue[count][0]]==res[queue[count][0]][1]);
                    g2=g2.filter(it=>it[queue[count][0]]==res[queue[count][0]][2]);
                    g3=g3.filter(it=>it[queue[count][0]]==res[queue[count][0]][3]);
                    g4=g4.filter(it=>it[queue[count][0]]==res[queue[count][0]][4]);
                    g5=g5.filter(it=>it[queue[count][0]]==res[queue[count][0]][5]);
                    g6=g6.filter(it=>it[queue[count][0]]==res[queue[count][0]][6]);
                    let nextIndivid = [...arr];
                    nextIndivid = nextIndivid.filter(item=>{
                            let m = 0;
                            for (let i=0;i<7;i++) {
                                if (item[i]  == res[queue[count][0]][i]) {
                                    m++;
                                } 
                            }
                            if (m===0) return item;

                        });


                    if (count<6) {
                     if (hope (nextIndivid,queue,g0,g1,g2,g3,g4,g5,g6)) return true;
                    } else {
                        return true;
                    }
                    res[queue[count][0]]=[0,0,0,0,0,0,0];
                    count--;

                }

           }
    hope(variants,queue,vertical0,vertical1,vertical2,vertical3,vertical4,vertical5,vertical6);
    if (reverse) {
        let finalArr = [];
        for (let i=0;i<7;i++) {
            finalArr[i]=[];
            for (let j=0;j<7;j++) {
                finalArr[i][j]=res[j][i];
            }
        }

        return finalArr.reverse();
    }
    return res;      
} 