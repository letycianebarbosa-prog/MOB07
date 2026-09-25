/* =========================
   SELECIONAR PLANO
========================= */

function irParaCadastro(plano) {

    localStorage.setItem(
        "planoEscolhido",
        plano
    );

    const campoPlano =
        document.getElementById("planoEscolhido");

    campoPlano.textContent =
        "Plano selecionado: " + plano;

    campoPlano.style.display = "block";

    document
        .getElementById("cadastro")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   CRIAR CONTA
========================= */

function criarConta() {

    const nome =
        document
            .getElementById("nomeCadastro")
            .value
            .trim();

    const email =
        document
            .getElementById("emailCadastro")
            .value
            .trim();

    const senha =
        document
            .getElementById("senhaCadastro")
            .value;

    const confirmar =
        document
            .getElementById("confirmarSenha")
            .value;

    const mensagem =
        document.getElementById("mensagemCadastro");


    mensagem.className = "mensagem-cadastro";


    if (!nome || !email || !senha || !confirmar) {

        mensagem.textContent =
            "Preencha todos os campos.";

        mensagem.classList.add("erro");

        return;
    }


    if (senha.length < 6) {

        mensagem.textContent =
            "A senha precisa ter pelo menos 6 caracteres.";

        mensagem.classList.add("erro");

        return;
    }


    if (senha !== confirmar) {

        mensagem.textContent =
            "As senhas não são iguais.";

        mensagem.classList.add("erro");

        return;
    }


    const usuario = {

        nome: nome,

        email: email,

        plano:
            localStorage.getItem("planoEscolhido")
            || "Conta grátis"
    };


    localStorage.setItem(
        "usuarioMeuSite",
        JSON.stringify(usuario)
    );


    mensagem.textContent =
        "✅ Cadastro realizado com sucesso!";

    mensagem.classList.add("sucesso");


    document.getElementById("nomeCadastro").value = "";

    document.getElementById("emailCadastro").value = "";

    document.getElementById("senhaCadastro").value = "";

    document.getElementById("confirmarSenha").value = "";
}


/* =========================
   FALE CONOSCO
========================= */

function enviarMensagem() {

    const nome =
        document
            .getElementById("nomeContato")
            .value
            .trim();

    const email =
        document
            .getElementById("emailContato")
            .value
            .trim();

    const assunto =
        document
            .getElementById("assuntoContato")
            .value
            .trim();

    const mensagem =
        document
            .getElementById("mensagemContato")
            .value
            .trim();


    if (
        !nome ||
        !email ||
        !assunto ||
        !mensagem
    ) {

        alert(
            "Preencha todos os campos antes de enviar."
        );

        return;
    }


    alert(
        "Mensagem preenchida com sucesso!"
    );
}