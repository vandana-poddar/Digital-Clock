const hour1 = document.getElementById('hour') ;
const minute1 = document.getElementById('minute') ;
const second1 = document.getElementById('second') ;
const ampm1= document.getElementById('AMPM') ;

function digitalclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';
    if(h>=12){
     ampm = 'PM';  
     h = h-12; //13-12=1 hr
    }
    h = h<10?'0'+h:h;//to dispaly 0 for hour o=in one digit like 1-9
    m = m<10?'0'+m:m;//to dispaly 0 for minute o=in one digit like 1-9
    s = s<10?'0'+s:s;//to dispaly 0 for seconds o=in one digit like 1-9
    hour1.innerText = h;
    minute1.innerText = m;
    second1.innerText = s;
    ampm1.innerText = ampm;
}
setInterval(()=>{
        digitalclock();
    },1000);

   
