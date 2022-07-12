function validar2(){
	if(document.form.nome.value==''){
		alert('O campo nome, precisa ser preenchido!');
		document.form.nome.focus();
		return;
	}

	if(document.form.email.value==''){
		alert('O campo e-mail, precisa ser preenchido!');
		document.form.email.focus();
		return;
	}

	if(document.form.assunto.value==''){
		alert('O campo assunto, precisa ser preenchido!');
		document.form.assunto.focus();
		return;
	}

	if(document.form.mensagem.value==''){
		alert('O campo mensagem, precisa ser preenchido!');
		document.form.mensagem.focus();
		return;
	}

	document.form.action='enviado.html';
	document.form.submit();
}



function voltar(){
	//history.back();
	document.form.action='index.html';
	document.form.submit();
}


function limparDados(){
	document.form.reset()
}



function validar3(){
	var msgE = "Favor preencher o campo";

	if(document.getElementById("nome").value == "" ){
		mensagem(msgE, 'nome');	
		return;	
	}

	if(document.getElementById("email").value == "" ){
		mensagem(msgE, 'email');
		return;		
	}

	if(document.getElementById("assunto").value == "" ){
		mensagem(msgE, 'assunto');	
		return;	
	}

	if(document.getElementById("mensagem").value == "" ){
		mensagem(msgE, 'mensagem');	
		return;	
	}

	document.form.action='enviado.html';
	document.form.submit();
}


function mensagem(msg, campo){
	console.log(campo);

	document.getElementById(campo).focus();

	var campoMSG = document.getElementById('msgErro');
	campoMSG.style.display="block";

	campoMSG.innerHTML= msg +' ' + campo +'!';
	campoMSG.style.backgroundColor = 'red';
	campoMSG.style.textAlign = 'center';
	campoMSG.style.height = '60px';

}



function mudarCor(qualCor){
	var campoFormulario = document.getElementsByClassName('conteudo')[0];
	var campoCabecalho = document.getElementsByClassName('cabecalho')[0];
	var campoAcao = document.getElementsByClassName('acao')[0];                             
	var camposInputs = document.getElementsByClassName('conteudo')[0];
	var contador = document.getElementsByClassName('conteudo')[0].childElementCount;

	if(qualCor == 4){
		campoFormulario.style.backgroundColor = 'blue';
		campoCabecalho.style.backgroundColor = '#172068';
		campoAcao.style.backgroundColor = '#172068';

		for(var i = 0 ; i < contador; i++) {
			camposInputs.children[i].children[1].style.backgroundColor = '#172068'
		};
	}

	if(qualCor == 3){
		campoFormulario.style.backgroundColor = 'green';
		campoCabecalho.style.backgroundColor = '#0a4123';
		campoAcao.style.backgroundColor = '#0a4123';

		for(var i = 0 ; i < contador; i++) {
			camposInputs.children[i].children[1].style.backgroundColor = '#0a4123'
		};
	}

	if(qualCor == 2){
		campoFormulario.style.backgroundColor = 'tomato';
		campoCabecalho.style.backgroundColor = 'red';
		campoAcao.style.backgroundColor = 'red';
		

		for(var i = 0 ; i < contador; i++) {
			camposInputs.children[i].children[1].style.backgroundColor = 'red'
		}
	}

	if(qualCor == 1){
		campoFormulario.style.backgroundColor = '#333';
		campoCabecalho.style.backgroundColor = '#666';
		campoAcao.style.backgroundColor = '#666';

		//mudaCorInput('#666');

		for(var i = 0 ; i < contador; i++) {
			camposInputs.children[i].children[1].style.backgroundColor = '#666'
		};
	}


}


function mudaCorInput(qualeACor){
		for(var i = 0 ; i < contador; i++) {
			camposInputs.children[i].children[1].style.backgroundColor = qualeACor
		};
} 