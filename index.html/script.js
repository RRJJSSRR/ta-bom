document.getElementById('simButton').addEventListener('click', function () {
    document.getElementById('resultado').textContent = 'Querida Yasmimm, Hoje é um daqueles dias que ficarão marcados eternamente em nossas memórias, pois você aceitou o meu pedido de namoro. Não há palavras que possam expressar completamente a alegria e gratidão que estou sentindo neste momento. A sua decisão de compartilhar sua vida comigo enche meu coração de felicidade e gratidão. É um privilégio saber que teremos muitas aventuras, risos e momentos inesquecíveis juntos. Agradeço por abrir seu coração para mim e por acreditar no nosso amor. Prometo cuidar de você, respeitá-la e amá-la com todo o meu ser. Eu te amo mais do que as palavras podem dizer. Com todo o meu amor, Rafael.';
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('resultado').classList.add('sim');
    document.getElementById('simButton').style.display = 'none'; // Oculta o botão Sim
    document.getElementById('naoButton').style.display = 'none'; // Oculta o botão Não

});

document.getElementById('naoButton').addEventListener('click', function () {
    document.getElementById('resultado').textContent = 'Tem essa não, ou é sim ou é sim, reinicia a página e responda sim ai!!!!';
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('resultado').classList.add('nao');
    document.getElementById('simButton').style.display = 'none'; // Oculta o botão Sim
    document.getElementById('naoButton').style.display = 'none'; // Oculta o botão Não
});







