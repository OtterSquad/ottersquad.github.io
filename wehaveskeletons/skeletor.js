function skeleton_enable(){
	//
	//skeleton variables and skeleton arrays
	var skeletor_doc_width;
	var skeletor_doc_height;
	var skeletor_timer;
	var skeletor_path = "wehaveskeletons/skeletors/"
	var skeleton_arr = ["IMG_SKELETON01.gif", "IMG_SKELETON02.gif", "IMG_SKELETON03.gif"];
	var skeleton_msg_arr = ["THIS MODERN WEBSITE IS SKELETON ENABLED", "WELCOME TO THE SKELETON ENABLED WEB", "THIS WEBSITE SUPPORTS SKELETONS", "YOU ARE RUNNING A SKELETON ENABLED WEBSITE"];
	var skeleton_cnt = 0;
	var skeleton_width = 0;//not in use, but could be
	var skeleton_height = 0;//not in use, but could be
	var maximum_skeletons = 20;//how many skeletons, too many is intense and the web is not ready for this
	//
	document.write("<div id=\"skeletor\" style=\"position: absolute; z-index: 999; visibility: visible; top: 5px; left: 5px;\"><\/div>");
	//
	//the skeletons
	var skeleton_element = document.getElementById('skeletor');
	var skeleton_img;
	//
	document.write("<span style=\"color:orange;\">"+'*'+skeleton_msg_arr[Math.ceil(Math.random()*skeleton_msg_arr.length)-1]+'*'+"</span>");
	//
	function skeletor_roam(){
		//append new skeleton
		if(Math.random()*100>50){
			//
			skeleton_img = document.createElement('img');
			//
			skeleton_img.setAttribute('src', skeletor_path+skeleton_arr[Math.ceil(Math.random()*skeleton_arr.length)-1]);
			skeleton_element.appendChild(skeleton_img);
			//
			skeleton_width = document.getElementById("skeletor").clientWidth;
			skeleton_height = document.getElementById("skeletor").clientHeight;
			//
			//clear on maximum skeleton, otherwise skeleton overflow
			if(skeleton_cnt > maximum_skeletons){
				//remove all skeletons so skeletons can start over. this is a natural life and death cycle
				while (skeleton_element.firstChild) {
			    	skeleton_element.removeChild(skeleton_element.firstChild);
				}
				skeleton_cnt = 0;
			}
			//
		};
		//
		//update the bounds. skeleton respects boundaries
		skeletor_doc_width = window.innerWidth;
		skeletor_doc_height = window.innerHeight;
		//place the skeletons somewhere on the pate, skeletons are made to roam, you cannot control this
		document.getElementById("skeletor").style.top=((Math.random()*skeletor_doc_width))+"px";
		document.getElementById("skeletor").style.left=((Math.random()*skeletor_doc_height))+"px";
		//
		//count the skeletons, skeletons must be managed
		skeleton_cnt += 1;
		//
		//
	}
	//skeleton timer for efficient skeleton movement
	skeletor_timer = setInterval(skeletor_roam, 500);
	//
	console.log("░░░░░░░░░░░░▄▐");
	console.log("░░░░░░▄▄▄░░▄██▄");
	console.log("░░░░░▐▀█▀▌░░░░▀█▄");
	console.log("░░░░░▐█▄█▌░░░░░░▀█▄");
	console.log("░░░░░░▀▄▀░░░▄▄▄▄▄▀▀");
	console.log("░░░░▄▄▄██▀▀▀▀");
	console.log("░░░█▀▄▄▄█░▀▀");
	console.log("░░░▌░▄▄▄▐▌▀▀▀");
	console.log("▄░▐░░░▄▄░█░▀▀");
	console.log("▀█▌░░░▄░▀█▀░▀");
	console.log("░░░░░░░▄▄▐▌▄▄");
	console.log("░░░░░░░▀███▀█░▄");
	console.log("░░░░░░▐▌▀▄▀▄▀▐▄");
	console.log("░░░░░░▐▀░░░░░░▐▌");
	console.log("░░░░░░█░░░░░░░░█");
	console.log("░░░░░▐▌░░░░░░░░░█");
	console.log("░░░░░█░░░░░░░░░░▐▌");
	//
}
//
//this starts the skeleton process
function skeleton_start(){
	//for best UX, warn them of skeletons if on mobile. mobile is sensitive business.
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
		//
		var skeleton_alert = confirm("This website supports skeletons. Would you like to skeleton enable this website?");
		if (skeleton_alert == true) {
		    skeleton_enable();
		}else{
			//express disapointment
		}
		//
	}else{
		skeleton_enable();
	}
	//
}
//
skeleton_start();//skeleton enable this website, now
