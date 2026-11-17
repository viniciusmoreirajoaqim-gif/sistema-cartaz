// Lista completa de produtos extraída do encarte
const produtosPadrao = {
    "7896274600021": { interno: "001", nome: "Arroz Coroa 5kg", preco: 15.98, unidade: "UNIDADE" },
    "7898007290165": { interno: "002", nome: "Feijao Carioca Pontarollo 1kg", preco: 7.99, unidade: "UNIDADE" },
    "7896534400323": { interno: "003", nome: "Farinha Trigo Globo 1kg", preco: 2.89, unidade: "UNIDADE" },
    "7896045523412": { interno: "004", nome: "Cerveja Heineken 350ml Lata", preco: 4.69, unidade: "UNIDADE" },
    "7891991002561": { interno: "005", nome: "Refrig Antarctica 1l Guarana Pet", preco: 3.79, unidade: "UNIDADE" },
    "581747": { interno: "006", nome: "Contra File Bov Resfr Pedaco Kg", preco: 54.90, unidade: "KG" },
    "315303": { interno: "007", nome: "Coxao Mole Bov Resfr Peca", preco: 49.90, unidade: "KG" },
    "147729": { interno: "008", nome: "Musculo Bov Resfr Traseiro Kg", preco: 39.90, unidade: "KG" },
    "2776952": { interno: "009", nome: "Costela Bov Minga Friboi Chef Cong Kg", preco: 23.90, unidade: "KG" },
    "945838": { interno: "010", nome: "File Peito Fgo Cong Kg", preco: 15.90, unidade: "KG" },
    "925411": { interno: "011", nome: "Ling Toscana Frimesa Resfriada Kg", preco: 14.98, unidade: "KG" },
    "7891000426210": { interno: "012", nome: "Achoc Po Nescau L350G P330G", preco: 7.99, unidade: "UNIDADE" },
    "7896699200073": { interno: "013", nome: "Cafe Jandaia 500g Vacuo", preco: 21.90, unidade: "UNIDADE" },
    "7896022200350": { interno: "014", nome: "Mac Galo 500g Semola Padre Nosso", preco: 3.59, unidade: "UNIDADE" },
    "7896036098981": { interno: "015", nome: "Molho Tom Pomodoro 300g Tradicional", preco: 1.49, unidade: "UNIDADE" },
    "7891031412091": { interno: "016", nome: "Maionese Hemmer 930g Trad", preco: 14.90, unidade: "UNIDADE" },
    "7891150198807": { interno: "017", nome: "Lava Roupa Omo 1,4kg Lavagem Perfeita", preco: 17.98, unidade: "UNIDADE" },
    "7896098901564": { interno: "018", nome: "Amac Ype 1,5l Conc Pink", preco: 16.90, unidade: "UNIDADE" },
    "7896527700751": { interno: "019", nome: "Lava Louca Triex 500ml Neutro", preco: 1.79, unidade: "UNIDADE" },
    "7891024034743": { interno: "020", nome: "Sab Palmolive 85g Argan", preco: 1.98, unidade: "UNIDADE" },
    "7896089405774": { interno: "021", nome: "Papel Hig Bob C/12 Fd 20m Soft Neutro", preco: 8.99, unidade: "UNIDADE" },
    "7898406230304": { interno: "022", nome: "Biscoito Luam 300g Cream Cracker", preco: 2.89, unidade: "UNIDADE" },
    "7896022205669": { interno: "023", nome: "Biscoito Todeschini 360g Cream Cracker", preco: 4.89, unidade: "UNIDADE" },
    "7892840822491": { interno: "024", nome: "Salgadinho Torcida 35g Pao De Alho", preco: 1.29, unidade: "UNIDADE" },
    "7896004006277": { interno: "025", nome: "Batata Pringles 104g Original", preco: 9.99, unidade: "UNIDADE" },
    "7891000369098": { interno: "026", nome: "Choc Nestle 80g Classic Ao Leite", preco: 7.49, unidade: "UNIDADE" },
    "7891000457467": { interno: "027", nome: "Bombom Nestle 220g Especialidades", preco: 10.99, unidade: "UNIDADE" },
    "7891000248768": { interno: "028", nome: "Choc Nestle 41,5g Kit Kat", preco: 3.89, unidade: "UNIDADE" },
    "7896434920471": { interno: "029", nome: "Doce Triangulo 400g Leite Pastoso Pote", preco: 5.99, unidade: "UNIDADE" },
    "7896569400534": { interno: "030", nome: "Bebida Lac Lider 1l Choc", preco: 4.49, unidade: "UNIDADE" },
    "7898215152002": { interno: "031", nome: "Leite Condensado Piracanjuba 395g Tp", preco: 5.99, unidade: "UNIDADE" },
    "7896569400848": { interno: "032", nome: "Creme Leite Lider 200g Tp", preco: 2.49, unidade: "UNIDADE" },
    "7891079006009": { interno: "033", nome: "Mac Nissin 500g Espag T3", preco: 7.49, unidade: "UNIDADE" },
    "7891079001004": { interno: "034", nome: "Mac Nissin 85g Monica Carne", preco: 2.49, unidade: "UNIDADE" },
    "7896022200213": { interno: "035", nome: "Mac Renata 500g Ovos Sem Pena", preco: 4.45, unidade: "UNIDADE" },
    "7896036000793": { interno: "036", nome: "Extrato Tomate Elefante 135g Tp", preco: 3.49, unidade: "UNIDADE" },
    "7896102502909": { interno: "037", nome: "Ketchup Quero 300g Tp", preco: 4.99, unidade: "UNIDADE" },
    "7898902299058": { interno: "038", nome: "Milho Verde Stella Doro 170g Lt", preco: 2.59, unidade: "UNIDADE" },
    "7896272000038": { interno: "039", nome: "Azeitona Verde Vale Fertil 500g C/Caroco", preco: 14.90, unidade: "UNIDADE" },
    "5601216120114": { interno: "040", nome: "Azeite Andorinha 500ml Puro Vidro", preco: 29.98, unidade: "UNIDADE" },
    "7896048200051": { interno: "041", nome: "Vinagre Castelo 750ml Alcool Trad", preco: 2.49, unidade: "UNIDADE" },
    "7897005101473": { interno: "042", nome: "Farofa Mandioca Kinino 400g Temp Trad", preco: 4.99, unidade: "UNIDADE" },
    "7896100013018": { interno: "043", nome: "Sal Refinado Moc 1kg", preco: 2.19, unidade: "UNIDADE" },
    "7896045112081": { interno: "044", nome: "Refr Po Frisco 18g Laranja", preco: 0.65, unidade: "UNIDADE" },
    "7894900508017": { interno: "045", nome: "Bebida Isotonica Powerade 500ml Frutas Tropicais", preco: 4.49, unidade: "UNIDADE" },
    "7896095150057": { interno: "046", nome: "Suco Ottobello 1,35l Uva Integral", preco: 12.98, unidade: "UNIDADE" },
    "7898944548039": { interno: "047", nome: "Agua Min Cristal Select 1,5l S/Gas", preco: 2.49, unidade: "UNIDADE" },
    "7898344178690": { interno: "048", nome: "Agua Coco New Coco Select 1l", preco: 6.99, unidade: "UNIDADE" },
    "7898080663733": { interno: "049", nome: "Bebida Energetica Baly 473ml Tradicional Lata", preco: 5.89, unidade: "UNIDADE" },
    "78908901": { interno: "050", nome: "Refrig Coca-Cola 200ml Pet", preco: 1.89, unidade: "UNIDADE" },
    "7894900011609": { interno: "051", nome: "Refrig Coca-Cola 600ml Pet", preco: 5.49, unidade: "UNIDADE" },
    "7897395099329": { interno: "052", nome: "Cerveja Petra 350ml Puro Malte Lata", preco: 2.79, unidade: "UNIDADE" },
    "7891991014762": { interno: "053", nome: "Cerveja Budweiser 330ml Long Neck", preco: 5.49, unidade: "UNIDADE" },
    "7891991015462": { interno: "054", nome: "Cerveja Stella Artois 330ml Long Neck", preco: 5.89, unidade: "UNIDADE" },
    "7896002100014": { interno: "055", nome: "Aguard 51 965ml C/Casco", preco: 11.90, unidade: "UNIDADE" },
    "7898080665690": { interno: "056", nome: "Coquetel Master Gold 900ml", preco: 18.90, unidade: "UNIDADE" },
    "7896010006315": { interno: "057", nome: "Aperitivo Bitter Campari 998ml", preco: 54.90, unidade: "UNIDADE" },
    "7893218003610": { interno: "058", nome: "Vodka Smirnoff 269ml Ice Lata", preco: 4.99, unidade: "UNIDADE" },
    "7893218000473": { interno: "059", nome: "Vodka Smirnoff 998ml Red", preco: 26.90, unidade: "UNIDADE" },
    "7896092502460": { interno: "060", nome: "Vodka Askov 900ml", preco: 14.90, unidade: "UNIDADE" },
    "7891050001160": { interno: "061", nome: "Whisky Passport 1l", preco: 39.90, unidade: "UNIDADE" },
    "5000265001335": { interno: "062", nome: "Whisky White Horse 1lt", preco: 64.90, unidade: "UNIDADE" },
    "5000267190686": { interno: "063", nome: "Whisky Johnnie Walker 1l Red Label", preco: 89.90, unidade: "UNIDADE" },
    "7898172661623": { interno: "064", nome: "Vinho Catupinga 900ml Branco Doce", preco: 14.90, unidade: "UNIDADE" },
    "7891141015830": { interno: "065", nome: "Vinho Marcus James 750ml Cabernet Sauvignon", preco: 19.90, unidade: "UNIDADE" },
    "7804320116846": { interno: "066", nome: "Vinho Concha y Toro 750ml Reservado Cabernet", preco: 24.90, unidade: "UNIDADE" },
    "7798123971606": { interno: "067", nome: "Vinho Chac Chac 750Ml Malbec Rose", preco: 36.90, unidade: "UNIDADE" },
    "7804320303178": { interno: "068", nome: "Vinho Casillero Del Diablo 750ml Cabernet", preco: 45.90, unidade: "UNIDADE" },
    "5601096351301": { interno: "069", nome: "Vinho Casal Garcia 750ml Tinto", preco: 54.90, unidade: "UNIDADE" },
    "7896404607531": { interno: "070", nome: "Lava Roupa Girando Sol 3l Liq Acao Total", preco: 25.90, unidade: "UNIDADE" },
    "7896098902400": { interno: "071", nome: "Amac Ype 2l Aconchego", preco: 7.99, unidade: "UNIDADE" },
    "7896404607814": { interno: "072", nome: "Amac Girando Sol 1,5l Conc Azul", preco: 23.90, unidade: "UNIDADE" },
    "7896527701468": { interno: "073", nome: "Agua Sanitaria Triex 5l", preco: 11.90, unidade: "UNIDADE" },
    "7896745803753": { interno: "074", nome: "Percarbonato Bel Lar 1kg Sodio", preco: 21.90, unidade: "UNIDADE" },
    "7896404608163": { interno: "075", nome: "Sabao Girando Sol 900g Barra Trad", preco: 8.49, unidade: "UNIDADE" },
    "7891150022034": { interno: "076", nome: "Limp Cif 450ml Crem Limp Profunda Original", preco: 15.98, unidade: "UNIDADE" },
    "7891035800214": { interno: "077", nome: "Limp Veja 500ml Gold Multi Trad 10 Desc", preco: 3.99, unidade: "UNIDADE" },
    "7896527700386": { interno: "078", nome: "Desinf Triex 2l Lavandas Campo", preco: 5.98, unidade: "UNIDADE" },
    "7891035617959": { interno: "079", nome: "Inset Sbp 450ml Aer Multi Inset Base Agua Lp", preco: 17.98, unidade: "UNIDADE" },
    "7896001045149": { interno: "080", nome: "Esponja Brilhus L4p3 Multiuso", preco: 3.69, unidade: "UNIDADE" },
    "7500435132831": { interno: "081", nome: "Fralda Pampers Supersequinha Jumbo g C/80", preco: 87.90, unidade: "UNIDADE" },
    "7896104992432": { interno: "082", nome: "Toalha Umed Milli Baby C/96 Protecao Delicada", preco: 9.98, unidade: "UNIDADE" },
    "7896104996393": { interno: "083", nome: "Papel Hig Mili C/12 Fd 30m Neutro", preco: 16.90, unidade: "UNIDADE" },
    "7896104991503": { interno: "084", nome: "Abs Mili C/32 Mulher Noturno Discreto C/Abas", preco: 16.98, unidade: "UNIDADE" },
    "7891150102613": { interno: "085", nome: "Sh Dove 370ml Nutricao", preco: 23.90, unidade: "UNIDADE" },
    "7891024174715": { interno: "086", nome: "Cond Palmolive 350ml Nat Ceramidas", preco: 8.49, unidade: "UNIDADE" },
    "7891024174210": { interno: "087", nome: "Sh Palmolive 350ml Nat Ceramidas", preco: 7.99, unidade: "UNIDADE" },
    "7891150070325": { interno: "088", nome: "Cr Pentear Seda 700ml Ceramidas", preco: 18.90, unidade: "UNIDADE" },
    "7791969016036": { interno: "089", nome: "Des Nivea 150ml Aer Fem Dry Comfort", preco: 12.98, unidade: "UNIDADE" }
};

// Força o carregamento da nova lista limpando o cache antigo do navegador
let bancoProdutos = produtosPadrao;
localStorage.setItem('meusProdutosV4', JSON.stringify(bancoProdutos));

const inputBipar = document.getElementById('input-bipar');
const mensagemErro = document.getElementById('mensagem-erro');

function atualizarDataHoje() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    document.getElementById('cartaz-data').textContent = `${dia}/${mes}/${ano}`;
}
atualizarDataHoje();

function mudarTamanho() {
    const modo = document.getElementById('select-tamanho').value;
    const cartaz = document.getElementById('cartaz');
    
    cartaz.classList.remove('modo-a5-h', 'modo-a3-h');
    cartaz.classList.add('modo-' + modo);

    const papel = modo.startsWith('a5') ? 'A5' : 'A3';

    let stylePage = document.getElementById('estilo-pagina-dinamico');
    if (!stylePage) {
        stylePage = document.createElement('style');
        stylePage.id = 'estilo-pagina-dinamico';
        document.head.appendChild(stylePage);
    }
    stylePage.innerHTML = `@media print { @page { size: ${papel} landscape; margin: 0; } }`;
    
    inputBipar.focus();
}
mudarTamanho();

inputBipar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const codigo = inputBipar.value.trim();
        buscarEAtualizarCartaz(codigo);
        inputBipar.value = '';
    }
});

function buscarEAtualizarCartaz(codigo) {
    const produto = bancoProdutos[codigo];

    if (produto) {
        mensagemErro.textContent = '';
        const precoFormatado = produto.preco.toFixed(2).split('.');
        
        document.getElementById('cartaz-nome').textContent = produto.nome;
        document.getElementById('cartaz-inteiro').textContent = precoFormatado[0];
        document.getElementById('cartaz-centavos').textContent = precoFormatado[1];
        document.getElementById('cartaz-unidade').textContent = produto.unidade;
        document.getElementById('cartaz-interno').textContent = produto.interno || codigo;
        atualizarDataHoje();
    } else {
        mensagemErro.textContent = `Código "${codigo}" não encontrado! Cadastre abaixo.`;
        document.getElementById('cad-codigo').value = codigo;
    }
}

document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    const codigo = document.getElementById('cad-codigo').value.trim();
    const interno = document.getElementById('cad-interno').value.trim();
    const nome = document.getElementById('cad-nome').value.trim();
    const preco = parseFloat(document.getElementById('cad-preco').value);
    const unidade = document.getElementById('cad-unidade').value.trim().toUpperCase();

    bancoProdutos[codigo] = { interno, nome, preco, unidade };
    localStorage.setItem('meusProdutosV4', JSON.stringify(bancoProdutos));

    this.reset();
    buscarEAtualizarCartaz(codigo);
    inputBipar.focus();
});