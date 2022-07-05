const imagem = document.querySelector('#produto-foto img');
const nome = document.getElementById('produto-nome');
const preco = document.getElementById('produto-preco');

const procura = document.getElementById('input-procura');
const erroBox = document.getElementById('erro');

window.onload = () => procura.value = '';

procura.addEventListener('keydown', (ev)=>{
	if(ev.key == 'Enter'){
		erroBox.style.display = 'none';
		document.querySelector("table").style.display = 'none';
		procurarProduto(procura.value.toLowerCase());
	}
});

function procurarProduto(valor){
	fetch('data.json')
		.then(response => response.json())
		.then(data => {
			let produtosNomes = [];
			data.forEach(item => produtosNomes.push(item.nome));

			let posicaoDoProduto = produtosNomes.indexOf(valor); 
			
			if(posicaoDoProduto == -1){
				erroBox.style.display = 'block';
			}
			else{
				document.querySelector("table").style.display = 'inline-block';
				imagem.src = data[posicaoDoProduto].url;
				nome.innerText = data[posicaoDoProduto].nome;
				preco.innerText = data[posicaoDoProduto].preco;
			}
		})
}
