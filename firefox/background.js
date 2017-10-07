

// Listen to contextMenu when selected
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findSearchEngin(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "cache",
  title: "Cache",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "link",
  title: "Link",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "related",
  title: "Related",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "info",
  title: "Info",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "site",
  title: "Site",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "allintitle",
  title: "Allintitle",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "intitle",
  title: "intile",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "allinurl",
  title: "Allinurl",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "inurl",
  title: "Inurl",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "ext",
  title: "Ext",
  contexts: ["selection"]
});


// Find the Search Engine query url to form the url for new tab
function findSearchEngin(searchEngText){

        if(searchEngText == 'cache'){
                return 'https://www.google.co.in/search?q=cache:';
        }
        else if(searchEngText == 'link'){
                return 'https://www.google.co.in/search?q=link:';
        }
        else if(searchEngText == 'related'){
                return 'https://www.google.co.in/search?q=related:';
        }
        else if(searchEngText == 'info'){
                return 'https://www.google.co.in/search?q=info:';
        }
        else if(searchEngText == 'site'){
                return 'https://www.google.co.in/search?q=site:';
        }
        else if(searchEngText == 'allintitle'){
                return 'https://www.google.co.in/search?q=allintitle:';
        }
        else if(searchEngText == 'intitle'){
                return 'https://www.google.co.in/search?q=intitle:';
        }
        else if(searchEngText == 'allinurl'){
                return 'https://www.google.co.in/search?q=allinurl:';
        }
        else if(searchEngText == 'intitle'){
                return 'https://www.google.co.in/search?q=intitle:';
        }
        else if(searchEngText == 'ext'){
                return 'https://www.google.co.in/search?q=ext:';
        }
        return '';
}

