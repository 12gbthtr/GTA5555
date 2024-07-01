const timeP=document.querySelector("#time")
function currentTime(){
    let date=new Date() 
    let hour=date.getHours()
    let minutes=date.getMinutes()
    let s=date.getSeconds()  
    hour=plusZero(hour)
    minutes=plusZero(minutes)
    s=plusZero(s)
    timeP.textContent=`${hour} : ${minutes} : ${s}`
}
setInterval(currentTime,1000) 

function plusZero(number){
if(number<10){
    return "0"+number
}else{
    return number
}
}
