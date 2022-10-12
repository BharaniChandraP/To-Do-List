var input=prompt("Enter your name: ");
console.log(input);
  
var hello=document.getElementById('login')
  
   hello.innerHTML="Hi " + input;
  
  var input1=input+1;
  console.log(input1);
  var x1 = document.getElementById("mouse"); 

  function playAudio() { 
     x1.play(); 
  } 
  var x2 = document.getElementById("mousedelete"); 
  
  function playAudio1() { 
     x2.play(); 
  } 
  
  function GetFormattedDate() {
    var todayTime = new Date();
    var month = todayTime .getMonth() + 1;
    var day = todayTime .getDate();
    var year = todayTime .getFullYear();
    if(month<=9)
      return year + "-" +"0"+ month + "-" + day;
    else
       return year + "-" + month + "-" + day;
  }
  var today = GetFormattedDate();
            //console.log(today);
  
  var dayslist = ["Sun","Mon","Tue","wed","Thu","Fri","Sat"];
  var weekday;
  function GetFormattedDate1() {
    //var dayslist = ["Sun","Mon","Tue","wed","Thu","Fri","Sat"];
    var todayTime1 = new Date();
    var month1 = todayTime1 .getMonth() + 1;
    var day1 = todayTime1 .getDate();
    var year1 = todayTime1 .getFullYear();
     weekday = todayTime1.getDay();
    if(month1<=9)
      return day1 + "-" +"0"+ month1 + "-" + year1 ;//+ dayslist[weekday];
    else
       return day1 + "-" + month1 + "-" + year1;//+ dayslist[weekday];
  }
  var today1 = GetFormattedDate1();
  console.log(today1);
  var displayDate = document.getElementById("displayDate");
  displayDate.innerHTML =='<h2>'+ today1 + "&nbsp"+ dayslist[weekday] +'<h2>'; 
  let  timeNow ; 
  
  function GetFormattedTime(){
    let time1 = new Date();
    let hour1 = time1.getHours();
    let minutes1 = time1.getMinutes();
    let seconds1 = time1.getSeconds();
    hour1 = hour1 < 10 ? "0" + hour1 : hour1;
    minutes1 = minutes1 < 10 ? "0" + minutes1 : minutes1;
    
    timeNow = hour1+":"+minutes1;
  }
  
  GetFormattedTime();
  
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
  
let x;
x=document.getElementById('datePicker').value;
function myfunction(){
  x=document.getElementById('datePicker').value;
}
let y;
y=document.getElementById('timePicker').value;
function myfunction(){
  y=document.getElementById('timePicker').value;
}

  
  (function(){
    const form=document.querySelector('#');

    const entry=document.querySelector('#todo');
    const list=document.getElementById('list');
    const comp=document.getElementById('completed');
    //const date=document.querySelector('#datePicker');
    //const time=document.querySelector('#timePicker');
    //const toDoList=entry.value;
    //const dates=date.value;
    //const times=time.value;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(timeNow);
    console.log(y);

    if(entry.value==""|| x==""|| y=="")
    {
      
    }
    else if(x<today)
    {
      alert('Enter a future Date!!');
    }
    else if( (x<=today) && (y<timeNow))
    {
      alert('Enter a future time!!');
    }
    else if(x==today)
    {
     comp.innerHTML = '<li>' + entry.value + "&nbsp &nbsp &nbsp" + y +'</li>';
     store1();
     entry.value="";
     y="";
    }
   else
   {
     list.innerHTML = '<li>' + x + "&nbsp &nbsp &nbsp" + entry.value +"&nbsp &nbsp &nbsp"+y +'</li>' ;
     store();
     entry.value="";
     x="";
     y="";
   }
  },false);
  
  /*list.addEventListener('click',function(e){
    var t=e.target;
    if(t.classList.contains('checked')){
      playAudio1();
              t.parentNode.removeChild(t);
    }
    else {
      t.classList.add('checked');
      playAudio();
      
    }
    store();

    
  },false);
  comp.addEventListener('click',function(e){
    var t1=e.target;
    if(t1.classList.contains('checked')){
      playAudio1();
              t1.parentNode.removeChild(t1);
    }
    else {
      t1.classList.add('checked');
      playAudio();
      
    }
    store1();

  },false);*/

  function store() {
    const val=list.innerHTML;
    localStorage.setItem(input,val);
  }
  function store1()
  {
    const val1=comp.innerHTML;
    localStorage.setItem(input1,val1);
  }

  function getValues(){
       var storedValues=localStorage.getItem(input);
       if(!storedValues)
       {
        list.innerHTML='<li> Make a to do list </li>'
       }
       else{
        list.innerHTML=storedValues; 
       }
  }
  getValues();

  function getValues1(){
    var storedValues1=localStorage.getItem(input1);
    if(!storedValues1)
    {
     comp.innerHTML='<li> Make a to do list </li>'
    }
    else{
     comp.innerHTML=storedValues1;
    }
}
getValues1();
});

    /*const newLI=document.createElement('LI');
    newLI.innerText=  dates + "-" +   toDoList +"-" + times;
    list.append(newLI);
    entry.value= "";
    date.value="";*/
 
    


  /*list.addEventListener('click',function(e){
    e.target.style.textDecoration='line-through';
  });
  list.addEventListener('dblclick',function(e){
    e.target.remove();
  });
*/

  
 
  
