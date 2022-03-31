function formatDuration (seconds) {
  if (seconds==0) return 'now';
  let arr =[];
      //['years','days','hours',minutes,'second'];
  arr[0]=Math.floor(seconds/(365*24*3600));
  arr[1]=Math.floor((seconds%(365*24*3600))/(24*3600));
  arr[2]=Math.floor(((seconds%(365*24*3600))%(24*3600)/3600));
  arr[3]=Math.floor((((seconds%(365*24*3600))%(24*3600)%3600)/60));
  arr[4]=(((seconds%(365*24*3600))%(24*3600))%3600)%60;

  let n=0;
  function a(time,comb){
    if (time==1) {
      n++;
      return (time+' '+comb);
      }
    if (time>1) {
      n++;
      return (time+' '+comb+'s');
      }
  }
  
  let years =a(arr[0],'year');
  let days =a(arr[1],'day');
  let hours =a(arr[2],'hour');
  let minutes =a(arr[3],'minute');
  let second =a(arr[4],'second');
  if (n==1) return (years||days||hours||minutes||second);
  let arr1=[years,days,hours,minutes,second];
  arr1 = arr1.filter(item=>item!=undefined);
  let str='';
  for(let i =0;i<arr1.length;i++) {
    if (i==arr1.length-2) {
      str+= arr1[i]+' and ';
    } else if (i==arr1.length-1) {
      str+= arr1[i];
    } else {
      str+= arr1[i]+', ';
    }
    
  }
  return(str)
}