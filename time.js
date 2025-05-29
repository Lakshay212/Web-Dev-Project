function updatetime(){
    const now=new Date();
    const time=document.getElementById("Time")
    const date=document.getElementById("Date")
    var newtime=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`
    var newdate=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`
    time.textContent=newtime
    date.textContent=newdate
}
setInterval(updatetime, 1000);
updatetime()

