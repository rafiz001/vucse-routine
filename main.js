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
     for(var j=0;j<=9;j++){
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
      
