let setAlarm=()=>{
    let userTime=document.querySelector("#usertime").value
    // console.log(userTime);
  let show=document.querySelector("#show")
  let audioSound=document.querySelector("#audio")
   setInterval(()=>{

    let Time=new Date()

    let Alarmtime=`${Time.getHours().toString().padStart(2,"0")}:${Time.getMinutes().toString().padStart(2,"0")}`

     if(Alarmtime==userTime){

            show.innerHTML="Alarm is ringing";
            audioSound.play()


            setTimeout(() => {
               audioSound.pause();
               audioSound.currentTime = 0;
               show.innerHTML = " stopped after 5 sec";
            
           }, 5000);
     
     }

     else{
        show.innerHTML="alarm is set";
     }
   },1000)

   

    
    
    
}