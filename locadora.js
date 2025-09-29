// Objeto para rastrear o status de cada filme
const statusFilmes = {};

function simularLocacao(filmeId, tipoAcao) {
  const statusElement = document.getElementById(`status-${filmeId}`);

  if (!statusElement) {
    console.error("Elemento de status não encontrado para:", filmeId);
    return;
  }

  let mensagem = "";

  // Filme já vendido? Não pode mais emprestar/vender.
  if (statusFilmes[filmeId] === 1) {
    mensagem = `ERRO: O filme já foi VENDIDO e não está mais disponível.`;
    statusElement.textContent = mensagem;
    statusElement.classList.add('status-vendido');
    return;
  }

  if (tipoAcao === 'Emprestar') {
    mensagem = `SIMULAÇÃO: O filme foi EMPRESTADO com sucesso por R$ 5,00. Aproveite!`;
    statusFilmes[filmeId] = 2; // Emprestado
    statusElement.classList.remove('status-vendido');
  } else if (tipoAcao === 'Vender') {
    mensagem = `SIMULAÇÃO: Parabéns! Você VENDEU o filme por R$ 30,00. Estoque esgotado!`;
    statusFilmes[filmeId] = 1; // Vendido
    statusElement.classList.add('status-vendido');

    // Desabilitar os botões após a venda
    const botoes = statusElement.closest('.locadora-actions').querySelectorAll('button');
    botoes.forEach(btn => btn.disabled = true);
  }

  // Atualiza o texto na tela e mostra alerta
  statusElement.textContent = mensagem;
  alert(mensagem);
}
