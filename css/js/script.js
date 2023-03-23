document.getElementById("botaoEnviar").addEventListener("click",validaFromulario )


function validaFromulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "" ){
  alert("Protinho! você receberá as novidades por email.")
    
  }else{
    alert("Por favor, preencha os campos nome, email! e telefone")
    
  }

}