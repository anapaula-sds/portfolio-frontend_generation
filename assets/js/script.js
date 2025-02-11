const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub(){

    try{
        const dadosPerfil = await fetch('https://api.github.com/users/anapaula-sds');
        const perfil= await dadosPerfil.json();

        let conteudo = 
          `<img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">

            <article id="about_texto">
                <h2>Sobre Mim</h2>
                <p>Sou Ana Paula Santana da Silva, Formada em Sistemas de Informação pela UNINOVE, estudante de Ciências de Dados na Cruzeiro do Sul e especializada em Desenvolvimento Full Stack Javascript pela Generation Brasil. <br> "Apaixonada por Tecnologia desde criança quando era incentivada pelo Pai a crescer na área" <br> Desde meus 10 anos já incluída no mundo digital, meu pai que é e sempre foi meu maior incentivador, me presenteava desde cedo com computadores, coleções de jogos e Enciclopédias digitais. <br> Em seguida vieram os acessos a Internet e com isso a curiosidade: "-Como que essa magia funciona?". <br> </p>

                <div id="about_github" class="flex about_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao"
                    >
                        Github
                    </a>
                    <p>${perfil.followers}</p>
                    <p>${perfil.public_repos}</p>
                </div>
            </article>
            `;
            sobre.innerHTML += conteudo;

    }catch(error){
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    /*VALIDAÇÃO DO NOME*/

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O campo deve ter no mínimo 3 caracteres";
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = "";
    }

    /*VALIDAÇÃO DO E-MAIL*/

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = "";
    }

    /*VALIDAÇÃO DO ASSUNTO*/
    
    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres";
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = "";
    }

    formulario.submit();
        
});
    getApiGithub();