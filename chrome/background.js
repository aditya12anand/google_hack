

// Listen to contextMenu when selected
chrome.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab)
{

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText'))
  {
		var searchURL = findSearchEngin(info.menuItemId);

    var url = '';
		
		if(searchURL != '')
    {
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != '')
    {
			  chrome.tabs.create({url: url});
		}
	}
}


chrome.contextMenus.create({
  id: "cache",
  title: "Cache",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "link",
  title: "Link",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "related",
  title: "Related",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "info",
  title: "Info",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "site",
  title: "Site",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "allintitle",
  title: "Allintitle",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "intitle",
  title: "Intitle",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "allinurl",
  title: "Allinurl",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "inurl",
  title: "Inurl",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "ext",
  title: "Ext",
  contexts: ["selection"]
});


// Find the Search Engine query url to form the url for new tab
function findSearchEngin(searchEngText){

        if(searchEngText == 'cache'){
                return 'https://www.google.co.in/search?q=cache%3A';
        }
        else if(searchEngText == 'link'){
                return 'https://www.google.co.in/search?q=link%3A';
        }
        else if(searchEngText == 'related'){
                return 'https://www.google.co.in/search?q=related%3A';
        }
        else if(searchEngText == 'info'){
                return 'https://www.google.co.in/search?q=info%3A';
        }
        else if(searchEngText == 'site'){
                return 'https://www.google.co.in/search?q=site%3A';
        }
        else if(searchEngText == 'allintitle'){
                return 'https://www.google.co.in/search?q=allintitle%3A';
        }
        else if(searchEngText == 'intitle'){
                return 'https://www.google.co.in/search?q=intitle%3A';
        }
        else if(searchEngText == 'allinurl'){
                return 'https://www.google.co.in/search?q=allinurl%3A';
        }
        else if(searchEngText == 'inurl'){
                return 'https://www.google.co.in/search?q=inurl%3A';
        }
        else if(searchEngText == 'ext'){
                return 'https://www.google.co.in/search?q=ext%3A';
        }
        return '';
}
