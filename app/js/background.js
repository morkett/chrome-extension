chrome.contextMenus.create({
  'title': 'Copy Magnet Link',
  'contexts': ['link'],
  'onclick': CopyOnClick
});

function CopyOnClick(target) {
  var magnetLink = target.linkUrl;


  var copyLink = function(url) {

    var phantomEl = document.createElement('div');
    phantomEl.contentEditable = true;
    document.body.appendChild(phantomEl);
    phantomEl.innerHTML = 'peerflix ' + '\'' + url.substring(0, url.indexOf('&')) + '\'' + ' --vlc';
    phantomEl.innerHTML = phantomEl.textContent;

    phantomEl.unselectable = 'off';
    phantomEl.focus();
    document.execCommand('SelectAll');
    document.execCommand('Copy', false, null);
    document.body.removeChild(phantomEl);
  };

  copyLink(magnetLink);

}
