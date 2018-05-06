

$(function () {

    alert("asdfasdfasdfaDF");
    
    var HOST = location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(HOST);
    var el = document.getElementById('server-time');
    ws.onmessage = function (event) {
    el.innerHTML = 'CurrentTime: ' + event.data;
    };

 });