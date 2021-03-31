function getValues(){
    var a = document.querySelector('#a').checked,
        b = document.querySelector('#b').checked,
        c = document.querySelector('#c').checked;

    return {a, b, c};
}

function setState(){
    var values = getValues();
    history.pushState({ values }, 'checkboxes');
}

window.onpopstate = function(){
    var values = history.state.values;

    document.querySelector('#a').checked = values.a;
    document.querySelector('#b').checked = values.b;
    document.querySelector('#c').checked = values.c;
}

/*

//A função back() faz com que o usuário seja redirecionado para a página anterior que havia sido acessada
history.back()

//A função forward() faz com que o usuário seja redirecionado para a página a fente que havia sido acessada
history.forward()

//A função go, quando recebe 1 é referente a função forward, e quando recebe -1, go(-1), fica semelhante a função back()
history.go(-1);
history.go(1);
*/