
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});

document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("responseButtons").classList.remove("hidden");
});

document.getElementById("yesButton").addEventListener("click", function() {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = "Muito bem! O p. Diddy já está se afastando da sua casa!";
    resultMessage.classList.remove("hidden");
    document.getElementById("responseButtons").classList.add("hidden");
});

document.getElementById("noButton").addEventListener("mouseenter", function() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    
    const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

document.getElementById("noButton").addEventListener("click", function() {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = "Escolha errada! O p. Diddy vai aparecer atrás de você em 3,2,1...";
    resultMessage.classList.remove("hidden");
    document.getElementById("responseButtons").classList.add("hidden");
});
