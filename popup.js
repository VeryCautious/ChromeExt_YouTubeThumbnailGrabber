'use strict';

let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element) {
		
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	const urlParams = new URLSearchParams(tabs[0].url.split("?")[1]);
	if (urlParams.has('v')){
		const video = urlParams.get('v');
		var url = "http://i3.ytimg.com/vi/"+video+"/maxresdefault.jpg";
		chrome.tabs.create({"url": url});
	}else{
		changeColor.innerHTML = "This is not a video...";
	}
  });
};
