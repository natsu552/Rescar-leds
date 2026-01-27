// Importa o Supabase (mesma pasta)
import { supabase } from './supabase.js';

// Pega o formulário
const form = document.getElementById('login-form');
const errorText = document.getElementById('login-error');

// Envio do formulário
form.addEventListener('submit', async (e) => {

    // Impede recarregar
    e.preventDefault();

    // Limpa erro anterior
    errorText.innerText = '';

    // Dados digitados
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Login no Supabase
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    // Se der erro
    if (error) {
        errorText.innerText = 'Email ou senha inválidos';
        return;
    }

    // Login OK → vai para admin
    window.location.href = './admin.html';
});