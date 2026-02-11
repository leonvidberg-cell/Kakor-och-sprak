let cookies = navigator.cookieEnabled;
document.getElementById('demo').innerHTML = "Cookies enabled: " + cookies

let language = navigator.language;
document.getElementById('språk').innerHTML = "Browser language: " + navigator.language

let agent = navigator.userAgent;
document.getElementById('agent').innerHTML = "User-agent header: " + navigator.userAgent
