document.getElementById('form1').addEventListener('submit', function (event) {
    // Impede o envio do formulário se houver campos em branco
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');

    // Verifica se os campos estão vazios
    if (
        nome.value.trim() === '' || 
        email.value.trim() === '' || 
        assunto.value.trim() === '' || 
        mensagem.value.trim() === ''
    ) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});

