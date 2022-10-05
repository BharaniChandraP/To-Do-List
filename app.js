var input=prompt("Enter your name: ");
  

  if(input!=null){
    document.getElementById("login").innerHTML="Hi " + input
  }
  const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
  const today=new Date();
  const form=document.querySelector('#dog');
  const entry=document.querySelector('#todo');
  const list=document.querySelector('#task');
  const date=document.querySelector('#datePicker');
  const time=document.querySelector('#timePicker');


  form.addEventListener('submit',function(e){
    e.preventDefault();
    const toDoList=entry.value;
    const dates=date.value;
    const times=time.value;
    const newLI=document.createElement('LI');
    newLI.innerText=  dates + "-" +   toDoList +"-" + times;
    list.append(newLI);
    entry.value= "";
    date.value="";
  });
    
  
 
  list.addEventListener('click',function(e){
    e.target.remove();
  });

  
  setInterval(clockTime, 1000);
  function clockTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hr = 12;
      am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
        .innerHTML = currentTime;
  }
  clockTime();
  

  
