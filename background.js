function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}

chrome.contextMenus.onClicked.addListener( function (info) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {}, function(response) {
            saveToClipboard(response.url);
        });
    });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "copy decoded URL",
    "id": "copy_decoded_URL"
  });
});
