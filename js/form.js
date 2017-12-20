


$(document).ready(function() {
	$('#enviar').on('click', function(e) {

		e.preventDefault();

	var nome = $("#name").val(); 
	var email = $("#email").val();
	var telefone = $("#phone").val();
	var mensagem = $("#notice").val();

//validando os campos do formulário
if(nome==""){
	alert("Favor preencher o campo...");
	return false;
}

if(email==""){
	alert("Favor preencher o campo...");
	return false;
}

if(telefone==""){
	alert("Favor preencher o campo...");
	return false;
}

if(mensagem==""){
	alert("Favor preencher o campo...");
	return false;
}

//todos campos corretos exibir dados enviados com sucesso
alert("Dados enviados com sucesso...");

	//colocando os dados em um objeto
	var Cadastro = {
					nome:nome,
					email:email,
					telefone:telefone,
					mensagem:mensagem
					};



			$.ajax({

				type:'POST',
				url:'http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents',
				dataType: 'json',
      			contentType: 'application/json',
				data: JSON.stringify(Cadastro),

				success: function (data){
					//sucesso

					console.log("enviou com sucesso");
				},
				error: function(data,xhr, status){
					//erro
					console.log(data);
					console.log("Erro no envio..");
				},
				complete: function(){
					//ao final
				}

		});  
		
console.log(Cadastro);
		//fim do ajax

	//limpa os campos
	limparTela()	
	});
}); 	



//função para o carrossel mudar imagem a cada 3 segundos
function TempoCarrossel(){
	$('.carousel').carousel({
	  interval: 3000
	});
}


//função para limpar campo
function limparTela(){

	 $("#name").val("");
	 $("#email").val("");
	 $("#phone").val("");
	 $("#notice").val("");	
}






