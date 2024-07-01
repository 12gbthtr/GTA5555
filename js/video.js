let video=document.querySelector("#myVideo")
 let btnPlay=document.querySelector("#play") 
 let btnMute=document.querySelector("#mute")  
  let inputVideo=document.querySelector("#input")
  let playlist=["video1","Video2","Video3"] 
  let number=0  
  function sound(){
    video.volume=inputVideo.value
  }
 function play(){
    if(video.paused==true){
        video.play()
        btnPlay.textContent="pause"
    } else{
        video.pause()
        btnPlay.textContent="play"
    }
 } 
 function mute(){
    if(video.muted ==true){
        video.muted=false
       btnMute.textContent="off"
    } else{
        video.muted=true
        btnMute.textContent="on"
    }

 }
function next(){
number=number+1 
if(number<playlist.length-1){
    number=number+1 
} else{
    number=0
}
video.src=`video/${playlist[number]}.mp4`
}
function prev(){
   
    if(number!=0){
        number=number-1
    }
    else{
        number=playlist.length-1
    }
    video.src=`video/${playlist[number]}.mp4`
    }