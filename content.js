console.log("Welcome");

chrome.runtime.onMessage.addListener(gotMessage);
var list=[];
function gotMessage(message,sender,sendResponse){
   	console.log(message.txt);
	if(message.txt==="record"){
		if(document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.R3Gmyc.qwU8Me > div.WUFI9b > div.CYZUZd > div.VUk8eb > div > span > button")==null){
			document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button").click();
		}
		else{
			document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.R3Gmyc.qwU8Me > div.WUFI9b > div.CYZUZd > div.VUk8eb > div > span > button").click();
			setTimeout(()=>{
				document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button").click()
			},500);
		}

			//your code to be executed after 1 second
		setTimeout(()=>{
			var roll=document.getElementsByClassName("ZjFb7c");
			for(elt of roll){
				list.push(elt.innerHTML);
			}
		},500);
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
