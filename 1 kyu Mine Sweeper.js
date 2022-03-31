function solveMine(map,n){
  
  map = map.split('\n').map(item=>item.split(' '));
  let arr=[];
  for (let i=0;i<map.length;i++) {
    for (let j=0;j<map[0].length;j++) {
      
      if (map[i][j]==='0') {
        
        if (map[i+1] && map[i+1][j]=='?') {
          arr.push([i+1,j]);
          map[i+1][j]=game.open(i+1,j);
        }
        if (map[i+1] && map[i+1][j+1]=='?') {
          arr.push([i+1,j+1]); 
          map[i+1][j+1]=game.open(i+1,j+1);
        }
        if (map[i+1] && map[i+1][j-1]=='?') {
          arr.push([i+1,j-1]);  
          map[i+1][j-1]=game.open(i+1,j-1);
        }
        if (map[i][j+1]=='?') {
          arr.push([i,j+1]);
          map[i][j+1]=game.open(i,j+1);
        }
        if (map[i][j-1]=='?') {
          arr.push([i,j-1]);
          map[i][j-1]=game.open(i,j-1);
        }
        if (map[i-1] && map[i-1][j]=='?') {
          arr.push([i-1,j]);
          map[i-1][j]=game.open(i-1,j);
        }
        if (map[i-1] && map[i-1][j-1]=='?') {
          arr.push([i-1,j-1]);
          map[i-1][j-1]=game.open(i-1,j-1);
        }
        if (map[i-1] && map[i-1][j+1]=='?') {
          arr.push([i-1,j+1]);
          map[i-1][j+1]=game.open(i-1,j+1);
        }
        
      }
    }
  }
  
  
    let superCount = 1;
    let last=false;
  while(n>0 && superCount!=0) {
    if (superCount==0) {
        last=true;
    }
    superCount=0;
    
    
    for (let i=0;i<arr.length;i++) {
      //console.log(i);
      if (arr[i][2]) {
        continue;
      }
      
      let miniArr=[];
      let valid=8;
      let unknown=0;
      let bomb=0;
      let digits=0;
      let a = arr[i][0];
      let b = arr[i][1];
      
      
      if (map[a+1]) {
        if (map[a+1][b]=='?'){
          unknown++;
          miniArr.push([a+1,b]);
        } else if (map[a+1][b]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a+1] && map[a+1][b+1]) {
        if (map[a+1][b+1]=='?'){
          unknown++;
          miniArr.push([a+1,b+1]);
        } else if (map[a+1][b+1]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a+1] && map[a+1][b-1]) {
        if (map[a+1][b-1]=='?'){
          unknown++;
          miniArr.push([a+1,b-1]);
        } else if (map[a+1][b-1]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a][b+1]) {
        if (map[a][b+1]=='?'){
          unknown++;
          miniArr.push([a,b+1]);
        } else if (map[a][b+1]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a][b-1]) {
        if (map[a][b-1]=='?'){
          unknown++;
          miniArr.push([a,b-1]);
        } else if (map[a][b-1]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a-1]) {
        if (map[a-1][b]=='?'){
          unknown++;
          miniArr.push([a-1,b]);
        } else if (map[a-1][b]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a-1] && map[a-1][b+1]) {
        if (map[a-1][b+1]=='?'){
          unknown++;
          miniArr.push([a-1,b+1]);
        } else if (map[a-1][b+1]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      if (map[a-1] && map[a-1][b-1]) {
        if (map[a-1][b-1]=='?'){
          unknown++;
          miniArr.push([a-1,b-1]);
        } else if (map[a-1][b-1]=='x') {
          bomb++;
        } else {
          digits++;
        }
      } else {
        valid--;
      }
      
      let bombCount = +map[a][b];
     
      if (valid==(digits+bomb)) {
        arr[i].push('done');
        
      } else if (bombCount==bomb) {
        superCount++;
        for (let j=0;j<miniArr.length;j++) {
          map[miniArr[j][0]][miniArr[j][1]]=game.open(miniArr[j][0],miniArr[j][1]);
          
          arr.push([miniArr[j][0],miniArr[j][1]]);
          
        }
        arr[i].push('done');
        
      } else if ((bombCount-bomb)==unknown) {
        superCount++;
        for (let j=0;j<miniArr.length;j++) {
          map[miniArr[j][0]][miniArr[j][1]]='x';
          n--;
        }
        arr[i].push('done');
      }
    }
    
    let count=0;
    
    for (let i=0;i<map.length;i++) {
      for (let j=0;j<map[0].length;j++) {
        if (map[i][j]=='?') {
          count++;
        }
      }
    }
    if (count==0) {
      return map.map(it=>it.join(' ')).join('\n');
    }
    if (superCount==0 && !last) {
        let arrPotentialBomb=[];
        let arrCheck=[];
        for (let i=0;i<map.length;i++) {
          for (let j=0;j<map[0].length;j++) {
            if (map[i][j]=='?') {
              let count=0;
              if (map[i+1] && map[i+1][j]!='?' && map[i+1][j]!='x') {
                arrCheck.push([i+1,j]);
                 count++;
              }
              if (map[i+1] && map[i+1][j+1] && map[i+1][j+1]!='?' && map[i+1][j+1]!='x') {
                  arrCheck.push([i+1,j+1]);
                  count++;
              }
              if (map[i+1] && map[i+1][j-1] && map[i+1][j-1]!='?' && map[i+1][j-1]!='x') {
                  arrCheck.push([i+1,j-1]);
                  count++;
              }
              if (map[i-1] && map[i-1][j]!='?' && map[i-1][j]!='x') {
                  arrCheck.push([i-1,j]);
                  count++;
              }
              if (map[i-1] && map[i-1][j+1] && map[i-1][j+1]!='?' && map[i-1][j+1]!='x') {
                  arrCheck.push([i-1,j+1]);
                  count++;
              }
              if (map[i-1] && map[i-1][j-1] && map[i-1][j-1]!='?' && map[i-1][j-1]!='x') {
                  arrCheck.push([i-1,j-1]);
                  count++;
              }
              if (map[i][j-1] && map[i][j-1]!='?' && map[i][j-1]!='x') {
                  arrCheck.push([i,j-1]);
                  count++;
              }
              if (map[i][j+1] && map[i][j+1]!='?' && map[i][j+1]!='x') {
                  arrCheck.push([i,j+1]);
                  count++;
              }
              if (count>0) {
                  arrPotentialBomb.push([i,j]);
              }
            }
          }
        }
     
        let arrPotentialBombCount=0;
        let arrXY=[];
        let emptyCount = arrPotentialBomb.length;
        label: for (let i=0;i<arrPotentialBomb.length;i++) {
            let questionCounts = arrPotentialBomb.length-1;
            let m=n;
            
            for (let i=0;i<arrPotentialBomb.length;i++) {
                map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]='?';
            }
            map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]='x';
            m--;
            let miniCount = 'start';
            let arrCheckCount =0;
            while (miniCount!='last') {
                if (miniCount==0 && questionCounts==0) {
                    miniCount='last';
                } else {
                    miniCount=0;
                }
                 for (let j=0;j<arrCheck.length;j++) {
                    let a = arrCheck[j][0];
                    let b = arrCheck[j][1];
                          let valid=8;
                          let unknown=0;
                          let bomb=0;
                          let digits=0;
                          let miniArr = [];


                          if (map[a+1]) {
                            if (map[a+1][b]=='?'){
                              unknown++;
                              miniArr.push([a+1,b]);
                            } else if (map[a+1][b]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a+1] && map[a+1][b+1]) {
                            if (map[a+1][b+1]=='?'){
                              unknown++;
                              miniArr.push([a+1,b+1]);
                            } else if (map[a+1][b+1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a+1] && map[a+1][b-1]) {
                            if (map[a+1][b-1]=='?'){
                              unknown++;
                              miniArr.push([a+1,b-1]);
                            } else if (map[a+1][b-1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a][b+1]) {
                            if (map[a][b+1]=='?'){
                              unknown++;
                              miniArr.push([a,b+1]);
                            } else if (map[a][b+1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a][b-1]) {
                            if (map[a][b-1]=='?'){
                              unknown++;
                              miniArr.push([a,b-1]);
                            } else if (map[a][b-1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a-1]) {
                            if (map[a-1][b]=='?'){
                              unknown++;
                              miniArr.push([a-1,b]);
                            } else if (map[a-1][b]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a-1] && map[a-1][b+1]) {
                            if (map[a-1][b+1]=='?'){
                              unknown++;
                              miniArr.push([a-1,b+1]);
                            } else if (map[a-1][b+1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a-1] && map[a-1][b-1]) {
                            if (map[a-1][b-1]=='?'){
                              unknown++;
                              miniArr.push([a-1,b-1]);
                            } else if (map[a-1][b-1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          let bombCount = +map[a][b];
                     if (miniCount=='last') {
                         if (bombCount==bomb && unknown==0) {
                             arrCheckCount++;
                         }
                     }
                if (unknown!=0 && bombCount==bomb) {
                    miniCount++;
                    for (let i=0;i<miniArr.length;i++) {
                       map[miniArr[i][0]][miniArr[i][1]]='-';
                        questionCounts--;
                    }
                } else if (unknown!=0 && valid==digits+bombCount) {
                    miniCount++;
                    for (let i=0;i<miniArr.length;i++) {
                        map[miniArr[i][0]][miniArr[i][1]]='x';
                        questionCounts--;
                        m--;
                    }
                } else if (unknown==0 && (m<0 || bombCount!=bomb)) {
                    continue label;
                }
                }
                if (miniCount==0 && questionCounts!=0) {
                    for (let i=0;i<arrPotentialBomb.length;i++) {
                        if (map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]=='?') {
                            whereToGo(i,questionCounts,m)
                        }
                    }
                    continue label;
                }
            }
            
            if (arrCheckCount==arrCheck.length) {
                let xy=[];
                for (let i=0;i<arrPotentialBomb.length;i++) {
                    if (map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]=='x') {
                        if (!arrPotentialBomb[i][2]) {
                            arrPotentialBomb[i].push(true);
                            emptyCount--;
                        }
                        xy.push(''+arrPotentialBomb[i][0]+'-'+arrPotentialBomb[i][1]);
                    }
                }
                if ( arrPotentialBombCount==0) {
                arrXY=[...xy];
                arrPotentialBombCount++;
                } else {
                    arrXY=arrXY.filter(it=>{
                        for (let i=0;i<xy.length;i++) {
                            if (it==xy[i]) return it;
                        }
                    });
                    if (arrXY.length==0 && emptyCount==0) return '?';
                        //return '?';
                    }
                }
                
                
            }
        let empty=[];
        for (let i=0;i<arrPotentialBomb.length;i++) {
            map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]='?';
            if (!arrPotentialBomb[i][2]) {
              empty.push([arrPotentialBomb[i][0],arrPotentialBomb[i][1]]);
            }
        }
        if (arrXY.length==0 && empty.length==0) {
            return '?';
        } else {
            if (arrXY.length!=0) {
                let newArr = arrXY[0].split('-');
                map[+newArr[0]][+newArr[1]]='x';
                n--;
            } else {
            
                for (let i=0;i<empty.length;i++) {
                    map[empty[i][0]][empty[i][1]]=game.open(empty[i][0],empty[i][1]);
                }
            }
        }
        superCount++;
        
        function whereToGo(index,qCount,n) {
            let arrPotentialBombInside =[];
            for (let i=0;i<arrPotentialBomb.length;i++) {
                if (map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]=='?') {
                    arrPotentialBombInside.push([arrPotentialBomb[i][0],arrPotentialBomb[i][1]]);
                }
            }
           let m = n-1;
           map[arrPotentialBomb[index][0]][arrPotentialBomb[index][1]]='x';
           miniCount=1;
           let arrCheckCount =0;
           let questionCounts=qCount-1;
           while (miniCount!='last') {
                if (miniCount==0 && questionCounts==0) {
                    miniCount='last';
                } else {
                    miniCount=0;
                }
                 for (let j=0;j<arrCheck.length;j++) {
                    let a = arrCheck[j][0];
                    let b = arrCheck[j][1];
                          let valid=8;
                          let unknown=0;
                          let bomb=0;
                          let digits=0;
                          let miniArr = [];


                          if (map[a+1]) {
                            if (map[a+1][b]=='?'){
                              unknown++;
                              miniArr.push([a+1,b]);
                            } else if (map[a+1][b]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a+1] && map[a+1][b+1]) {
                            if (map[a+1][b+1]=='?'){
                              unknown++;
                              miniArr.push([a+1,b+1]);
                            } else if (map[a+1][b+1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a+1] && map[a+1][b-1]) {
                            if (map[a+1][b-1]=='?'){
                              unknown++;
                              miniArr.push([a+1,b-1]);
                            } else if (map[a+1][b-1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a][b+1]) {
                            if (map[a][b+1]=='?'){
                              unknown++;
                              miniArr.push([a,b+1]);
                            } else if (map[a][b+1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a][b-1]) {
                            if (map[a][b-1]=='?'){
                              unknown++;
                              miniArr.push([a,b-1]);
                            } else if (map[a][b-1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a-1]) {
                            if (map[a-1][b]=='?'){
                              unknown++;
                              miniArr.push([a-1,b]);
                            } else if (map[a-1][b]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a-1] && map[a-1][b+1]) {
                            if (map[a-1][b+1]=='?'){
                              unknown++;
                              miniArr.push([a-1,b+1]);
                            } else if (map[a-1][b+1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                          if (map[a-1] && map[a-1][b-1]) {
                            if (map[a-1][b-1]=='?'){
                              unknown++;
                              miniArr.push([a-1,b-1]);
                            } else if (map[a-1][b-1]=='x') {
                              bomb++;
                            } else {
                              digits++;
                            }
                          } else {
                            valid--;
                          }

                     let bombCount = +map[a][b];
                     if (miniCount=='last') {
                         if (bombCount==bomb && unknown==0) {
                             arrCheckCount++;
                         }
                     }
                if (unknown!=0 && bombCount==bomb) {
                    miniCount++;
                    for (let i=0;i<miniArr.length;i++) {
                       map[miniArr[i][0]][miniArr[i][1]]='-';
                        questionCounts--;
                    }
                } else if (unknown!=0 && valid==digits+bombCount) {
                    miniCount++;
                    for (let i=0;i<miniArr.length;i++) {
                        map[miniArr[i][0]][miniArr[i][1]]='x';
                        questionCounts--;
                        m--;
                    }
                } else if (unknown==0 && (m<0 || bombCount!=bomb)) {
                    for(let i=0;i<arrPotentialBombInside.length;i++) {
                        map[arrPotentialBombInside[i][0]][arrPotentialBombInside[i][1]]='?'
                    }
                    return;
                }
                }
                if (miniCount==0 && questionCounts!=0) {
                    for (let i=0;i<arrPotentialBomb.length;i++) {
                        if (map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]=='?') {
                            whereToGo(i,questionCounts,m);
                            
                            
                        }
                    }
                    return;
                }
           }
           if (arrCheckCount==arrCheck.length) {
                let xy=[];
                for (let i=0;i<arrPotentialBomb.length;i++) {
                    if (map[arrPotentialBomb[i][0]][arrPotentialBomb[i][1]]=='x') {
                        if (!arrPotentialBomb[i][2]) {
                            arrPotentialBomb[i].push(true);
                            emptyCount--;
                        }
                        xy.push(''+arrPotentialBomb[i][0]+'-'+arrPotentialBomb[i][1]);
                    }
                }
                if ( arrPotentialBombCount==0) {
                arrXY=[...xy];
                arrPotentialBombCount++;
                } else {
                    arrXY=arrXY.filter(it=>{
                        for (let i=0;i<xy.length;i++) {
                            if (it==xy[i]) return it;
                        }
                    });   
                }
                for(let i=0;i<arrPotentialBombInside.length;i++) {
                    map[arrPotentialBombInside[i][0]][arrPotentialBombInside[i][1]]='?'
                }  
        }
      
    } 
  
      
}
  }
      for (let i=0;i<map.length;i++) {
      for (let j=0;j<map[0].length;j++) {
        if (map[i][j]=='?') {
          map[i][j]=game.open(i,j);
        }
      }
    }
  return map.map(it=>it.join(' ')).join('\n');
}