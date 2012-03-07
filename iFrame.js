function back()
{
	//goes back a page and updates the favicon.ico and iframe
	window.history.back();
	document.getElementById("address").value=document.getElementById("iframe").src;
	updateImg();
}

function forward()
{
	window.history.forward();
	document.getElementById("address").value=document.getElementById("iframe").src;
	updateImg();
}

function go()
{
	document.getElementById("iframe").src=document.getElementById("address").value
	updateImg();
}

function refresh()
{	
	/*refreshing by making the address bar equal the iframe, not the other way around because we don't care about the 
	Address bar. We want to refresh the page we are on now.
	*/
	document.getElementById("address").value=document.getElementById("iframe").src;
	go();
}

function search()
{
	//if it's bing, we turn the spaces into '+' and send it off
	var s = document.getElementById("searchBar").value;
	var search=s.split(" ");
	var searchURL="";
	
	if(document.getElementById("searchEngineBox").value=="Search with Bing")
	{
		for(var i=0; i<search.length; i++)
		{
			searchURL = searchURL + "+" + search[i];
		}
		searchURL = "http://www.bing.com/search?q=" + searchURL;
		document.getElementById("address").value=searchURL;
		go();
	}
	//for yahoo we just use encodeURIcomponent() because yahoo needs UTF-8 for special characters
	else
	{
		searchURL="http://www.search.yahoo.com/search?p=" + encodeURIComponent(s);
		document.getElementById("address").value=searchURL;
		go();
	}
}

function updateBox()
{
	document.getElementById("searchBar").placeholder=document.getElementById("searchEngineBox").value;
	if(document.getElementById("searchBar").placeholder == "Search with Bing")
	{
		document.getElementById("searchImg").src="http://www.bing.com/favicon.ico";
	}
	
	else
	{
		document.getElementById("searchImg").src="http://www.yahoo.com/favicon.ico"
	}
}

function setSize()
{
	//prompts for setting the window size
	var width=prompt("Current width is: " + document.getElementById("iframe").width + "\rEnter new width, in pixels:", "");
	if(width!=null && width!="")
	{
		document.getElementById("iframe").width=width;
	}
	
	var height=prompt("Current height is: " + document.getElementById("iframe").height +"\rEnter new height, in pixels:", "");
	if(height!=null && height!="")
	{
		document.getElementById("iframe").height=height;
	}
}

function updateImg()
{
	//getting the root url and finding favicon.ico
	var URL=document.getElementById("address").value;
	var subURL=URL.split("/");
	var rootURL=subURL[2];
	document.getElementById("webImg").src=rootURL + "/favicon.ico";
}