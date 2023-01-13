
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

