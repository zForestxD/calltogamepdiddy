// Exibe a mensagem e os botões "SIM" e "NÃO" ao clicar no botão de surpresa
document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("responseButtons").classList.remove("hidden");
});

// Lógica para o botão "SIM" - Mostra mensagem de felicitações
document.getElementById("yesButton").addEventListener("click", function() {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = "🎉 Parabéns! Você fez a escolha certa! 🎉";
    resultMessage.classList.remove("hidden");
    document.getElementById("responseButtons").classList.add("hidden");
});

// Lógica para o botão "NÃO" - Mostra mensagem de brincadeira e faz o botão fugir
document.getElementById("noButton").addEventListener("mouseenter", function() {
    // Move o botão para uma posição aleatória
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    
    // Gera posições aleatórias dentro do container
    const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noButton.offsetHeight);

    // Aplica as novas posições
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Mensagem de "hackeado" ao clicar no botão "NÃO"
document.getElementById("noButton").addEventListener("click", function() {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = "Escolha errada emilly! Você está sendo hackeada em 3...2...1..";
    resultMessage.classList.remove("hidden");
    document.getElementById("responseButtons").classList.add("hidden");
});
