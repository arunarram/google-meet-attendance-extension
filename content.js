console.log("HI");

chrome.runtime.onMessage.addListener(gotMessage);
var list=[];
function gotMessage(message,sender,sendResponse){
   	console.log(message.txt);
	if(message.txt==="record"){
		var roll=document.getElementsByClassName("ZjFb7c");
		for(elt of roll){
			list.push(elt.innerHTML);
		}
	}
	if(message.txt==="copy"){
		var newlist=[...new Set(list)].sort(function(a,b) {
		a = a.toLowerCase();
		b = b.toLowerCase();
		if( a == b) return 0;
		if( a > b) return 1;
		return -1;
		});
		var str="";
		for(i of newlist){
			str=str+i+"\n";
		}
		str=str+" total = "+newlist.length;
		let inputElement=document.createElement('textarea');
		inputElement.innerHTML=str;
		document.body.appendChild(inputElement);
		inputElement.select();
		document.execCommand('copy');
		inputElement.parentNode.removeChild(inputElement);
		console.log(str);
		alert("Total Attendance = "+newlist.length);
	}
}