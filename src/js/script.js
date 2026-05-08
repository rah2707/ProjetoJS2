function trocar(cor){
    document.body.style.background = cor;
}
// Array de objetos (banco de dados)
const produtos=[
    {nome:"TECLADO GAMER", preco:200,emPromocao:true},
    {nome:"MOUSE GAMER", preco:150,emPromocao:false},
    {nome:"MONITOR GAMER", preco:200,emPromocao:true},
    {nome:"MOUSE PAD", preco:50,emPromocao:false},
];

//Map - transforma o array de obj em um unico array no html

const container = document.getElementById("lista-produtos");
const mostrarTotal = document.getElementById("resultado-total");

function cardProdutos(lista) {
    mostrarTotal.innerText ="";
    const htmlProdutos = lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: ${item.preco}</p>
            ${item.emPromocao ? "<span class = 'tag'>Promoção</span>":""}
        </div>
        `).join('');
        container.innerHTML = htmlProdutos;
}

//filter - cria uma nova lista apenas com o que selecionou
function filtrarPromocoes() {
    const promocionais = produtos.filter(item => item.emPromocao);
    cardProdutos(promocionais);
}

//reduce = reduz o array a um unico valor (soma dos precos)
// `` crase - chamada de templatestring significa concatenar
function calcularTotal(){
    const total = produtos.reduce((acumulador, item) => {
        return acumulador + item.preco;
    },0)
    mostrarTotal.innerText = `Valor total é de ${total}`
}