javascript:(function(){

	if(document.getElementById('vidNotePar')==null) init();
	else document.getElementById("vidNotePar").setAttribute("style","position:absolute;top:50px;right:0px;opacity:80%;background-color:lightblue;width:25%;height:55%;z-index:100000;");
	init();

	function init() { 
	  var scriptText = '\
	  function submit(){ var el=document.getElementById("notes"); var uname = prompt("User:"); \
	  var tmp={"user":uname,"notes":notes,"videoID":window.location.href.split("watch?v=")[1]}; tmp = JSON.stringify(tmp); alert(tmp);\
	  } \
	  var notes={}; var videoEl=null; var msgEl =null; \
	  function seek(x) { videoEl.currentTime=x; } \
	  function getVideoEl() { videoEl=document.getElementsByTagName("video")[0]; } \
	  function addNote(txt) { \
		if(videoEl == null){   var tim = new Date();   tim = tim.toTimeString().slice(0,9);   } else {     var tim = videoEl.currentTime;   }\
		var el =document.getElementById("notes"); el.innerHTML = "<table>"; notes[""+tim]=txt; \
		for(var k in notes){ \
		el.innerHTML+="<tr onclick=\'seek("+parseFloat(k)+")\'><td >"+k+"</td><td>"+notes[k]+"</td></tr>"; \
		} el.innerHTML+="</table>";\
	  } \
	  function getVideoEl() { var els=document.getElementsByTagName("video"); if(els.length==1) videoEl = els[0]; } \
	  function getNote(){   var retVal = prompt("Enter note here:");   addNote(retVal); } \
	  function closeNotes(){ document.getElementById("vidNotePar").setAttribute("style","diplay:none;");}'
	  
	  var nod = document.createElement("script");
	  nod.innerHTML = scriptText;  
	  var head = document.getElementsByTagName("head")[0]; 
	  head.appendChild(nod);    
	  
	  var par = document.createElement('div'); 
	  par.setAttribute("style","position:absolute;top:50px;right:0px;opacity:80%;background-color:lightblue;width:25%;height:55%;z-index:100000;");  
	  par.setAttribute("id","vidNotePar");
	  
	  var el = document.createElement('div'); 
	  el.innerHTML = '<button onclick="closeNotes()" style="position:relative;float:right;margin-left:10px;margin-right:10px;">Close</button>'; 
	  el.innerHTML+= '<button onclick="getNote()" style="position:relative;float:right;margin-left:10px;margin-right:10px;">Add Note</button>'; 
	  el.innerHTML+= '<button onclick="submit()" style="position:relative;float:right;margin-left:10px;margin-right:10px;">Submit</button>'; 
	  el.setAttribute("style","width:100%;display:block;height:20px;");
	  par.appendChild(el);  
	  
	  msgEl = document.createElement('div'); 
	  msgEl.setAttribute("style","width:100%;display:block;");
	  msgEl.setAttribute("id","vidNote"); 
	  msgEl.innerHTML = '<table id="notes"></table>'; 
	  par.appendChild(msgEl);   
	  
	  var body = document.getElementsByTagName("body")[0]; 
	  body.appendChild(par); 
	  getVideoEl();
	  
	  addNote("msg 1"); 
	  addNote("msg 2");	 
	}  
})()
