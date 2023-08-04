<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
 
  #lloader {
   /* background: url('loader.webp') no-repeat center center;*/
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9999999;
}
#loader {
  background: url('cse.png') no-repeat center center;
    z-index: 9999999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 1s linear infinite;
    display: none;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }


.lab{
  background: rgb(179, 255, 255);
}

table {
  border-collapse: collapse;
  width: 100%;
  /*display: none;*/
  border: 2px solid black;
}
th{
  padding: 8px;
  background-color:#04AA6D;
  color: white;
  border: 2px solid black;
}
td{
  text-align: center;
  padding: 8px;
  border: 2px dashed black;
}

tr:nth-child(even) {background-color: #f2f2f2;}

.extra{
  font-size: x-small;
  border: 1px dotted green;
}
select{
  font: inherit;
}
h3{
  text-align: center;
}
.univ{
  text-align: center;
  font-size: 50px;
}
#base{
  text-align: right;

}
#base a{
  text-decoration: none;
  background: green;
  color: white;
  padding: 7px;

}
</style>
</head>
<body >

<div class="univ">Varendra Univarsity</div><h3><code>Depertment of CSE</code></h3>
<h3 id="yy">loading...</h3>
<loading id="loader"><!--img height="296" width="296" src="cse.png" alt=""--></loading>
<h3 id="sec"></h3>
<h3 id="effective"></h3>
<div style="overflow-x: auto;">
<table  id="main-table" >
<tr><th>Day/Time</th><th id="time1">9.0 - 10.10</th><th id="time2">10.10 - 11.20</th><th id="time3">11.20 - 12.30</th><th id="time4">12.30 - 1.40</th><th id="time5">2.30 - 3.40</th><th id="time6">3.40 - 4.50</th><th id="time7">4.50 - 6.00</th></tr>
<tr id="Sun"></tr>
<tr id="Mon"></tr>
<tr id="Tue"></tr>
<tr id="Wed"></tr>
<tr id="Thu"></tr>
</table>
</div><br><br><br>
<div id="base"></div>
    <script>
      const sheetID="1IkWnYEBIKQK9Jlkuooo11oEM5mtz9DUc";
    
      var semArray=[];
      window.atext="lll";
      window.array=new Array(100);

 function loadDoc(day="Tue",willPrint=true,givenSemester="4th",givenSection="B",fromCookie=false) {
  
  const xhttp = new XMLHttpRequest();
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const d = new Date();
  let today = weekday[d.getDay()];
  let nextDay;
  if(d.getDay()>3){ nextDay= weekday[0];}else{nextDay = weekday[d.getDay()+1];}
  var extra="";
  if(today==day)extra="<br><span class='extra'>Today</span>";
  if(day==nextDay)extra="<br><span class='extra'>Next Day</span>";
  
  
  xhttp.onload = function() {
     var tr="<td>"+day+extra+"</td>";
   //-- var abc=this.responseText.split("\n");
    var json=JSON.parse(this.responseText.substring(47,this.responseText.length-2));
    if(day=="Sun")document.getElementById("effective").innerHTML= json.table.rows[2].c[0].v;


      
      let sem="";
      let semIter=0;
     
      for(var i=4;i<json.table.rows.length;i++){
     
      var ghi=json.table.rows[i].c;

     
        
      array[i]=new Array(10);
      if(day=="Sun"&&ghi[2]!=null&&ghi[2].v=="A")semArray.push(ghi[1].v);
     var isPreLab=2;
     for(var j=0;j<9;j++){
        if(ghi[1]!=null){sem=ghi[1].v;}
        else ghi[1]={v:sem};
        var td="";
        if(json.table.rows[i].c[j]==null)td="";
        else td=json.table.rows[i].c[j].v;
      
        if(ghi[2]!=null&&ghi[1].v==givenSemester&&ghi[2].v==givenSection){
          if(j>2&&isPreLab>1){
            var sss= "";
            if(/\[.{0,}\] ?\[.{0,}\]/i.test(td)){
             sss=" colspan='2' class='lab' "; 
             isPreLab=0;
            }
            
            tr+="<td "+sss+">"+td+"</td>";
        
        
        
        }
        isPreLab++;
          window.test=ghi;
        }
        if(ghi[j]!=null)array[i][j]=ghi[j].v;
        else array[i][j]="";
        
      }
      
     // alert(tr);
      
  
        


    }
    if(willPrint)document.getElementById(day).innerHTML=tr;
    if(!willPrint){
    var select1="Semester: <select oninput='secHanldler(this.value)' title='Semester' name='sem'><option>Select Semester</option>";
      for(var i=0;i<semArray.length;i++){
        if(fromCookie&&semArray[i]==givenSemester)select1+="<option selected value="+semArray[i]+">"+semArray[i]+"</option>";
        else select1+="<option value="+semArray[i]+">"+semArray[i]+"</option>";
      } 
      select1+="</select>"
    document.getElementById("yy").innerHTML=select1; 
    if(fromCookie)secHanldler(semSec[0],true);
    }
    if(day=="Thu")document.getElementById("loader").style="display:none";
    

    
    }
    xhttp.open("GET", "https://docs.google.com/spreadsheets/d/"+sheetID+"/gviz/tq?tqx=out:json&sheet="+day+"&headers=0", 1);


 
  xhttp.send();
 
return array;
}
function secHanldler(input,fromCookie=false){

  var sections="Section:<select oninput='secOperation(this.value)' ><option>Select Selection</option>";
  console.log(window.array);

  window.array.forEach(function(currentElement, index, arr) {
    var selector="";
 if(fromCookie){let cookieValue=document.cookie.split("=");
  var semSec=cookieValue[1].split(",");
    
}
    if(currentElement[1]==input&&currentElement[2]!=""){
      if(fromCookie){
        let cookieValue=document.cookie.split("=");
        var semSec=cookieValue[1].split(",");
        if(semSec[1]==currentElement[2])sections+="<option selected value='"+input+","+currentElement[2]+"'>"+currentElement[2]+"</option>";
        else sections+="<option value='"+input+","+currentElement[2]+"'>"+currentElement[2]+"</option>";
 
      }
      else
      sections+="<option value='"+input+","+currentElement[2]+"'>"+currentElement[2]+"</option>";
    }
  });
  sections+="</select>";
  document.getElementById("sec").innerHTML=sections;
}

function secOperation(input,fromCookie){
  if(!fromCookie){const d = new Date();
  d.setTime(d.getTime() + (6*30*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = "semData=" + input + ";" + expires + ";path=/";
  }


var semSec=input.split(",");
//alert("Sem: "+semSec[0]+" Sec: "+semSec[1]);
document.getElementById("loader").style="display:block";
loadDoc("Sun",1,semSec[0],semSec[1],fromCookie);


loadDoc("Mon",1,semSec[0],semSec[1],fromCookie);


loadDoc("Tue",1,semSec[0],semSec[1],fromCookie);


loadDoc("Wed",1,semSec[0],semSec[1],fromCookie);


loadDoc("Thu",1,semSec[0],semSec[1],fromCookie);

 

}


if(document.cookie!=""){
 
  let cookieValue=document.cookie.split("=");
  var semSec=cookieValue[1].split(",");
  loadDoc("Sun",false,semSec[0],semSec[1],true);
  secOperation(cookieValue[1],true);
  
}
else {
  loadDoc("Sun",0);
}


document.getElementById("base").innerHTML="<a href='https://docs.google.com/spreadsheets/d/"+sheetID+"'/>Click me</a> for base routine.<br><br>&#x1F12F; Copyleft: 222311079@vu.edu.bd";
        </script>
      
</body>


</html>
