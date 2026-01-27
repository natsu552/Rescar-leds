// Importa o Supabase
import { supabase } from './supabase.js';

// Elementos principais
const list = document.getElementById('products-list');
const panel = document.getElementById('edit-panel');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-panel');

// Campos do formulário
const nameInput = document.getElementById('edit-name');
const priceInput = document.getElementById('edit-price');
const categoryInput = document.getElementById('edit-category');
const imageInput = document.getElementById('edit-image'); // agora só uma URL

// ID do produto em edição
let currentProductId = null;

/* =========================
   BUSCA PRODUTOS
========================= */
async function loadProducts() {

  // Busca todos os produtos
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    alert('Erro ao carregar produtos');
    console.error(error);
    return;
  }

  list.innerHTML = '';

  // Renderiza cards
  data.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';

    div.innerHTML = `
      <img src="${product.image || ''}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Preço: R$ ${product.price}</p>
      <p>Categoria: ${product.category}</p>
    `;

    // Ao clicar → abre painel
    div.onclick = () => openPanel(product);
    list.appendChild(div);
  });
}

/* =========================
   ABRE PAINEL
========================= */
function openPanel(product) {

  currentProductId = product.id;

  nameInput.value = product.name;
  priceInput.value = product.price;
  categoryInput.value = product.category;
  imageInput.value = product.image || '';

  panel.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

/* =========================
   FECHA PAINEL
========================= */
closeBtn.onclick = () => {
  panel.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* =========================
   SALVAR ALTERAÇÕES
========================= */
document.getElementById('edit-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Atualiza produto no Supabase
  const { error } = await supabase
    .from('products')
    .update({
      name: nameInput.value,
      price: Number(priceInput.value),
      category: categoryInput.value,
      image: imageInput.value
    })
    .eq('id', currentProductId);

  if (error) {
    alert('Erro ao salvar');
    console.error(error);
    return;
  }

  alert('Produto atualizado!');
  panel.classList.add('hidden');
  overlay.classList.add('hidden');

  // Recarrega produtos
  loadProducts();
});

// Carrega produtos ao abrir a página
loadProducts();