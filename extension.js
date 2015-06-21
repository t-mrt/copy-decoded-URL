chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
      var url = decodeURI( location.href );
      sendResponse({url: url});
  }
);
