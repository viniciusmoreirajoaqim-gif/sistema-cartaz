// =========================================
// CONTROLE DE LOGIN
// =========================================
const USUARIO_CORRETO = "5627846";
const SENHA_CORRETA = "KannonBirakiBenehimeAratame";
const CHAVE_STORAGE = "geradorCartazesProdutos_v2";

const produtosPadrao = {
    "7896274600021": {
        codigo: "7896274600021",
        interno: "109304",
        nome: "Mac Nissin 85g Monica",
        preco: 2.49,
        unidade: "UNIDADE",
        qtdMinima: null,
        precoAtacado: null
    },
    "7891234567890": {
        codigo: "7891234567890",
        interno: "601802",
        nome: "Açúcar Cristal Alto Alegre 5kg",
        preco: 16.89,
        unidade: "UNIDADE",
        qtdMinima: 3,
        precoAtacado: 16.49
    }
};

function carregarProdutos() {
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    if (!salvo) {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(produtosPadrao));
        return { ...produtosPadrao };
    }
    try {
        return JSON.parse(salvo);
    } catch (erro) {
        return { ...produtosPadrao };
    }
}

let produtos = carregarProdutos();

function verificarLogin() {
    const logado = sessionStorage.getItem("cartazLogado");
    const telaLogin = document.getElementById("tela-login");
    if (!telaLogin) return;

    if (logado === "sim") {
        telaLogin.style.display = "none";
        const inputBipar = document.getElementById("input-bipar");
        if (inputBipar) inputBipar.focus();
    } else {
        telaLogin.style.display = "flex";
    }
}

const formLogin = document.getElementById("form-login");
if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();
        const user = document.getElementById("login-usuario").value.trim();
        const pass = document.getElementById("login-senha").value.trim();
        const msgErro = document.getElementById("login-erro");

        if (user === USUARIO_CORRETO && pass === SENHA_CORRETA) {
            sessionStorage.setItem("cartazLogado", "sim");
            if (msgErro) msgErro.textContent = "";
            verificarLogin();
        } else if (msgErro) {
            msgErro.textContent = "Usuário ou senha incorretos!";
        }
    });
}

function fazerLogout() {
    sessionStorage.removeItem("cartazLogado");
    const userInput = document.getElementById("login-usuario");
    const passInput = document.getElementById("login-senha");
    if (userInput) userInput.value = "";
    if (passInput) passInput.value = "";
    verificarLogin();
}

// =========================================
// TAMANHO, DATA E RENDERIZAÇÃO DO CARTAZ
// =========================================
function atualizarDataCartaz() {
    const elData = document.getElementById("cartaz-data");
    if (!elData) return;
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();
    elData.textContent = `${dia}/${mes}/${ano}`;
}

function mudarTamanho() {
    const select = document.getElementById("select-tamanho");
    const cartaz = document.getElementById("cartaz");
    if (!select || !cartaz) return;

    cartaz.classList.remove("modo-a5-h", "modo-a3-h");
    if (select.value === "a3-h") {
        cartaz.classList.add("modo-a3-h");
    } else {
        cartaz.classList.add("modo-a5-h");
    }
}

function formatarMoedaPartes(valor) {
    const numero = Number(valor) || 0;
    const partes = numero.toFixed(2).split(".");
    return {
        inteiro: partes[0],
        centavos: partes[1]
    };
}

function renderizarCartaz(produto) {
    if (!produto) return;

    const layoutAproveite = document.getElementById("layout-aproveite");
    const layoutLevePague = document.getElementById("layout-leve-pague");
    const unidadeTexto = (produto.unidade || "UNIDADE").toUpperCase();
    const partesPrecoUnit = formatarMoedaPartes(produto.preco);

    const qtd = Number(produto.qtdMinima);
    const preco3 = Number(produto.precoAtacado);
    const temPreco3 = qtd >= 2 && preco3 > 0;

    document.getElementById("cartaz-interno").textContent = produto.interno || "";
    atualizarDataCartaz();

    if (temPreco3) {
        const partesPreco3 = formatarMoedaPartes(preco3);

        if (layoutAproveite) layoutAproveite.style.display = "none";
        if (layoutLevePague) layoutLevePague.style.display = "flex";

        document.getElementById("lp-nome").textContent = produto.nome;
        document.getElementById("lp-unidade-esq").textContent = unidadeTexto;
        document.getElementById("lp-unidade-dir").textContent = unidadeTexto;

        document.getElementById("lp-unit-inteiro").textContent = partesPrecoUnit.inteiro;
        document.getElementById("lp-unit-centavos").textContent = partesPrecoUnit.centavos;

        document.getElementById("lp-regra-texto").textContent = `COMPRANDO A PARTIR DE ${qtd} UNIDADES`;
        document.getElementById("lp-promo-inteiro").textContent = partesPreco3.inteiro;
        document.getElementById("lp-promo-centavos").textContent = partesPreco3.centavos;
    } else {
        if (layoutLevePague) layoutLevePague.style.display = "none";
        if (layoutAproveite) layoutAproveite.style.display = "flex";

        document.getElementById("cartaz-nome").textContent = produto.nome;
        document.getElementById("cartaz-unidade").textContent = unidadeTexto;
        document.getElementById("cartaz-inteiro").textContent = partesPrecoUnit.inteiro;
        document.getElementById("cartaz-centavos").textContent = partesPrecoUnit.centavos;
    }
}

// =========================================
// BIPAR E CADASTRAR PRODUTOS
// =========================================
const inputBipar = document.getElementById("input-bipar");
const msgErroBipar = document.getElementById("mensagem-erro");

function buscarEExibirProduto(codigoDigitado) {
    const codigo = codigoDigitado.trim();
    if (!codigo) return;

    const encontrado = produtos[codigo];
    if (encontrado) {
        if (msgErroBipar) msgErroBipar.textContent = "";
        renderizarCartaz(encontrado);
    } else if (msgErroBipar) {
        msgErroBipar.textContent = `Produto não encontrado para o código: ${codigo}`;
    }
}

if (inputBipar) {
    inputBipar.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            buscarEExibirProduto(inputBipar.value);
            inputBipar.value = "";
        }
    });

    inputBipar.addEventListener("change", function () {
        if (inputBipar.value.trim().length >= 6) {
            buscarEExibirProduto(inputBipar.value);
            inputBipar.value = "";
        }
    });
}

const formCadastro = document.getElementById("form-cadastro");
if (formCadastro) {
    formCadastro.addEventListener("submit", function (e) {
        e.preventDefault();

        const codigo = document.getElementById("cad-codigo").value.trim();
        const interno = document.getElementById("cad-interno").value.trim();
        const nome = document.getElementById("cad-nome").value.trim();
        const preco = parseFloat(document.getElementById("cad-preco").value);
        const unidade = document.getElementById("cad-unidade").value.trim().toUpperCase();
        const qtdRaw = document.getElementById("cad-qtd-minima").value.trim();
        const precoAtacRaw = document.getElementById("cad-preco-atacado").value.trim();

        const qtdMinima = qtdRaw ? parseInt(qtdRaw, 10) : null;
        const precoAtacado = precoAtacRaw ? parseFloat(precoAtacRaw) : null;

        if (!codigo || !nome || isNaN(preco)) return;

        const novoProduto = {
            codigo,
            interno,
            nome,
            preco,
            unidade: unidade || "UNIDADE",
            qtdMinima: qtdMinima && qtdMinima >= 2 ? qtdMinima : null,
            precoAtacado: precoAtacado && precoAtacado > 0 ? precoAtacado : null
        };

        produtos[codigo] = novoProduto;
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(produtos));

        renderizarCartaz(novoProduto);
        formCadastro.reset();
        if (msgErroBipar) msgErroBipar.textContent = "";
        if (inputBipar) inputBipar.focus();
    });
}

// Inicialização
atualizarDataCartaz();
mudarTamanho();
renderizarCartaz(produtos["7896274600021"]);
verificarLogin();