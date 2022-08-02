function ShowModal(){
    let cu = document.getElementById("modal")
    cu.classList.add("modal-show")

   
}
function HideModal(){
    let cu = document.getElementById("modal")
    cu.classList.remove("modal-show")
}

let Username = document.getElementById("Username")
let senha = document.getElementById("senha")
let confirmSenha = document.getElementById("confirmarSenha")
let email = document.getElementById("Email")
let UsersObjeto = {}
let users = []

function cadastroUsuario(){


    users = JSON.parse(localStorage.getItem("usuarios")) 

    if(users == null){ 
        users = []
        if(Username.value != "" && senha.value != "" && email.value != "" && confirmSenha.value != ""){ 
            if(senha.value == confirmSenha.value){
            UsersObjeto = {
                nome: Username.value,
                senha: senha.value,
                email: email.value
            }
            console.log(UsersObjeto)
            users.push(UsersObjeto)
            localStorage.setItem("usuarios", JSON.stringify(users))
            HideModal()
            
        }
        else{
            alert("Senhas não combinam")
        }}
        else{
            alert("Preencha todos os espaços")
        }
            
    }
    else{ 
        if(Username.value != "" && senha.value != "" && email.value != "" && confirmSenha.value != ""){ 
        if(senha.value == confirmSenha.value){
            UsersObjeto = {
                nome: Username.value,
                senha: senha.value,
                email: email.value
            }
            console.log(UsersObjeto)
            users.push(UsersObjeto)
            localStorage.setItem("usuarios", JSON.stringify(users))
            HideModal()
        }
        else{
            alert("Senhas não combinam")
        }}
        else{
            alert("Preencha todos os espaços")
        }

}
    }


let nomeLogin = document.getElementById("nomeLogin")
let senhaLogin = document.getElementById("senhaLogin")    

function logar(){

    users = JSON.parse(localStorage.getItem("usuarios")) 
    for(i = 0; i < users.length; i++){
      
        if(nomeLogin.value == users[i].nome){
            
            let index = i
            
            if(senhaLogin.value == users[index].senha){
                alert("logado")   
                window.location.href = "in.html"
                let usuarioLogado 
                usuarioLogado = users[index]
                localStorage.setItem("usuárioLogado", JSON.stringify(usuarioLogado))
            }
            else{
                alert("senha está errada")
            }
            
            
        }
       if(nomeLogin.value == "" && senhaLogin.value == ""){
            alert("Escreva todos os espaços")
       }
       else if (nomeLogin.value != users[i].nome){
        alert("O usuário digitado não existe")
       }
       
    }
   
}