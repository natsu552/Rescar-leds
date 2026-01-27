const produtosContainer = document.getElementById('produtos-container');

// Função para carregar produtos de uma categoria
async function carregarProdutos(categoria) {
    produtosContainer.innerHTML = ''; // limpa produtos

    let { data: produtos, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', categoria);

    if (error) {
        console.error('Erro ao carregar produtos:', error);
        produtosContainer.innerHTML = '<p>Erro ao carregar produtos.</p>';
        return;
    }

    produtos.forEach(p => {
        const div = document.createElement('div');
        div.classList.add('product-item');

        // Carrossel de 4 fotos
        div.innerHTML = `
            <div class="carousel">
                <img src="${p.image1}" alt="${p.name}">
                <img src="${p.image2}" alt="${p.name}" style="display:none">
                <img src="${p.image3}" alt="${p.name}" style="display:none">
                <img src="${p.image4}" alt="${p.name}" style="display:none">
            </div>
            <h3 class="item-title">${p.name}</h3>
            <span class="price-now">R$ ${p.price.toFixed(2).replace('.',',')}</span>
            <button class="btn-buy" onclick="addToCart('${p.name}', ${p.price})">Comprar</button>
        `;
        produtosContainer.appendChild(div);

        iniciarCarrossel(div.querySelector('.carousel'));
    });
}

// Função para carrossel automático
function iniciarCarrossel(carousel) {
    const imgs = carousel.querySelectorAll('img');
    let i = 0;
    setInterval(() => {
        imgs.forEach(img => img.style.display = 'none');
        i = (i + 1) % imgs.length;
        imgs[i].style.display = 'block';
    }, 3000); // troca a cada 3s
}

// Exemplo: carregar categoria "ledcolor" ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos('ledcolor'); // ou 'ledrescar', conforme a página
});