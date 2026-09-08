(() => {
  const rika = document.getElementById("rika");
  const text = document.getElementById("nipaa-text");
  const sound = document.getElementById("nipaa-sound");

  let hideTimer;
  let textTimer;

  document.addEventListener("click", () => {
    clearTimeout(hideTimer);
    clearTimeout(textTimer);

    rika.classList.add("show");

    textTimer = setTimeout(() => {
      text.classList.add("show");
    }, 450);

    // Браузеры разрешают звук после пользовательского клика.
    sound.currentTime = 0;
    sound.play().catch(() => {});

    hideTimer = setTimeout(() => {
      text.classList.remove("show");
      rika.classList.remove("show");
    }, 3200);
  });
})();
