
function limps() {
    document.getElementById('resp').value = "";
};

function insert(num) {
    //escreve dentro do inpu => .value
    var numero = document.getElementById('resp').value;
    document.getElementById('resp').value = numero + num;
};


function calcular() {
    var resp = document.getElementById('resp').value;
    if(resp) {
        document.getElementById('resp').value = eval(resp);
    }
    
};

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }