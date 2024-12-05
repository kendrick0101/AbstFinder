let h2 = document.querySelector('h2');

function posicaoObitidaComSucesso(sucesso) {
    const latitude = sucesso.coords.latitude;
    const longitude = sucesso.coords.longitude;

    // Usando a API Nominatim para obter o endereço
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
            let resultado = '';

            // Verifica se a rua e o bairro estão disponíveis
            const rua = data?.address?.road;
            const bairro = data?.address?.neighbourhood;

            if (rua && bairro) {
                resultado = `${rua}, ${bairro}`; // Exibe a rua e o bairro
            } else if (rua) {
                resultado = rua; // Exibe apenas a rua
            } else if (bairro) {
                resultado = bairro; // Exibe apenas o bairro
            } else {
                resultado = "Rua e bairro não encontrados.";
            }

            h2.textContent = resultado; // Atualiza o conteúdo da tag h2
        })
        .catch(error => {
            console.error('Erro ao obter o endereço:', error);
            h2.textContent = "Erro ao obter o endereço.";
        });
}

function posicaoNaoObitida(erro) {
    console.log(erro);
    h2.textContent = "Não foi possível obter a localização.";
}

// Obtém a posição atual
navigator.geolocation.getCurrentPosition(posicaoObitidaComSucesso, posicaoNaoObitida);