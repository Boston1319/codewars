function humanReadable (seconds) {
  let HH,MM,SS;
  let h = Math.floor(seconds/3600);
  let prom = seconds%3600;
  let m = Math.floor(prom/60);
  let s = prom%60;
  h <10?HH='0'+h:HH=h;
  m <10?MM='0'+m:MM=m;
  s <10?SS='0'+s:SS=s;
  return (HH + ':' + MM + ':' + SS);
}