var janela;
function carregarPopUp(){
    var campoTexto = document.getElementById('textoSite');
    
    if(janela && !janela.closed){
        janela.location.href = `https://${campoTexto.value}`;
    }
    else{
        janela = window.open(`https://${campoTexto.value}`, '_blank', 'resizable=no, top=200, left=200, width=300, height=200');
    }
}