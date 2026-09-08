document.addEventListener("click", function (event) {

    // Создаём картинку
    const rika = new Image();

    rika.onload = function () {
        console.log("РИКА ЗАГРУЗИЛАСЬ");

        rika.style.position = "fixed";
        rika.style.zIndex = "999999";
        rika.style.pointerEvents = "none";
        rika.style.width = "250px";
        rika.style.height = "auto";

        // Абсолютно случайное место экрана
        rika.style.left =
            Math.random() * (window.innerWidth - 250) + "px";

        rika.style.top =
            Math.random() * (window.innerHeight - 300) + "px";

        document.body.appendChild(rika);

        setTimeout(function () {
            rika.remove();
        }, 1000);
    };

    rika.onerror = function () {
        console.error("РИКА НЕ ЗАГРУЗИЛАСЬ:", rika.src);
        alert("Не удалось загрузить rika.png");
    };

    // Именно файл из корня сайта
    rika.src = "./rika.png";


    // ЗВУК
    const sound = new Audio("./nipaa.ogg");
    sound.play().catch(function(error) {
        console.error("Ошибка звука:", error);
    });

});
