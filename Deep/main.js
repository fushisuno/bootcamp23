const btn_sub = document.querySelector(".btnEnviar")

btn_sub.addEventListener("click", (e)=>{
    e.preventDefault();
    let email = document.querySelector(".inName");
    let senha = document.querySelector(".inSenha");
    

    swal.fire({
        icon: 'success',
        title: 'Dados Roubados haha',
        text: `Email: ${email.value}                 Senha: ${senha.value}`,
        showConfirmButton: false,
    });

    document.getElementById('inName').value = '';
    document.getElementById('inSenha').value = '';
});