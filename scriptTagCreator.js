function injectScript(file) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    s.async = false;
    document.documentElement.appendChild(s);
}
injectScript(chrome.extension.getURL('myscript.js'));
