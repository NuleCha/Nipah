document.addEventListener("click", function () {
    const rika = document.createElement("img");

    rika.src = "rika.png";
    rika.className = "rika";

    // Случайный размер
    const size = 150 + Math.random() * 150;
    rika.style.width = size + "px";

    // Случайная позиция по всему экрану
    rika.style.left = Math.random() * (window.innerWidth - size) + "px";
    rika.style.top = Math.random() * (window.innerHeight - size) + "px";

    // Добавляем Рику
    document.body.appendChild(rika);

    // Удаляем её через 1 секунду
    setTimeout(function () {
        rika.remove();
    }, 1000);

    // Новый звук для каждого клика
    const sound = new Audio("nipaa.ogg");
    sound.play();
});
