document.getElementById('record').addEventListener("click",recordclick);
document.getElementById('copy').addEventListener("click",copyclick);
function recordclick(){
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	console.log("rc");
	let msg={
		txt:"record"
	}	
	document.getElementById("status").innerHTML = "recorded";
    chrome.tabs.sendMessage(activeTab.id, msg);
   });
}
function copyclick(){
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	console.log("cp");
	let msg={
		txt:"copy"
	}
	document.getElementById("status").innerHTML = "copied";
    chrome.tabs.sendMessage(activeTab.id, msg);
   });
}

